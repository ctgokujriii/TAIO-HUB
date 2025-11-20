// src/app/privacy/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - TaioHub',
  description: 'GDPR-compliant Privacy Policy for TaioHub',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-400 text-lg mb-16">
            Last updated: November 20, 2025
          </p>

          <div className="space-y-14 text-gray-300 leading-relaxed text-lg">
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">1. Introduction</h2>
              <p className="mb-4">
                TaioHub ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit <strong>taiohub.com</strong> (the "Site") and use our AI-powered services.
              </p>
              <p>We comply with the General Data Protection Regulation (GDPR) and all applicable data-protection laws.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">2. Data Controller</h2>
              <p>TAIO Hub<br />
                 Email: <a href="mailto:privacy@taiohub.com" className="text-blue-400 hover:underline">privacy@taiohub.com</a><br />
                 We are the data controller responsible for your personal data.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">3. Personal Data We Collect & Lawful Bases</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-700 rounded-lg">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Data Collected</th>
                      <th className="px-6 py-4">Lawful Basis (GDPR Art. 6)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-6 py-4">Contact & Quote Forms</td>
                      <td className="px-6 py-4">Name, email, company, phone, message</td>
                      <td className="px-6 py-4">Performance of a contract / Legitimate interests</td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="px-6 py-4">Analytics & Cookies</td>
                      <td className="px-6 py-4">IP address, browser, device, pages viewed</td>
                      <td className="px-6 py-4">Consent & Legitimate interests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">4. Your GDPR Rights</h2>
              <ul className="list-disc pl-8 space-y-3">
                <li>Access, rectify, or erase your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-6">Contact us at <a href="mailto:privacy@taiohub.com" className="text-blue-400 hover:underline">privacy@taiohub.com</a> — we respond within 30 days.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">5. Data Retention & Security</h2>
              <p>Contact inquiries: 2 years<br />Analytics data: 14 months<br />We use HTTPS and industry-standard security measures.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">6. International Transfers</h2>
              <p>Data may be processed outside the EEA (e.g., USA) under EU Standard Contractual Clauses and the EU-U.S. Data Privacy Framework.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">7. Contact</h2>
              <p>Email: <a href="mailto:privacy@taiohub.com" className="text-blue-400 hover:underline">privacy@taiohub.com</a></p>
            </section>
          </div>

          <div className="mt-20 text-center">
            <Link href="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
        © 2025 TaioHub. All rights reserved.
      </footer>
    </main>
  );
}