import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://the-m3-community.netlify.app'),
  title: {
    default: 'The M3 Community - Africa\'s Payment Technology Network',
    template: '%s | The M3 Community'
  },
  icons: {
    icon: '/svgs/appIcon.svg',
  },
  description: 'The M3 Community is a pan-African network of payment technologists, fintech founders, investors, and infrastructure professionals working to build Africa\'s next-generation payment systems.',
  keywords: ['fintech', 'payments', 'africa', 'technology', 'blockchain', 'digital payments'],
  authors: [{ name: 'The M3 Community' }],
  creator: 'The M3 Community',
  publisher: 'The M3 Community',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://the-m3-community.netlify.app',
    siteName: 'The M3 Community',
    title: 'The M3 Community - Africa\'s Payment Technology Network',
    description: 'Join Africa\'s leading community of payment technologists, fintech founders, and infrastructure professionals.',
    images: [
      {
        url: '/images/AppLogo.png',
        width: 1200,
        height: 630,
        alt: 'The M3 Community Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The M3 Community - Africa\'s Payment Technology Network',
    description: 'Join Africa\'s leading community of payment technologists, fintech founders, and infrastructure professionals.',
    images: ['/AppLogo.png'],
    site: '@TheM3',
    creator: '@TheM3',
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
