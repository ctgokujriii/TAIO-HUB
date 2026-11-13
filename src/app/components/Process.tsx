const steps = [
  { name: 'Discover', desc: 'We learn your business, your customers and what is and is not working today.' },
  { name: 'Design', desc: 'You see the look, the pages and the plan before anything is built.' },
  { name: 'Build', desc: 'We develop the site and set up tracking, search basics and your channels.' },
  { name: 'Launch', desc: 'We go live together, check everything and hand you the keys.' },
  { name: 'Grow', desc: 'Campaigns, content and regular updates, steered by what the numbers say.' },
];

export default function Process() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mono-label mb-4">How it works</p>
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          From first call to steady growth.
        </h2>
        <ol className="process mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.name} className="relative">
              <span className="process-node" aria-hidden="true" />
              <p className="mono-label mt-5">Step {String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
