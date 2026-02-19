import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer' // Import your existing Footer
import Navbar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TAIO Hub',
  description: 'Your Next Cab Dispatch Is With Us',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        {/* Navbar sits fixed at the top */}
        <Navbar />
        
        {/* Main Content (Home, Blog, News, etc.) */}
        <main className="min-h-screen pt-20"> 
          {children}
        </main>

        {/* Footer sits at the bottom of every page */}
        <Footer />
      </body>
    </html>
  )
}