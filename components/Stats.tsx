'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { fadeUp, noMotion, viewportOptions } from '@/lib/animations'

// TODO: confirm with client if "10,000+ patients" and "15+ years experience" are accurate before adding them back.
const STATS = [
  { end: 4.9, suffix: '★', label: 'Google Rating', isFloat: true },
  { end: 61, suffix: '+', label: 'Patient Reviews' },
  { end: 2, suffix: '', label: 'Departments' },
  { end: 6, suffix: ' Days', label: 'Mon – Sat Schedule' },
]

function CountUp({ end, suffix, isFloat = false }: { end: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView || reduce) {
      setCount(end)
      return
    }
    const duration = 1800
    const steps = 60
    const inc = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += inc
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, end, isFloat, reduce])

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : count}
      {suffix}
    </span>
  )
}

const staggerStats: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Stats() {
  const reduce = useReducedMotion()

  return (
    <section className="relative bg-[#1C1C1C] py-24">
      {/* Red rule above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#6E1423]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : staggerStats}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={reduce ? noMotion : fadeUp}
              className="text-center"
            >
              <div
                className="heading-font text-[#6E1423] mb-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                <CountUp end={stat.end} suffix={stat.suffix} isFloat={stat.isFloat} />
              </div>
              <p className="text-[#9A9A9A] text-[13px] uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
