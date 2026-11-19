import type { Metadata } from 'next';
import Work from '../components/Work';

export const metadata: Metadata = {
  title: 'Our Work | TAIO Hub',
  description: 'Websites TAIO Hub has designed, built and launched for real businesses.',
};

export default function WorkPage() {
  return (
    <div className="pt-16">
      <Work />
    </div>
  );
}
