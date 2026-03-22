import '../styles/globals.scss'

import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next/types'
import { twMerge } from 'tailwind-merge'
import {
  PolarNuqsProvider,
  PolarPostHogProvider,
  PolarQueryClientProvider,
  PolarToploaderProvider,
} from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s | Polar',
    default: 'Polar',
  },
  description: 'The best monetization platform for developers',
  openGraph: {
    images: 'https://polar.sh/assets/brand/polar_og.jpg',
    type: 'website',
    siteName: 'Polar',
  },
  twitter: {
    images: 'https://polar.sh/assets/brand/polar_og.jpg',
    card: 'summary_large_image',
  },
  metadataBase: new URL('https://polar.sh/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={''}
        />
        <link
          href="/favicon.png"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        ></link>
        <link
          href="/favicon-dark.png"
          rel="icon"
          media="(prefers-color-scheme: light)"
        ></link>
      </head>
      <body
        className={twMerge(
          `antialiased [font-feature-settings:'ss03','zero']`,
          GeistSans.className,
        )}
      >
        <PolarPostHogProvider>
          <PolarToploaderProvider>
            <PolarQueryClientProvider>
              <PolarNuqsProvider>
                {children}
              </PolarNuqsProvider>
            </PolarQueryClientProvider>
          </PolarToploaderProvider>
        </PolarPostHogProvider>
      </body>
    </html>
  )
}
