'use client'

import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
import { fadeUp, noMotion, viewportOptions } from '@/lib/animations'

const footerStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Footer() {
  const reduce = useReducedMotion()

  return (
    <footer className="bg-[#1C1C1C] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : footerStagger}
        >
          {/* Brand */}
          <motion.div variants={reduce ? noMotion : fadeUp} className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-6 group">
              <span
                className="heading-font text-[24px] font-semibold text-white leading-none group-hover:text-[#B8965A] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Elite Plus
              </span>
              <span
                className="text-[11px] tracking-[0.12em] uppercase text-[#9A9A9A] leading-none mt-1 group-hover:text-white transition-colors"
              >
                Medical Centre
              </span>
            </Link>
            <p className="text-[#9A9A9A] text-[14px] leading-relaxed mb-6">
              Hyderabad&apos;s highest-rated multi-specialty clinic. General medicine, diabetes care, and advanced eye treatments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={reduce ? noMotion : fadeUp}>
            <h4 className="text-[14px] font-semibold tracking-wide uppercase mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Our Doctors', href: '#doctors' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] text-[#9A9A9A] hover:text-[#B8965A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Specialties */}
          <motion.div variants={reduce ? noMotion : fadeUp}>
            <h4 className="text-[14px] font-semibold tracking-wide uppercase mb-6 text-white">Specialties</h4>
            <ul className="space-y-4">
              {['General Medicine', 'Diabetes Management', 'LASIK Surgery', 'Cataract Surgery', 'Ophthalmology'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-[14px] text-[#9A9A9A] hover:text-[#B8965A] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={reduce ? noMotion : fadeUp}>
            <h4 className="text-[14px] font-semibold tracking-wide uppercase mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#B8965A] mt-1 shrink-0" size={16} />
                <span className="text-[14px] text-[#9A9A9A] leading-relaxed">
                  Banjara Hills Rd No. 10, Zahara Nagar, Hyderabad, 500034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#B8965A] shrink-0" size={16} />
                <span className="text-[14px] text-[#9A9A9A]">+91 91004 04352</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#B8965A] shrink-0" size={16} />
                <span className="text-[14px] text-[#9A9A9A]">Open Every Day: 8AM – 9:30PM</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[13px] text-[#7A7A7A]">
            &copy; {new Date().getFullYear()} Elite Plus Medical Centre. Banjara Hills, Hyderabad.
          </p>
          <p className="text-[11px] text-[#7A7A7A] uppercase tracking-wider">
            Developed by <a href="#" className="hover:text-[#B8965A] transition-colors">MAK Software Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
