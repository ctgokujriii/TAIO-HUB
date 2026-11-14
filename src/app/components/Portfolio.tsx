import { ArrowUpRight } from 'lucide-react';

const work = [
  {
    name: 'ARISE Gaming Zone',
    kind: 'Gaming lounge · Lahore',
    desc: 'A booking-led site for a PS5 lounge, with game pages built to be found in search.',
    url: 'https://www.arisegaming.zone',
    img: '/portfolio/arise.jpg',
  },
  {
    name: 'SALjoyArcade',
    kind: 'Online store · Fight sticks',
    desc: 'A storefront for hand-built arcade sticks, with live prices, sorting and filters across the full range.',
    url: 'https://www.saljoyarcade.store',
    img: '/portfolio/saljoy.jpg',
  },
  {
    name: 'NBS Salon',
    kind: 'Salon · Lahore',
    desc: 'Prices, packages and WhatsApp booking up front for a neighbourhood men’s salon.',
    url: 'https://nbs-salon.vercel.app',
    img: '/portfolio/nbs.jpg',
  },
  {
    name: 'Zubair Plumbing Services',
    kind: 'Local service · Lahore',
    desc: 'A 24/7 plumber’s site built around one-tap calls and WhatsApp enquiries.',
    url: 'https://www.zplumbings.online',
    img: '/portfolio/zubair.jpg',
  },
  {
    name: 'ruhbyhs',
    kind: 'Brand site · Luxury perfume',
    desc: 'A quiet, editorial storefront with a cinematic intro for a perfume label.',
    url: 'https://www.ruhbyhs.com',
    img: '/portfolio/ruh.jpg',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mono-label mb-4">Our work</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Websites we have built.
          </h2>
          <p className="mt-5 text-lg text-soft">
            Every one of these is live. Open them, click around, and judge the work for yourself.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {work.map((w, i) => (
            <li key={w.name} className={i === 0 ? 'md:col-span-2' : ''}>
              <a href={w.url} target="_blank" rel="noopener noreferrer" className="work-card group">
                <div className={`overflow-hidden ${i === 0 ? 'aspect-[16/10] md:aspect-[21/9]' : 'aspect-[16/10]'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.img}
                    alt={`Homepage of ${w.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-6 p-6">
                  <div>
                    <p className="mono-label">{w.kind}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{w.name}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-soft">{w.desc}</p>
                  </div>
                  <span className="work-arrow" aria-hidden="true">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
