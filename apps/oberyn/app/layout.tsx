import '@/styles/globals.css'
import { Link } from '@nextui-org/link'
import { Metadata } from 'next'
import { Viewport } from 'next'

import { Navbar } from '@/components/navbar'

import clsx from 'clsx'

import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'

import { Providers } from './providers'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
              {children}
            </main>
            <footer className="flex items-center justify-center w-full py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.nextime.com.br/"
                title="Hygraph homepage"
              >
                <span className="text-default-600">Desenvolvido por</span>
                <p className="text-primary">NeXTIME</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
