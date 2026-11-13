import type { Metadata } from 'next';
import Link from 'next/link';
import Process from '../components/Process';

export const metadata: Metadata = {
  title: 'About | TAIO Hub',
  description: 'TAIO Hub is one team for websites and digital marketing.',
};

const values = [
  { title: 'One connected system', desc: 'Your website, search, ads, social and brand are planned together, so each one makes the others work harder.' },
  { title: 'Built to be measured', desc: 'Tracking goes in from the start. You can see where visitors come from and what turns them into customers.' },
  { title: 'Plain, quick communication', desc: 'You talk to the people doing the work. We reply fast and report in language you do not need a glossary for.' },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-7xl px-6">
        <p className="mono-label mb-4">About TAIO Hub</p>
        <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          We build the place your customers land, then bring them to it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
          TAIO Hub is a digital marketing and website development team. Most businesses end up with one
          company for the website, another for ads and a third for social, and nobody responsible for
          how they fit together. We do all of it as a single setup.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <dl className="divide-y divide-line border-y border-line">
          {values.map((v) => (
            <div key={v.title} className="grid gap-2 py-8 sm:grid-cols-[280px_1fr] sm:gap-10">
              <dt className="font-display text-xl font-semibold text-ink">{v.title}</dt>
              <dd className="max-w-2xl leading-relaxed text-soft">{v.desc}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Process />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Tell us what you are trying to grow.
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">Start a project</Link>
          <Link href="/services" className="btn-ghost">See what we do</Link>
        </div>
      </section>
    </div>
  );
}
