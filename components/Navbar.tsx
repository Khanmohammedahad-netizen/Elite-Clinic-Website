'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{
          borderBottom: `1px solid rgba(232, 228, 220, ${borderOpacity.get()})`,
        }}
      >
        <motion.div
          style={{ borderBottomColor: `rgba(232,228,220,${borderOpacity})` }}
          className="border-b border-transparent"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex flex-col leading-none">
              <span
                className="heading-font text-[22px] font-semibold text-[#1A1A1A] leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Elite Plus
              </span>
              <span
                className="text-[11px] tracking-[0.12em] uppercase text-[#5C5C5C] leading-none mt-0.5 group-hover:text-[#B8965A] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Medical Centre
              </span>
              <span className="block h-[2px] w-0 bg-[#B8965A] group-hover:w-full transition-all duration-300 mt-1 rounded-full" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-text text-[#5C5C5C] hover:text-[#B8965A] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B8965A] text-white text-[13px] font-medium tracking-wide px-5 py-2.5 rounded-[2px] hover:bg-[#A07848] transition-colors duration-200"
              >
                Book Appointment →
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#B8965A] transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile full-screen menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8E4DC]">
            <Link href="/" className="flex flex-col leading-none" onClick={() => setIsOpen(false)}>
              <span className="heading-font text-[22px] font-semibold text-[#1A1A1A] leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                Elite Plus
              </span>
              <span className="text-[11px] tracking-[0.12em] uppercase text-[#5C5C5C] leading-none mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                Medical Centre
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#1A1A1A] hover:text-[#B8965A] transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col justify-center flex-1 px-6 gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-[28px] font-light text-[#1A1A1A] hover:text-[#B8965A] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-4 bg-[#B8965A] text-white text-center py-4 rounded-[2px] text-[15px] font-medium tracking-wide"
            >
              Book Appointment →
            </motion.a>
          </nav>
          <div className="px-6 pb-8 text-[#9A9A9A] text-[12px]">
            Mon – Sun: 8:00 AM – 9:30 PM · +91 91004 04352
          </div>
        </motion.div>
      )}
    </>
  )
}
