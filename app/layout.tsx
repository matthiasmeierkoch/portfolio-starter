import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

// load Google fonts with next/font and expose CSS variable names
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Matthias Koch – UX Designer',
    template: 'Matthias Koch – UX Designer',
  },
  description: 'Matthias Koch – UX design portfolio',
  openGraph: {
    title: 'Matthias Koch – UX Designer',
    description: 'Matthias Koch – UX design portfolio',
    url: baseUrl,
    siteName: 'Matthias Koch UX Design Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        // background / text mode
        'bg-white dark:bg-neutral-900',
        'text-neutral-800 dark:text-neutral-200',
        // Google font variables (DM Sans used as primary sans, Playfair for headings)
        dmSans.variable,
        playfair.variable,
        // optional Geist fonts if available
        GeistSans?.variable,
        GeistMono?.variable
      )}
    >
      <body className="antialiased max-w-2xl mx-auto px-4 lg:px-0 mt-8">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 flex flex-col md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
