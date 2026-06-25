'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'

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
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E3D23]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="text-center lg:text-left"
          >
            {/* Location Label */}
            <motion.span
              variants={item}
              className="inline-block text-[12px] tracking-[0.2em] font-bold text-[#1E3D23] uppercase mb-6"
            >
              Banjara Hills, Hyderabad
            </motion.span>

            {/* Large Hero Title */}
            <motion.h1
              variants={item}
              className="heading-font text-[#1A1A1A] mb-6 font-black"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(40px, 6.5vw, 68px)',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
              }}
            >
              <span className="text-[#6E1423]">Pinnacle</span> Healthcare <br className="hidden md:block" />
              and Eye Clinic
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="heading-font text-[20px] lg:text-[26px] text-[#4B5563] mb-2 font-light italic"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Excellence In Health & Vision
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-[13px] tracking-[0.08em] uppercase text-[#9A9A9A] mb-8"
            >
              Unit of Elite Plus Medical Centre
            </motion.p>

            {/* Body text */}
            <motion.p
              variants={item}
              className="text-[#6B7280] text-[17px] lg:text-[19px] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Your trusted neighbourhood clinic for general medicine, diabetes care, and advanced eye treatments — all under one roof.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#6E1423] text-white px-10 py-5 rounded-[4px] text-[15px] font-semibold hover:bg-[#591019] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                Book on WhatsApp →
              </a>
              <Link
                href="/about"
                className="w-full sm:w-auto px-10 py-5 border-2 border-[#1E3D23] text-[#1E3D23] rounded-[4px] text-[15px] font-semibold hover:bg-[#1E3D23] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={item}
              className="flex items-center justify-center lg:justify-start gap-6 py-6 border-t border-[#E8E4DC] max-w-sm mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F5A623" color="#F5A623" />
                  ))}
                </div>
                <span className="text-[14px] text-[#1A1A1A] font-bold">4.9</span>
              </div>
              <div className="h-4 w-px bg-[#E8E4DC]" />
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[#1A1A1A] font-bold uppercase tracking-wider">61+ Reviews</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[8px] overflow-hidden shadow-doctor">
              <Image
                src="/images/clinic/ot-wide.jpg"
                alt="Dr. Maimoona Fareed performing eye surgery at Pinnacle Eye Care's operating theatre"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-44 aspect-square rounded-[8px] overflow-hidden shadow-doctor border-4 border-white">
              <Image
                src="/images/clinic/cataract-surgery.jpg"
                alt="Cataract surgery in progress at Pinnacle Healthcare and Eye Clinic"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-[8px] shadow-doctor px-5 py-4 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#F5A623" color="#F5A623" />
                ))}
              </div>
              <span className="text-[12px] text-[#1A1A1A] font-bold whitespace-nowrap">4.9 Rated Care</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
