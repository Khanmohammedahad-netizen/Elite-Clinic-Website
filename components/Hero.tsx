'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Stethoscope, Eye, Activity, Star } from 'lucide-react'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'

const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '4.9★', label: 'Patient Rating' },
  { value: '10K+', label: 'Patients Treated' },
  { value: '6', label: 'Specialties' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const noMotion: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const container = reduce ? noMotion : containerVariants
  const item = reduce ? noMotion : itemVariants

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white hero-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left: 60% */}
          <motion.div
            className="lg:col-span-3 flex flex-col"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.span
              variants={item}
              className="label-text mb-6"
            >
              Banjara Hills, Hyderabad
            </motion.span>

            <motion.h1
              variants={item}
              className="heading-font text-[#1A1A1A] mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(52px, 6vw, 80px)',
                lineHeight: '1.08',
                letterSpacing: '-0.02em',
                fontStyle: 'italic',
              }}
            >
              Elite Care,{' '}
              <br />
              Elevated{' '}
              <span className="gold-underline">Trust.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-[#5C5C5C] text-[17px] leading-relaxed mb-8 max-w-xl"
            >
              Hyderabad&apos;s highest-rated multi-specialty clinic. General medicine,
              diabetes care, and advanced eye treatments — all under one roof,
              by doctors who truly listen.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#B8965A] text-white font-medium px-7 py-3.5 rounded-[2px] text-[15px] hover:bg-[#A07848] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                Book on WhatsApp →
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-[#B8965A] text-[#B8965A] font-medium px-7 py-3.5 rounded-[2px] text-[15px] hover:bg-[#B8965A] hover:text-white transition-all duration-200"
              >
                View Services
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-2 text-[#9A9A9A] text-[13px]"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#B8965A" color="#B8965A" />
                ))}
              </div>
              <span>4.9 &middot; 61 Reviews &middot; Google Verified</span>
            </motion.div>
          </motion.div>

          {/* Right: 40% — stat card */}
          <motion.div
            className="lg:col-span-2"
            initial={reduce ? undefined : { opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative bg-[#FAF9F7] rounded-2xl p-8 shadow-doctor border border-[#E8E4DC] overflow-hidden">
              {/* Background icon collage */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
                <div className="grid grid-cols-2 gap-12">
                  <Stethoscope size={96} color="#B8965A" />
                  <Eye size={96} color="#B8965A" />
                  <Activity size={96} color="#B8965A" />
                  <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Clinic Name */}
              <div className="relative mb-8 text-center">
                <p className="label-text mb-2">Elite Plus Medical Centre</p>
                <p className="text-[#5C5C5C] text-[13px] leading-relaxed">
                  Where Expertise Meets Compassion
                </p>
                <p className="text-[#9A9A9A] text-[11px] mt-1">
                  Banjara Hills&apos; Most Trusted Multi-Specialty Clinic
                </p>
              </div>

              {/* Stats grid */}
              <div className="relative grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.value}
                    className="bg-white border border-[#E8E4DC] rounded-[8px] p-4 text-center"
                  >
                    <p
                      className="heading-font text-[28px] font-semibold text-[#B8965A] leading-none mb-1"
                      style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-[#9A9A9A] leading-tight uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Open badge */}
              <div className="relative mt-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#2D6A4F] rounded-full animate-pulse" />
                <span className="text-[12px] text-[#2D6A4F] font-medium">
                  Open Today · 8:00 AM – 9:30 PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F3EF] to-transparent pointer-events-none" />
    </section>
  )
}
