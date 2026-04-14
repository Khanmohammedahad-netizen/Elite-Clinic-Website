'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeLeft, fadeRight, noMotion, viewportOptions } from '@/lib/animations'

export default function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={reduce ? noMotion : fadeLeft}
          >
            <span className="label-text">About Us</span>
            <h2
              className="heading-font mt-4 mb-6 text-[#1A1A1A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 3.5vw, 44px)',
                lineHeight: '1.15',
                letterSpacing: '-0.01em',
              }}
            >
              Where Every Patient Leaves Informed and Confident
            </h2>
            <div className="gold-rule" />
            <p className="text-[#5C5C5C] leading-relaxed mb-5">
              At Elite Plus Medical Centre, we believe that great healthcare begins with great listening.
              Every consultation at our clinic is unhurried — we take the time to understand not just
              your symptoms, but your life, your concerns, and your goals. Our patients consistently
              describe leaving our clinic feeling genuinely heard and fully informed.
            </p>
            <p className="text-[#5C5C5C] leading-relaxed">
              We hold a firm commitment to evidence-based medicine: no unnecessary tests, no
              excessive prescriptions. Our physicians prescribe only what is clinically indicated,
              explained in plain language. This philosophy of radical transparency has earned us
              the trust of over 10,000 patients across Hyderabad — and a 4.9-star rating on Google.
            </p>
          </motion.div>

          {/* Right: Doctor card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={reduce ? noMotion : fadeRight}
          >
            <div className="bg-white border border-[#E8E4DC] rounded-[8px] shadow-doctor overflow-hidden border-l-4 border-l-[#B8965A]">
              <div className="p-8">
                {/* Avatar + name */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#B8965A] flex items-center justify-center text-white text-[18px] font-semibold"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    Dr. A
                  </div>
                  <div>
                    <h3
                      className="heading-font text-[22px] font-semibold text-[#1A1A1A] leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Dr. Adnan
                    </h3>
                    <p className="text-[13px] text-[#5C5C5C] mt-1 leading-snug">
                      MBBS, Diploma in Emergency Medicine
                    </p>
                    <p className="text-[12px] text-[#B8965A] font-medium mt-0.5">
                      Royal College of Physicians, London
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-[#5C5C5C] text-[14px] leading-relaxed mb-6">
                  Dr. Adnan brings over 15 years of clinical expertise across general medicine and
                  emergency care, with advanced training from the Royal College of Physicians, London.
                  Known for his empathetic patient-first approach, he ensures every consultation is
                  thorough, unhurried, and focused on clear communication. Patients consistently
                  describe him as dedicated, thoughtful, and completely trustworthy.
                </p>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-2">
                  {['MBBS', 'Dip. Emergency Medicine', 'Royal College of Physicians, London'].map((badge) => (
                    <span
                      key={badge}
                      className="text-[11px] uppercase tracking-wide px-3 py-1 bg-[#FAF9F7] border border-[#E8E4DC] rounded-[2px] text-[#5C5C5C] font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Experience */}
                <div className="mt-6 pt-6 border-t border-[#E8E4DC] flex items-center gap-3">
                  <div className="text-[28px] font-semibold text-[#B8965A] heading-font" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>15+</div>
                  <div className="text-[13px] text-[#5C5C5C]">Years of clinical practice<br />across general &amp; emergency medicine</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
