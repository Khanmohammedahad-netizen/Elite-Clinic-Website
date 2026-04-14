'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Stethoscope, Eye, Shield, Glasses, BarChart2,
} from 'lucide-react'
import { staggerContainer, fadeUp, noMotion, viewportOptions } from '@/lib/animations'

const SERVICES = [
  {
    icon: Stethoscope,
    name: 'General Medicine',
    description:
      'Comprehensive diagnosis and treatment of acute and chronic conditions. Fever, infections, lifestyle diseases — managed with precision and care.',
    badge: null,
  },
  {
    icon: BarChart2,
    name: 'Diabetes Management',
    description:
      'Personalized diabetes care plans covering blood sugar monitoring, medication management, diet counseling, and long-term complication prevention.',
    badge: null,
  },
  {
    icon: Eye,
    name: 'LASIK Eye Surgery',
    description:
      'Advanced laser vision correction for myopia, hyperopia, and astigmatism. Wake up to clear vision — no glasses, no contacts.',
    badge: '★ Popular',
  },
  {
    icon: Eye,
    name: 'Cataract Surgery',
    description:
      'State-of-the-art phacoemulsification cataract removal with premium intraocular lens options. Restore clarity and independence.',
    badge: null,
  },
  {
    icon: Shield,
    name: 'Cornea Treatments',
    description:
      'Expert management of corneal infections, keratoconus, and corneal transplantation. Protecting the window to your vision.',
    badge: null,
  },
  {
    icon: Glasses,
    name: 'General Ophthalmology',
    description:
      'Complete eye health evaluations, prescription glasses/contact lens consultations, and treatment of all common eye conditions.',
    badge: null,
  },
]

export default function Services() {
  const reduce = useReducedMotion()

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : fadeUp}
        >
          <span className="label-text">Our Specialties</span>
          <h2
            className="heading-font mt-4 text-[#1A1A1A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              lineHeight: '1.15',
              letterSpacing: '-0.01em',
            }}
          >
            Comprehensive Care, One Destination
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : staggerContainer}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.name}
              variants={reduce ? noMotion : fadeUp}
              whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white border border-[#E8E4DC] rounded-[8px] p-7 cursor-default
                         hover:border-[#B8965A] hover:shadow-card-hover transition-all duration-300"
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-[#B8965A] text-white px-2 py-0.5 rounded-[2px] font-medium">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="mb-5">
                <service.icon
                  size={28}
                  color="#B8965A"
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3
                className="heading-font text-[20px] font-semibold text-[#1A1A1A] mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#5C5C5C] leading-relaxed">
                {service.description}
              </p>

              {/* Gold bottom accent on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] rounded-b-[8px] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
