import type { Metadata } from 'next';
import Services from '../components/ServicesHome';
import Process from '../components/Process';

export const metadata: Metadata = {
  title: 'Services | TAIO Hub',
  description: 'Websites, SEO, paid ads, social media, brand and content, and hosting and care from one team.',
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <header className="mx-auto max-w-7xl px-6">
        <p className="mono-label mb-4">Services</p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Everything your business needs online.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-soft">
          Digital marketing and website development from one team. Take a single service or the whole
          connected setup.
        </p>
      </header>
      <Services heading={false} />
      <Process />
    </div>
  );
}
