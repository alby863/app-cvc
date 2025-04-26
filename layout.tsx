import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'APP CVC 2025 - Gestione Cateteri Venosi Centrali',
  description: 'Applicazione per la gestione dei Cateteri Venosi Centrali in oncoematologia pediatrica',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-2xl font-bold text-green-600">
                    APP CVC 2025
                  </Link>
                </div>
                <nav className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-green-500">
                    Home
                  </Link>
                  <Link href="/informazioni" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-green-500 hover:text-gray-700">
                    Informazioni
                  </Link>
                  <Link href="/demo/scan-qr" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-green-500 hover:text-gray-700">
                    Demo
                  </Link>
                  <Link href="/video-educativi" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-green-500 hover:text-gray-700">
                    Video
                  </Link>
                  <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-green-500 hover:text-gray-700">
                    About
                  </Link>
                </nav>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center">
                <Link href="/demo/scan-qr" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Prova Demo
                </Link>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" aria-expanded="false">
                  <span className="sr-only">Apri menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">APP CVC 2025</h3>
                <p className="text-gray-300">
                  Applicazione per la gestione dei Cateteri Venosi Centrali in oncoematologia pediatrica.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Collegamenti Rapidi</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/informazioni" className="text-gray-300 hover:text-white">Informazioni sui CVC</Link></li>
                  <li><Link href="/demo/scan-qr" className="text-gray-300 hover:text-white">Demo Interattiva</Link></li>
                  <li><Link href="/video-educativi" className="text-gray-300 hover:text-white">Video Educativi</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Riferimenti</h3>
                <p className="text-gray-300">
                  Progetto basato sulla ricerca: "Possibilities, Problems, and Perspectives of Data Collection by Mobile Apps in Longitudinal Epidemiological Studies: Scoping Review" di Florian Fischer & Sina Kleen.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} APP CVC 2025. Tutti i diritti riservati.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
