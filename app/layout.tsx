import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  metadataBase: new URL('https://elite-clinic-website.vercel.app'),
  title: {
    default: 'Pinnacle Healthcare and Eye Clinic | Clinic in Banjara Hills, Hyderabad',
    template: '%s | Pinnacle Healthcare and Eye Clinic'
  },
  description: "A dual-specialty clinic in Banjara Hills, Hyderabad, offering expert general medicine, diabetes care, and advanced eye treatments at Pinnacle Eye Care. A unit of Elite Plus Medical Centre. Open Mon – Sat: 10 AM – 3 PM & 7 PM – 10 PM.",
  keywords: 'Physician Banjara Hills, diabetes treatment Hyderabad, eye clinic Banjara Hills, LASIK surgery Hyderabad, cataract surgeon Hyderabad, Pinnacle Eye Care',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Pinnacle Healthcare and Eye Clinic',
    description: 'Excellence In Health & Vision. Expert healthcare in Banjara Hills, Hyderabad. Specialists in General Medicine, Diabetes, and Advanced Eye Care (Pinnacle Eye Care). A unit of Elite Plus Medical Centre.',
    url: 'https://elite-plus.com',
    siteName: 'Pinnacle Healthcare and Eye Clinic',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pinnacle Healthcare and Eye Clinic',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnacle Healthcare and Eye Clinic',
    description: 'Excellence In Health & Vision. Expert healthcare in Banjara Hills, Hyderabad. Specialists in General Medicine, Diabetes, and Advanced Eye Care (Pinnacle Eye Care). A unit of Elite Plus Medical Centre.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Pinnacle Healthcare and Eye Clinic',
  telephone: '+919100404352',
  email: 'eliteplusclinic@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '# 8-2-602/21, Road No 10, Banjara Hills',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500034',
    addressCountry: 'IN'
  },
  openingHours: [
    'Mo-Sa 10:00-15:00',
    'Mo-Sa 19:00-22:00'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '61'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased bg-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
