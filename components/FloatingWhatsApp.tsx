'use client'

import { motion } from 'framer-motion'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#B8965A] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Book on WhatsApp"
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      >
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#B8965A] ping-gold pointer-events-none" />
        
        {/* Simple crisp whatsapp icon in white */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1C1C1C] text-white text-[12px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Book Appointment
        </span>
      </motion.a>
    </div>
  )
}
