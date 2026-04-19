'use client'

import { Doctor } from '@/lib/data'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, noMotion } from '@/lib/animations'

interface Props {
  doctor: Doctor;
  accentColor: string;
}

export default function DoctorProfileCard({ doctor, accentColor }: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={reduce ? noMotion : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`bg-white border border-[#E8E4DC] rounded-[8px] shadow-doctor overflow-hidden border-l-4`}
      style={{ borderLeftColor: accentColor }}
    >
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <div 
            className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center text-white text-[24px] font-semibold"
            style={{ backgroundColor: accentColor, fontFamily: 'var(--font-heading)' }}
          >
            {doctor.initials}
          </div>
          <div className="text-center md:text-left">
            <h2 
              className="heading-font text-[32px] font-bold text-[#1A1A1A] leading-tight mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {doctor.name}
            </h2>
            <p className="text-[16px] text-[#6B7280] font-medium mb-1">{doctor.title}</p>
            <p className="text-[14px] font-semibold" style={{ color: accentColor }}>{doctor.credentials}</p>
          </div>
        </div>

        <div className="max-w-2xl">
          <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">Professional Profile</h3>
          <p className="text-[#6B7280] text-[16px] leading-relaxed mb-8">
            {doctor.bio}
          </p>

          <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">Specialties & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {doctor.specialties.map((spec) => (
              <span
                key={spec}
                className="text-[12px] uppercase tracking-wide px-4 py-1.5 bg-[#F5F5F5] border border-[#E8E4DC] rounded-[2px] text-[#1A1A1A] font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
