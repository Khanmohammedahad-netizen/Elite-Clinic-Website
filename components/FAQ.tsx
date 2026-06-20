'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeUp, noMotion, viewportOptions, staggerContainer } from '@/lib/animations'

const FAQS = [
  {
    question: 'Do I need an appointment or can I walk in?',
    answer: 'Both are welcome. Walk-ins are accepted during clinic hours. However, booking an appointment via WhatsApp ensures minimal wait time.',
  },
  {
    question: 'What does a LASIK consultation involve?',
    answer: 'A comprehensive eye exam including corneal mapping, refraction testing, and pupil dilation is conducted to assess your suitability for LASIK. The consultation takes approximately 45–60 minutes.',
  },
  {
    question: 'Do you offer diabetes management as an ongoing program?',
    answer: 'Yes. Dr. Adnan Aziz provides structured diabetes management including quarterly check-ups, HbA1c monitoring, medication review, and dietary guidance.',
  },
  {
    question: 'What are the clinic timings?',
    answer: 'We are open Monday through Saturday in two shifts: 10 AM – 3 PM and 7 PM – 10 PM. The clinic is closed on Sundays.',
  },
  {
    question: 'Is cataract surgery performed at the clinic?',
    answer: 'Cataract evaluation and pre/post-operative care are handled at the clinic. Surgical procedures are performed at a partner surgical facility nearby.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'Click the "Book on WhatsApp" button on this website, or call us directly at +91 91004 04352. We respond within minutes during clinic hours.',
  },
]

export default function FAQ() {
  const reduce = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : fadeUp}
        >
          <span className="label-text">Frequently Asked Questions</span>
          <h2
            className="heading-font mt-4 text-[#1A1A1A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              lineHeight: '1.15',
              letterSpacing: '-0.01em',
            }}
          >
            Everything You Need to Know
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : staggerContainer}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                variants={reduce ? noMotion : fadeUp}
                className={`border rounded-[8px] overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-[#F5F5F5] border-[#1E3D23]' : 'bg-white border-[#E8E4DC] hover:border-[#1E3D23]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-medium text-[15px] text-[#1A1A1A] pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 text-[#6E1423]"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-[#5C5C5C] text-[14px] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
