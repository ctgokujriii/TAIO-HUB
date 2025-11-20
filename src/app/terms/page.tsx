// src/app/terms/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - TaioHub',
  description: 'Terms of Service and legal conditions for using TaioHub.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-center text-gray-400 text-lg mb-16">
            Last updated: November 20, 2025
          </p>

          <div className="space-y-14 text-gray-300 leading-relaxed text-lg">
            {/* === ALL YOUR GDPR-COMPLIANT TERMS CONTENT GOES HERE === */}
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">1. Acceptance of Terms</h2>
              <p>By accessing or using taiohub.com and its AI services, you agree to these Terms of Service and our <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">2. Changes to Terms</h2>
              <p>We may modify these Terms at any time. Continued use after changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">3. Permitted Use</h2>
              <p>You may use our AI tools for lawful personal and commercial purposes. You must not:</p>
              <ul className="list-disc pl-8 space-y-3">
                <li>Use the service for illegal or unauthorized purposes</li>
                <li>Attempt to reverse-engineer, overload, or harm the service</li>
                <li>Remove copyright or proprietary notices from outputs</li>
                <li>Generate harmful, discriminatory, or illegal content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">4. Intellectual Property</h2>
              <p>The Site, its design, and our AI models are owned by TAIO Hub and protected by copyright, trademark, and other laws.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">5. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, TAIO Hub shall not be liable for indirect, incidental, or consequential damages.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">6. Governing Law</h2>
              <p>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">7. Contact</h2>
              <p>Email: <a href="mailto:legal@taiohub.com" className="text-blue-400 hover:underline">legal@taiohub.com</a></p>
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