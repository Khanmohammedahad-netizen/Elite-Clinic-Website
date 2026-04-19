'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, fadeUp, noMotion, viewportOptions } from '@/lib/animations'

import { DOCTORS } from '@/lib/data'

export default function Doctors() {
  const reduce = useReducedMotion()

  return (
    <section id="doctors" className="section-padding bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : fadeUp}
        >
          <span className="label-text">Meet Our Team</span>
          <h2
            className="heading-font mt-4 text-[#1A1A1A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              lineHeight: '1.15',
              letterSpacing: '-0.01em',
            }}
          >
            Specialists Who Put Patients First
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : staggerContainer}
        >
          {DOCTORS.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={reduce ? noMotion : fadeUp}
              whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
              className={`bg-white border rounded-[8px] p-8 transition-all duration-300 hover:shadow-card-hover hover:border-[#D40000] ${
                doctor.isPlaceholder ? 'border-dashed border-[#E8E4DC]' : 'border-[#E8E4DC]'
              }`}
            >
              <div className="flex items-center gap-5 mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-[18px] font-semibold ${
                  doctor.isPlaceholder ? 'bg-[#9A9A9A]' : 'bg-[#D40000]'
                }`} style={{ fontFamily: 'var(--font-heading)' }}>
                  {doctor.initials}
                </div>
                <div>
                  <h3
                    className={`heading-font text-[22px] font-semibold leading-tight ${
                      doctor.isPlaceholder ? 'text-[#5C5C5C]' : 'text-[#1A1A1A]'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {doctor.name}
                  </h3>
                  <p className="text-[13px] text-[#5C5C5C] mt-1 line-clamp-1">{doctor.title}</p>
                  <p className="text-[12px] text-[#008B8B] font-medium mt-0.5">{doctor.credentials}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {doctor.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="text-[11px] uppercase tracking-wide px-3 py-1 bg-white border border-[#008B8B] rounded-full text-[#008B8B] font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p className={`text-[14px] leading-relaxed ${
                doctor.isPlaceholder ? 'text-[#9A9A9A] italic' : 'text-[#5C5C5C]'
              }`}>
                {doctor.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
