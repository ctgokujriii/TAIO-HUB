import Link from 'next/link';
import { ArrowRight, Code2, Search, Megaphone, MessagesSquare, Palette, ServerCog } from 'lucide-react';
import { districts } from './cityData';

const icons = { web: Code2, seo: Search, ads: Megaphone, social: MessagesSquare, brand: Palette, care: ServerCog } as const;

export default function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {heading && (
          <div className="mb-14 max-w-2xl">
            <p className="mono-label mb-4">What we do</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Six services that work as one.
            </h2>
            <p className="mt-5 text-lg text-soft">
              Take one or take them all. Each is built to plug into the others, so your website, your
              traffic and your brand pull in the same direction.
            </p>
          </div>
        )}

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((d) => {
            const Icon = icons[d.id as keyof typeof icons];
            return (
              <div key={d.id} className="service-cell" style={{ ['--c' as string]: d.color }}>
                <Icon className="h-6 w-6 text-[var(--c)]" aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{d.name}</h3>
                <p className="mono-label mt-1">{d.tag}</p>
                <p className="mt-4 leading-relaxed text-soft">{d.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link href="/contact" className="btn-primary group">
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
