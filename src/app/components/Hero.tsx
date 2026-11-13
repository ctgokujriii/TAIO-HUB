'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { districts } from './cityData';

const CityScene = dynamic(() => import('./CityScene'), { ssr: false });

const STOPS = districts.length; // plus the overview at 0

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stop = useRef(0);
  const [active, setActive] = useState(-1);

  // Scrolling through this tall section moves the camera from the overview to each district.
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range));
      stop.current = p * STOPS;
      setActive(Math.round(stop.current) - 1);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((i + 1) / STOPS) * (el.offsetHeight - window.innerHeight), behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative -mt-20" style={{ height: `${(STOPS + 1) * 100}svh` }}>
      <div className="hero-city sticky top-0 h-[100svh] overflow-hidden">
        <CityScene stop={stop} active={active} onSelect={goTo} />
        <div className="hero-scrim pointer-events-none absolute inset-0" />

        <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl px-6">
          {/* Overview */}
          <div className={`stop-panel ${active < 0 ? 'is-on' : ''}`} aria-hidden={active >= 0}>
            <p className="mono-label mb-5">Digital marketing + web development</p>
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Websites and marketing, built as one system.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-soft sm:text-lg">
              TAIO Hub designs and builds your website, then brings people to it through search, ads and
              social. One team, with every part connected.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary group" tabIndex={active < 0 ? 0 : -1}>
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <button onClick={() => goTo(0)} className="btn-ghost gap-2" tabIndex={active < 0 ? 0 : -1}>
                Scroll to tour the city
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* One panel per district */}
          {districts.map((d, i) => (
            <article
              key={d.id}
              className={`stop-panel ${active === i ? 'is-on' : ''}`}
              style={{ ['--c' as string]: d.color }}
              aria-hidden={active !== i}
            >
              <p className="mono-label !text-[var(--c)]">
                {String(i + 1).padStart(2, '0')} / {String(STOPS).padStart(2, '0')} · {d.tag}
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{d.name}</h2>
              <p className="mono-label mt-6">Why it matters</p>
              <p className="mt-2 max-w-lg text-base leading-relaxed text-ink/90 sm:text-lg">{d.why}</p>
              <p className="mono-label mt-6">What you get</p>
              <ul className="mt-2 space-y-1.5 text-soft">
                {d.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c)]" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Rail: where you are in the tour */}
        <nav className="city-rail" aria-label="Services tour">
          {districts.map((d, i) => (
            <button
              key={d.id}
              onClick={() => goTo(i)}
              aria-label={d.name}
              aria-current={active === i}
              className="city-rail-dot"
              style={{ ['--c' as string]: d.color }}
            >
              <span>{d.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
