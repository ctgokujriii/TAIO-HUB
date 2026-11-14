import type { Metadata } from 'next';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Contact | TAIO Hub',
  description: 'Tell TAIO Hub about your website or marketing project.',
};

export default function ContactPage() {
  return <Contact as="h1" />;
}
