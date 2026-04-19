'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, noMotion } from '@/lib/animations'
import Appointment from '@/components/Appointment'
import FAQ from '@/components/FAQ'

export default function ContactPage() {
  const reduce = useReducedMotion()

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reduce ? noMotion : fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="label-text">Contact Us</span>
            <h1
              className="heading-font mt-4 mb-8 text-[#1A1A1A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
              }}
            >
              We’re Here to Help You Heal
            </h1>
            <p className="text-[#6B7280] text-[18px] leading-relaxed">
              Have a question or want to book an appointment? Reach out to us via the form below, or message us directly on WhatsApp for a faster response.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <Appointment />

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-font text-[32px] text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
              Find Us in Banjara Hills
            </h2>
            <p className="mt-4 text-[#6B7280]">Zahara Nagar, Rd No. 10, Hyderabad</p>
          </div>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=17.417278,78.438667"
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative rounded-[8px] overflow-hidden shadow-lg border border-[#E8E4DC] hover:border-[#D40000] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center">
              <span className="bg-white px-6 py-3 rounded-full text-[#1A1A1A] text-[14px] font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                Click for Directions →
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8272200216654!2d78.43128917604505!3d17.420077301859664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d6350731bd%3A0xe549557a2bd62058!2sElite%20Plus%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none"
            ></iframe>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </div>
  )
}
