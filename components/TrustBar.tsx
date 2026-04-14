'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, GraduationCap, Clock, Star } from 'lucide-react'
import { viewportOptions, staggerContainer, fadeUp, noMotion } from '@/lib/animations'

const TRUST_ITEMS = [
  { icon: CheckCircle2, text: '15+ Years of Clinical Excellence' },
  { icon: GraduationCap, text: 'London-Trained Lead Physician' },
  { icon: Clock, text: 'Open 7 Days, 8AM–9:30PM' },
  { icon: Star, text: '4.9★ on Google · 61 Reviews' },
]

export default function TrustBar() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#F5F3EF] border-y border-[#E8E4DC] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : staggerContainer}
        >
          {TRUST_ITEMS.map((item) => (
            <motion.div
              key={item.text}
              variants={reduce ? noMotion : fadeUp}
              className="flex items-center gap-3"
            >
              <item.icon
                size={18}
                className="text-[#B8965A] flex-shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-[13px] text-[#5C5C5C] font-medium leading-tight">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
