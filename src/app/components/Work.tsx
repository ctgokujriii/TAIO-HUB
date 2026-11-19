import Image from 'next/image';
import Link from 'next/link';
import { projects } from './workData';

export default function Work({ limit, showAllLink = false }: { limit?: number; showAllLink?: boolean }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section id="work" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mono-label mb-4">Selected work</p>
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Websites we have built and launched.
        </h2>
        <p className="mt-4 max-w-xl text-soft">
          Real businesses, live today. Open any of them and judge the work yourself.
        </p>
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {list.map((p) => (
            <li key={p.slug}>
              <article className="group overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--night-2)] transition-colors hover:border-[rgba(150,140,255,0.5)]">
                <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`} className="relative block aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={`${p.name} website homepage`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                </a>
                <div className="p-6 sm:p-8">
                  <p className="mono-label">{p.kind}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-soft">{p.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.built.map((b) => (
                      <li key={b} className="mono-label rounded-full border border-[color:var(--line)] px-3 py-1">{b}</li>
                    ))}
                  </ul>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-[color:var(--brand)] hover:underline">
                    Visit live site →
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-4">
          {showAllLink && <Link href="/work" className="btn-ghost">See all work</Link>}
          <Link href="/contact" className="btn-primary">Start your project</Link>
        </div>
      </div>
    </section>
  );
}
