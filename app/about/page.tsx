'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, noMotion } from '@/lib/animations'
import Doctors from '@/components/Doctors'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function AboutPage() {
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
            <span className="label-text">About Us</span>
            <h1
              className="heading-font mt-4 mb-8 text-[#1A1A1A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
              }}
            >
              Where Every Patient Leaves Informed and Confident
            </h1>
            <p className="text-[#6B7280] text-[18px] leading-relaxed">
              At Elite Plus Medical Centre, we believe that great healthcare begins with great listening. Every consultation is unhurried — we take the time to understand not just your symptoms, but your life, your concerns, and your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-font text-[32px] text-[#1A1A1A] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Approach to Care
            </h2>
            <p className="text-[#6B7280] text-[17px] leading-relaxed mb-8">
              We hold a firm commitment to evidence-based medicine: no unnecessary tests, no excessive prescriptions. Our physicians prescribe only what is clinically indicated, explained in plain language.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <Doctors />

      {/* Clinic Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <div className="bg-[#F5F5F5] w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <MapPin className="text-[#008B8B]" size={24} />
              </div>
              <h3 className="font-semibold text-[#1A1A1A] mb-4">Clinic Address</h3>
              <p className="text-[#6B7280] text-[15px] leading-relaxed">
                Banjara Hills Rd No. 10, Zahara Nagar,<br />
                Hyderabad, Telangana 500034
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="bg-[#F5F5F5] w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Phone className="text-[#008B8B]" size={24} />
              </div>
              <h3 className="font-semibold text-[#1A1A1A] mb-4">Phone / WhatsApp</h3>
              <p className="text-[#6B7280] text-[15px] leading-relaxed">
                +91 91004 04352
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="bg-[#F5F5F5] w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Clock className="text-[#008B8B]" size={24} />
              </div>
              <h3 className="font-semibold text-[#1A1A1A] mb-4">Working Hours</h3>
              <div className="text-[#6B7280] text-[15px] leading-relaxed">
                Mon – Sat: 8:00 AM – 1:30 PM &amp; 6:00 PM – 9:30 PM <br />
                <span className="text-[#D40000] font-medium">Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
