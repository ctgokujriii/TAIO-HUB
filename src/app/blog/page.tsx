import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | TAIO Hub',
  description: 'Notes on websites, search, ads and social from the TAIO Hub team.',
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-16">
      <p className="mono-label mb-4">Blog</p>
      <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
        New articles are on the way.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-soft">
        We are writing practical guides on websites, search, ads and social media. Until they land, the
        quickest way to get an answer is to ask us.
      </p>
      <Link href="/contact" className="btn-primary mt-8">
        Ask us a question
      </Link>
    </div>
  );
}
