'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { districts } from './cityData';

const CityScene = dynamic(() => import('./CityScene'), { ssr: false });

export default function Hero() {
  const [active, setActive] = useState(0);
  const touched = useRef(false);

  // Tour the districts until the visitor picks one themselves.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!touched.current) setActive((a) => (a + 1) % districts.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  const select = (i: number, fromUser: boolean) => {
    if (fromUser) touched.current = true;
    setActive(i);
  };

  const d = districts[active];

  return (
    <section className="hero-city relative -mt-20 flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <CityScene active={active} onSelect={select} />
      <div className="hero-scrim pointer-events-none absolute inset-0" />

      <div className="pointer-events-none relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-6 pb-10 pt-[50svh] lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:pb-16 lg:pt-40">
        <div className="hero-copy pointer-events-auto max-w-2xl">
          <p className="mono-label mb-5">Digital marketing + web development</p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Websites and marketing, built as one system.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            TAIO Hub designs and builds your website, then brings people to it through search, ads and
            social. One team, with every part connected.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary group">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn-ghost">
              See what we do
            </Link>
          </div>
        </div>

        {/* Readout for the selected district */}
        <aside className="hud pointer-events-auto" style={{ ['--c' as string]: d.color }} aria-live="polite">
          <div className="flex items-center justify-between">
            <span className="mono-label !text-[var(--c)]">{d.tag}</span>
            <span className="mono-label">
              {String(active + 1).padStart(2, '0')} / {String(districts.length).padStart(2, '0')}
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{d.name}</h2>
          <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-soft">{d.desc}</p>
          <div className="mt-4 flex gap-1.5" role="tablist" aria-label="Services">
            {districts.map((x, i) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={i === active}
                aria-label={x.name}
                onClick={() => select(i, true)}
                className="hud-tick"
                style={{ ['--c' as string]: x.color }}
              />
            ))}
          </div>
          <p className="mono-label mt-4 hidden lg:block">Drag to look around. Click a district.</p>
        </aside>
      </div>
    </section>
  );
}
