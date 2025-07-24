import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL('https://them3.co'),
  title: {
    default: 'The M3 - A Network of Professionals Shaping Africa\'s Payment Ecosystem',
    template: '%s | The M3 Community'
  },
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon.ico',
  //   apple: '/favicon.ico'
  // },
  description: 'The M3 Community is a pan-African network of payment technologists, fintech founders, investors, and infrastructure professionals working to build Africa\'s next-generation payment systems.',
  keywords: ['fintech', 'payments', 'africa', 'technology', 'blockchain', 'digital payments'],
  authors: [{ name: 'The M3 Community' }],
  creator: 'The M3 Community',
  publisher: 'The M3 Community',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://them3.co',
    siteName: 'The M3 Community',
    title: 'The M3 - A Network of Professionals Shaping Africa\'s Payment Ecosystem',
    description: 'Join Africa\'s leading community of payment technologists, fintech founders, and infrastructure professionals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The M3 - A Network of Professionals Shaping Africa\'s Payment Ecosystem',
    description: 'Join Africa\'s leading community of payment technologists, fintech founders, and infrastructure professionals.',
    // images: ['favicon.ico'],
    site: '@TheM3_HQ',
    creator: '@TheM3_HQ',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
