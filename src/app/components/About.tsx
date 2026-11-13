const reasons = [
  { title: 'One team for everything', desc: 'The people who build your website also run your marketing, so nothing gets lost between agencies.' },
  { title: 'Built to perform', desc: 'Fast pages, mobile first and ready for search from day one.' },
  { title: 'Straight communication', desc: 'Quick replies, clear reporting and no chasing. Ask the clients below.' },
];

export default function About() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mono-label mb-4">Why TAIO Hub</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            The whole setup, under one roof.
          </h2>
        </div>
        <dl className="divide-y divide-line border-y border-line">
          {reasons.map((r) => (
            <div key={r.title} className="grid gap-2 py-7 sm:grid-cols-[220px_1fr] sm:gap-8">
              <dt className="font-display text-lg font-semibold text-ink">{r.title}</dt>
              <dd className="leading-relaxed text-soft">{r.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
