'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'
import { fadeUp, noMotion, viewportOptions } from '@/lib/animations'

const REVIEWS = [
  {
    id: 1,
    quote: "I really appreciate how patient and thorough Dr. Adnan Aziz is. I always leave feeling informed and confident in my care. I trust him completely.",
    author: "Verified Google Review",
  },
  {
    id: 2,
    quote: "Excellent doctors and facilities. Dr. Adnan Aziz listens and handles patients with empathy. Only necessary tests and treatments are prescribed!",
    author: "Verified Google Review",
  },
  {
    id: 3,
    quote: "Best Doctor ever in today's time. Dedicated, thoughtful and compassionate. Provides the best course of action. Grateful to know him.",
    author: "Verified Google Review",
  },
]

export default function Testimonials() {
  const reduce = useReducedMotion()
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <section id="testimonials" className="pt-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : fadeUp}
        >
          <span className="label-text">Patient Stories</span>
          <h2
            className="heading-font mt-4 text-[#1A1A1A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              lineHeight: '1.15',
              letterSpacing: '-0.01em',
            }}
          >
            Trusted by Thousands in Hyderabad
          </h2>
        </motion.div>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative mb-24">
        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F5F5F5] border-l-4 border-l-[#6E1423] rounded-r-lg p-8 h-full"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F5A623" color="#F5A623" />
                ))}
              </div>
              <p
                className="heading-font text-[17px] text-[#1A1A1A] leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
              >
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-[13px] text-[#9A9A9A] font-medium">{review.author} ★★★★★</p>
            </div>
          ))}
        </div>

        {/* Mobile View with Framer Motion Drag */}
        <div className="lg:hidden cursor-grab active:cursor-grabbing">
          <motion.div ref={carousel} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-4 w-max"
            >
              {REVIEWS.map((review) => (
                <motion.div
                  key={review.id}
                  className="bg-[#F5F5F5] border-l-4 border-l-[#6E1423] rounded-r-[8px] p-8 w-[85vw] max-w-[320px] flex-shrink-0"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F5A623" color="#F5A623" />
                    ))}
                  </div>
                  <p
                    className="heading-font text-[17px] text-[#1A1A1A] leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="text-[13px] text-[#9A9A9A] font-medium">{review.author} ★★★★★</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#F5F5F5] border-y border-[#E8E4DC] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={reduce ? noMotion : fadeUp}
          >
            <h3
              className="heading-font text-[28px] lg:text-[36px] text-[#1A1A1A] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Join 10,000+ patients who trust Pinnacle Healthcare and Eye Clinic
            </h3>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6E1423] text-white font-medium px-8 py-4 rounded-[2px] text-[15px] hover:bg-[#591019] transition-all duration-200"
            >
              Book Your Appointment →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
