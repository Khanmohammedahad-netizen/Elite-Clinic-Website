'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, noMotion } from '@/lib/animations'
import { DOCTORS } from '@/lib/data'
import DoctorProfileCard from '@/components/DoctorProfileCard'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'
import { CheckCircle2 } from 'lucide-react'

export default function GeneralMedicinePage() {
  const reduce = useReducedMotion()
  const adnan = DOCTORS.find(d => d.id === 'adnan')!

  const services = [
    { title: 'General Consultations', desc: 'Fever, infections, allergies, respiratory conditions, and general health assessments.' },
    { title: 'Diabetes Management', desc: 'Blood sugar monitoring, medication management, diet guidance, and long-term complication prevention.' },
    { title: 'Chronic Disease Management', desc: 'Hypertension, thyroid disorders, and other ongoing conditions.' },
    { title: 'Preventive Health', desc: 'Routine health check-ups and lifestyle counseling.' },
  ]

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
            <span className="label-text">General Medicine & Diabetes Care</span>
            <h1
              className="heading-font mt-4 mb-8 text-[#1A1A1A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
              }}
            >
              Comprehensive Care for Your Everyday Health
            </h1>
            <p className="text-[#6B7280] text-[18px] leading-relaxed">
              From routine check-ups to managing chronic conditions like diabetes and hypertension, Dr. Adnan provides thorough, evidence-based medical care with a focus on clear communication and patient understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Card */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <DoctorProfileCard doctor={adnan} accentColor="#008B8B" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-[32px] text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Treat
            </h2>
            <p className="mt-4 text-[#6B7280]">Expert management of general health conditions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-[4px] bg-[#F5F5F5] border border-transparent hover:border-[#008B8B] transition-all">
                <CheckCircle2 className="text-[#008B8B] flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2">{service.title}</h3>
                  <p className="text-[#6B7280] text-[14px] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#008B8B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="heading-font text-[32px] text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Book a consultation with Dr. Adnan
          </h2>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#008B8B] font-bold px-10 py-5 rounded-[4px] text-[16px] hover:bg-[#F5F5F5] transition-all duration-200 shadow-xl"
          >
            Book on WhatsApp →
          </a>
        </div>
      </section>
    </div>
  )
}
