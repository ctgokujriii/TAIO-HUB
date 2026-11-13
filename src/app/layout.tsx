import type { Metadata } from 'next'
import { Sora, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/NavBar'

const display = Sora({ subsets: ['latin'], variable: '--font-display' })
const body = Manrope({ subsets: ['latin'], variable: '--font-body' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'TAIO Hub | Digital marketing and web development',
  description:
    'TAIO Hub designs and builds websites, then grows them with SEO, paid ads, social media and content. One team, one connected system.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
