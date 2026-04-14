import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elite Plus Medical Centre | Best Clinic in Banjara Hills, Hyderabad',
  description: "Hyderabad's highest-rated multi-specialty clinic with 4.9★ on Google. General medicine, diabetes care, LASIK, cataract surgery & ophthalmology. Open every day 8AM–9:30PM in Banjara Hills.",
  keywords: 'LASIK Hyderabad, diabetes specialist Banjara Hills, eye doctor Hyderabad, best clinic Banjara Hills, ophthalmologist Hyderabad, cataract surgery cost Hyderabad',
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
      <body className={`${cormorantGaramond.variable} ${dmSans.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
