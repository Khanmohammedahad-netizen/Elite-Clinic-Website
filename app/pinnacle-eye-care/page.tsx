'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, noMotion } from '@/lib/animations'
import { DOCTORS } from '@/lib/data'
import DoctorProfileCard from '@/components/DoctorProfileCard'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export default function PinnacleEyeCarePage() {
  const reduce = useReducedMotion()
  const maimoona = DOCTORS.find(d => d.id === 'maimoona')!

  const services = [
    { title: 'LASIK Surgery', desc: 'Laser vision correction for myopia, hyperopia, and astigmatism.', image: '/images/clinic/lasik-procedure.jpg' },
    { title: 'Cataract Surgery', desc: 'Surgical removal and lens replacement to restore clear vision.', image: '/images/clinic/cataract-surgery.jpg' },
    { title: 'Cornea Care', desc: 'Management of corneal conditions including infections and keratoconus.', image: '/images/clinic/yag-laser.jpg' },
    { title: 'Comprehensive Eye Examinations', desc: 'Complete eye health evaluations, prescription assessments, and vision screening.', image: '/images/clinic/eye-exam.jpg' },
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
            <span className="label-text">Pinnacle Eye Care</span>
            <p className="text-[14px] font-bold text-[#6E1423] uppercase tracking-[0.1em] mt-2 mb-4">
              A unit of Elite Plus Medical Centre
            </p>
            <h1
              className="heading-font mt-4 mb-8 text-[#1A1A1A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
              }}
            >
              Expert Eye Care in Banjara Hills
            </h1>
            <p className="text-[#6B7280] text-[18px] leading-relaxed">
              Pinnacle Eye Care is the dedicated ophthalmology practice within Pinnacle Healthcare and Eye Clinic, a unit of Elite Plus Medical Centre, led by Dr. Maimoona Fareed. From routine eye examinations to advanced surgical procedures, we provide comprehensive care for your vision.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reduce ? noMotion : fadeUp}
            className="grid grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {['/images/clinic/cataract-surgery.jpg', '/images/clinic/lasik-procedure.jpg', '/images/clinic/yag-laser.jpg'].map((src) => (
              <div key={src} className="relative aspect-square rounded-[8px] overflow-hidden shadow-card">
                <Image src={src} alt="Eye care procedure at Pinnacle Eye Care" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Doctor Card */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <DoctorProfileCard doctor={maimoona} accentColor="#6E1423" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-[32px] text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Eye Care Services
            </h2>
            <p className="mt-4 text-[#6B7280]">Advanced ophthalmology and vision correction</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-[4px] bg-[#F5F5F5] border border-transparent hover:border-[#6E1423] transition-all overflow-hidden">
                <div className="relative w-16 h-16 rounded-[4px] overflow-hidden flex-shrink-0">
                  <Image src={service.image} alt={service.title} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-[#6E1423] flex-shrink-0" size={16} />
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] text-[14px] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#6E1423]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="heading-font text-[32px] text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Book an eye consultation with Dr. Maimoona Fareed
          </h2>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#6E1423] font-bold px-10 py-5 rounded-[4px] text-[16px] hover:bg-[#F5F5F5] transition-all duration-200 shadow-xl"
          >
            Book on WhatsApp →
          </a>
        </div>
      </section>
    </div>
  )
}
