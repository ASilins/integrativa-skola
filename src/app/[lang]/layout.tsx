import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Locale, i18n } from '@/i18n.config'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Integrativa Skola',
  description: '...',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Nav lang={params.lang}/>
        {children}
        <Footer lang={params.lang}/>
      </body>
    </html>
  )
}
