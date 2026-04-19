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
  title: {
    default: 'Elite Plus Medical Centre | Clinic in Banjara Hills, Hyderabad',
    template: '%s | Elite Plus Medical Centre'
  },
  description: "A dual-specialty clinic in Banjara Hills, Hyderabad, offering expert general medicine, diabetes care, and advanced eye treatments at Pinnacle Eye Care. Open every day 8AM–9:30PM.",
  keywords: 'Physician Banjara Hills, diabetes treatment Hyderabad, eye clinic Banjara Hills, LASIK surgery Hyderabad, cataract surgeon Hyderabad, Pinnacle Eye Care',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Elite Plus Medical Centre',
  telephone: '+919100404352',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Banjara Hills Rd No. 10, Zahara Nagar',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500034',
    addressCountry: 'IN'
  },
  openingHours: 'Mo-Su 08:00-21:30',
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
