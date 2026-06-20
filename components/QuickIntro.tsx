'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Stethoscope, Eye } from 'lucide-react'
import Link from 'next/link'
import { fadeUp, noMotion, viewportOptions, staggerContainer } from '@/lib/animations'

export default function QuickIntro() {
  const reduce = useReducedMotion()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : fadeUp}
        >
          <span className="label-text">Two Departments, One Destination</span>
          <h2
            className="heading-font mt-4 text-[#1A1A1A] max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Dual-Specialty Care for Your Family
          </h2>
          <p className="mt-6 text-[#6B7280] max-w-2xl mx-auto text-[17px] leading-relaxed">
            Pinnacle Healthcare and Eye Clinic, a unit of Elite Plus Medical Centre, brings together expert general medicine and specialized eye care under one roof. Whether you need a consultation with a physician or advanced vision correction surgery, our doctors are here for you.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : staggerContainer}
        >
          {/* General Medicine Card */}
          <motion.div
            variants={reduce ? noMotion : fadeUp}
            className="group relative bg-[#F5F5F5] p-10 rounded-[4px] border border-transparent hover:border-[#1E3D23] transition-all duration-300"
          >
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Stethoscope className="text-[#1E3D23]" size={28} />
            </div>
            <h3 className="heading-font text-[24px] text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              General Medicine & Diabetes Care
            </h3>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              Comprehensive diagnosis, treatment, and ongoing management of general health conditions and diabetes.
            </p>
            <div className="mb-8">
              <p className="text-[14px] font-semibold text-[#1A1A1A]">Dr. Adnan Aziz</p>
              <p className="text-[13px] text-[#6B7280]">MBBS, DEM, FDM Royal College, U.K.</p>
            </div>
            <Link
              href="/general-medicine"
              className="inline-flex items-center text-[#1E3D23] font-medium hover:gap-2 transition-all duration-200"
            >
              Learn more <span className="ml-1">→</span>
            </Link>
          </motion.div>

          {/* Eye Care Card */}
          <motion.div
            variants={reduce ? noMotion : fadeUp}
            className="group relative bg-[#F5F5F5] p-10 rounded-[4px] border border-transparent hover:border-[#6E1423] transition-all duration-300"
          >
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Eye className="text-[#6E1423]" size={28} />
            </div>
            <h3 className="heading-font text-[24px] text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Pinnacle Eye Care
            </h3>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              Advanced ophthalmology services including LASIK, cataract surgery, and cornea treatments.
            </p>
            <div className="mb-8">
              <p className="text-[14px] font-semibold text-[#1A1A1A]">Dr. Maimoona Fareed</p>
              <p className="text-[13px] text-[#6B7280]">MBBS, DO, DNB</p>
            </div>
            <Link
              href="/pinnacle-eye-care"
              className="inline-flex items-center text-[#6E1423] font-medium hover:gap-2 transition-all duration-200"
            >
              Learn more <span className="ml-1">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
