'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const CONTACT_EMAIL = 'soperfanta666@gmail.com';
export const CONTACT_PHONE_DISPLAY = '0315 4434344';
export const CONTACT_PHONE_LINK = '+923154434344';

const services = ['Website Design & Development', 'SEO', 'Paid Ads', 'Social Media', 'Brand & Content', 'Hosting & Care', 'Not sure yet'];
const empty = { name: '', email: '', phone: '', company: '', service: services[0], message: '' };

export default function Contact({ as: Heading = 'h2' }: { as?: 'h1' | 'h2' }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(empty);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    try {
      await emailjs.send(
        'service_z5fdow8',
        'template_4zwzfra',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service,
          message: formData.message,
          to_email: 'ali.aleem75@gmail.com',
        },
        'pQzQumk14f9kJ8B0i',
      );
      setStatus('success');
      formRef.current?.reset();
      setFormData(empty);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mono-label mb-4">Contact</p>
          <Heading className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Tell us what you are building.
          </Heading>
          <p className="mt-5 max-w-md text-lg text-soft">
            Send a few lines about your business and what you need. We reply with a plan and a price.
          </p>

          <div className="mt-10 border-t border-line">
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-line group">
              <Mail className="h-5 w-5 text-[var(--brand)]" aria-hidden="true" />
              <span>
                <span className="mono-label block">Email</span>
                <span className="contact-value">{CONTACT_EMAIL}</span>
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-soft transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href={`tel:${CONTACT_PHONE_LINK}`} className="contact-line group">
              <Phone className="h-5 w-5 text-[var(--brand)]" aria-hidden="true" />
              <span>
                <span className="mono-label block">Call</span>
                <span className="contact-value">{CONTACT_PHONE_DISPLAY}</span>
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-soft transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">
              <span>Name</span>
              <input name="name" required autoComplete="name" value={formData.name} onChange={handleChange} />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} />
            </label>
            <label className="field">
              <span>Phone (optional)</span>
              <input type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} />
            </label>
            <label className="field">
              <span>Business (optional)</span>
              <input name="company" autoComplete="organization" value={formData.company} onChange={handleChange} />
            </label>
          </div>
          <label className="field mt-5">
            <span>What do you need?</span>
            <select name="service" value={formData.service} onChange={handleChange}>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="field mt-5">
            <span>Message</span>
            <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
              {isSubmitting ? 'Sending…' : 'Send message'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p role="status" className="text-sm text-soft">
              {status === 'success' && 'Thanks. Your message is with us and we will reply soon.'}
              {status === 'error' && (
                <>
                  That did not send. Please email <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> instead.
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
