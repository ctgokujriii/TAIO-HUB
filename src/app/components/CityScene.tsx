'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { districts } from './cityData';

type Props = {
  active: number;
  onSelect: (index: number, fromUser: boolean) => void;
};

// Small seeded random so the city is the same on every visit.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,255,255,0.45)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

const VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const FRAG = `uniform vec3 uColor; uniform float uBoost; uniform float uSolid; varying vec2 vUv;
void main(){ float g = mix(0.05, 0.3, pow(vUv.y, 1.6)); g = mix(g, 0.9, uSolid); gl_FragColor = vec4(uColor * g * uBoost, 1.0); }`;

export default function CityScene({ active, onSelect }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeRef = useRef(active);
  const selectRef = useRef(onSelect);
  activeRef.current = active;
  selectRef.current = onSelect;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return; // no WebGL: the CSS backdrop and the HTML content still carry the hero
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, coarse ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    wrap.prepend(renderer.domElement);
    renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;';

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070512, 0.012);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 400);

    const disposables: { dispose: () => void }[] = [];
    const track = <T extends { dispose: () => void }>(o: T) => {
      disposables.push(o);
      return o;
    };

    const glow = track(glowTexture());
    const box = track(new THREE.BoxGeometry(1, 1, 1));
    box.translate(0, 0.5, 0);
    const edges = track(new THREE.EdgesGeometry(box));

    type Tower = { mesh: THREE.Object3D; h: number; delay: number };
    const towers: Tower[] = [];
    const glassMats: THREE.ShaderMaterial[] = [];
    const lineMats: THREE.LineBasicMaterial[] = [];
    const pickTargets: THREE.Mesh[] = [];
    const tops: THREE.Vector3[] = [];
    const pickMat = track(new THREE.MeshBasicMaterial({ visible: false }));

    districts.forEach((d, di) => {
      const rand = rng(di * 97 + 11);
      const color = new THREE.Color(d.color);
      const group = new THREE.Group();
      group.position.set(d.x, 0, d.z);
      scene.add(group);

      const mat = (solid: number) =>
        track(
          new THREE.ShaderMaterial({
            uniforms: { uColor: { value: color }, uBoost: { value: 1 }, uSolid: { value: solid } },
            vertexShader: VERT,
            fragmentShader: FRAG,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
          }),
        );
      const glass = mat(0);
      const solid = mat(1);
      glassMats.push(glass, solid);
      const line = track(
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      lineMats.push(line);

      const cell = 1.25;
      const size = d.n * cell + 1.2;

      // platform slab
      const slab = new THREE.Group();
      slab.add(new THREE.Mesh(box, glass), new THREE.LineSegments(edges, line));
      slab.scale.set(size, 0.35, size);
      slab.position.y = -0.35;
      group.add(slab);

      // light pooled on the ground under the district
      const pool = new THREE.Sprite(
        track(new THREE.SpriteMaterial({ map: glow, color, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false })),
      );
      pool.scale.set(size * 3.4, size * 1.5, 1);
      pool.position.y = 0.2;
      group.add(pool);

      // towers
      const beacon = Math.floor(rand() * d.n * d.n);
      for (let i = 0; i < d.n * d.n; i++) {
        const cx = (i % d.n) - (d.n - 1) / 2;
        const cz = Math.floor(i / d.n) - (d.n - 1) / 2;
        const edge = Math.max(Math.abs(cx), Math.abs(cz)) / Math.max(1, (d.n - 1) / 2);
        const h = i === beacon ? d.h : Math.max(0.6, d.h * (0.25 + rand() * 0.7) * (1 - edge * 0.35));
        const t = new THREE.Group();
        t.add(new THREE.Mesh(box, i === beacon ? solid : glass), new THREE.LineSegments(edges, line));
        t.position.set(cx * cell, 0, cz * cell);
        t.scale.set(0.82, reduced ? h : 0.001, 0.82);
        group.add(t);
        towers.push({ mesh: t, h, delay: di * 0.09 + rand() * 0.35 });
      }

      const pick = new THREE.Mesh(box, pickMat);
      pick.scale.set(size, d.h, size);
      pick.position.set(d.x, 0, d.z);
      pick.userData.index = di;
      scene.add(pick);
      pickTargets.push(pick);
      tops.push(new THREE.Vector3(d.x, d.h + 1.2, d.z));
    });

    // dashed survey rings on the ground
    const ringMat = track(
      new THREE.LineDashedMaterial({ color: 0x8f86ff, transparent: true, opacity: 0.22, dashSize: 0.5, gapSize: 0.5 }),
    );
    [17, 25].forEach((r) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 160; i++) {
        const a = (i / 160) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, -0.3, Math.sin(a) * r * 0.92));
      }
      const ring = new THREE.Line(track(new THREE.BufferGeometry().setFromPoints(pts)), ringMat);
      ring.computeLineDistances();
      scene.add(ring);
    });

    // lines of light between districts, each carrying a pulse
    const links: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [5, 0], [5, 3], [0, 4]];
    const arcMat = track(
      new THREE.LineBasicMaterial({ color: 0xffb7d9, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    const pulses: { curve: THREE.QuadraticBezierCurve3; sprite: THREE.Sprite; speed: number; offset: number }[] = [];
    links.forEach(([a, b], i) => {
      const A = districts[a];
      const B = districts[b];
      const start = new THREE.Vector3(A.x, A.h * 0.7, A.z);
      const end = new THREE.Vector3(B.x, B.h * 0.7, B.z);
      const mid = start.clone().lerp(end, 0.5);
      mid.y += start.distanceTo(end) * 0.45 + 2;
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      scene.add(new THREE.Line(track(new THREE.BufferGeometry().setFromPoints(curve.getPoints(48))), arcMat));
      const sprite = new THREE.Sprite(
        track(
          new THREE.SpriteMaterial({ map: glow, color: new THREE.Color(B.color).lerp(new THREE.Color(0xffffff), 0.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }),
        ),
      );
      sprite.scale.setScalar(1.1);
      sprite.position.copy(curve.getPoint(0.5));
      scene.add(sprite);
      pulses.push({ curve, sprite, speed: 0.16 + (i % 3) * 0.05, offset: i * 0.37 });
    });

    // drifting orbs on the outer rings
    const orbs: { sprite: THREE.Sprite; r: number; speed: number; phase: number; y: number }[] = [];
    ['#ff4f8b', '#4d8dff', '#ffb454', '#9b7bff', '#3ee6c1'].forEach((c, i) => {
      const sprite = new THREE.Sprite(
        track(new THREE.SpriteMaterial({ map: glow, color: c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })),
      );
      sprite.scale.setScalar(1.5);
      scene.add(sprite);
      orbs.push({ sprite, r: i % 2 ? 25 : 17, speed: (i % 2 ? -1 : 1) * (0.05 + i * 0.012), phase: i * 1.7, y: 0.4 + (i % 3) });
    });

    // dust
    const dustRand = rng(5);
    const dust = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      dust[i * 3] = (dustRand() - 0.5) * 90;
      dust[i * 3 + 1] = dustRand() * 30 - 2;
      dust[i * 3 + 2] = (dustRand() - 0.5) * 90;
    }
    const dustGeo = track(new THREE.BufferGeometry());
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dust, 3));
    scene.add(
      new THREE.Points(
        dustGeo,
        track(new THREE.PointsMaterial({ color: 0xb9b2ff, size: 0.12, transparent: true, opacity: 0.55, depthWrite: false })),
      ),
    );

    // camera + controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // keep page scroll working
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.autoRotate = !reduced;
    controls.autoRotateSpeed = 0.55;
    controls.minPolarAngle = 0.75;
    controls.maxPolarAngle = 1.32;
    controls.target.set(0, 2.2, 0);
    if (coarse) {
      // on touch screens the city turns by itself so swipes still scroll the page
      controls.enabled = false;
      renderer.domElement.style.touchAction = 'pan-y';
    }

    let w = 1;
    let h = 1;
    const resize = () => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const wide = w >= 1024;
      const dist = 46 * Math.max(1, Math.min(2.1, 1.25 / camera.aspect));
      const dir = camera.position.lengthSq() > 1 ? camera.position.clone().sub(controls.target).normalize() : new THREE.Vector3(0.62, 0.48, 0.62).normalize();
      camera.position.copy(controls.target).addScaledVector(dir, dist);
      // shift the city away from the copy: right on desktop, up on phones
      if (wide) camera.setViewOffset(w, h, -w * 0.14, -h * 0.02, w, h);
      else camera.setViewOffset(w, h, 0, h * 0.27, w, h);
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // picking
    const ray = new THREE.Raycaster();
    const ptr = new THREE.Vector2();
    let down = { x: 0, y: 0 };
    const hit = (e: PointerEvent) => {
      const r = renderer.domElement.getBoundingClientRect();
      ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ptr, camera);
      const hits = ray.intersectObjects(pickTargets, false);
      return hits.length ? (hits[0].object.userData.index as number) : -1;
    };
    const onMove = (e: PointerEvent) => {
      renderer.domElement.style.cursor = hit(e) >= 0 ? 'pointer' : 'grab';
    };
    const onDown = (e: PointerEvent) => {
      down = { x: e.clientX, y: e.clientY };
    };
    const onUp = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return;
      const i = hit(e);
      if (i >= 0) selectRef.current(i, true);
    };
    const el = renderer.domElement;
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    const stopSpin = () => {
      controls.autoRotate = false;
    };
    controls.addEventListener('start', stopSpin);

    // loop
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(wrap);
    const clock = new THREE.Clock();
    const v = new THREE.Vector3();
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      const t = clock.getElapsedTime();

      if (!reduced && t < 2.2) {
        towers.forEach((tw) => {
          const k = Math.min(1, Math.max(0, (t - tw.delay) / 0.9));
          tw.mesh.scale.y = Math.max(0.001, tw.h * ease(k));
        });
      } else if (!reduced && towers[0].mesh.scale.y !== towers[0].h) {
        towers.forEach((tw) => (tw.mesh.scale.y = tw.h));
      }

      districts.forEach((_, i) => {
        const on = i === activeRef.current;
        const target = on ? 1.9 : 0.85;
        for (const m of [glassMats[i * 2], glassMats[i * 2 + 1]]) {
          m.uniforms.uBoost.value += (target - m.uniforms.uBoost.value) * 0.08;
        }
        lineMats[i].opacity += ((on ? 0.95 : 0.4) - lineMats[i].opacity) * 0.08;
      });

      if (!reduced) {
        pulses.forEach((p) => {
          const k = (t * p.speed + p.offset) % 1;
          p.sprite.position.copy(p.curve.getPoint(k));
          p.sprite.material.opacity = Math.sin(k * Math.PI);
        });
      }
      orbs.forEach((o) => {
        const a = o.phase + (reduced ? 0 : t * o.speed);
        o.sprite.position.set(Math.cos(a) * o.r, o.y, Math.sin(a) * o.r * 0.92);
      });

      controls.update();
      renderer.render(scene, camera);

      // pin the HTML labels to their districts
      tops.forEach((top, i) => {
        const label = labelRefs.current[i];
        if (!label) return;
        v.copy(top).project(camera);
        label.style.transform = `translate(-50%, -100%) translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px)`;
        label.style.opacity = v.z < 1 ? '1' : '0';
      });
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
      controls.dispose();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      el.remove();
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0" aria-hidden="true">
      {districts.map((d, i) => (
        <button
          key={d.id}
          ref={(node) => {
            labelRefs.current[i] = node;
          }}
          tabIndex={-1}
          onClick={() => onSelect(i, true)}
          className={`city-label ${i === active ? 'is-active' : ''}`}
          style={{ ['--c' as string]: d.color, opacity: 0 }}
        >
          {d.name}
        </button>
      ))}
    </div>
  );
}
