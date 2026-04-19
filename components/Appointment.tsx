'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { WHATSAPP_BOOKING_URL } from '@/lib/whatsapp'
import { fadeUp, noMotion, viewportOptions } from '@/lib/animations'

export default function Appointment() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="section-padding bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={reduce ? noMotion : fadeUp}
          >
            <span className="label-text">Contact & Appointments</span>
            <h2
              className="heading-font mt-4 mb-6 text-[#1A1A1A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to Book Your Visit?
            </h2>
            <p className="text-[#6B7280] text-[17px] leading-relaxed mb-10">
              We offer unhurried consultations and expert medical care. Walk-ins are always welcome, but booking via WhatsApp ensures you&apos;re seen as quickly as possible.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E4DC] shrink-0">
                  <MapPin className="text-[#008B8B]" size={18} />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] mb-1">Clinic Address</p>
                  <p className="text-[#6B7280] text-[15px] leading-relaxed">
                    Banjara Hills Rd No. 10, Zahara Nagar, <br />
                    Hyderabad, Telangana 500034
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E4DC] shrink-0">
                  <Phone className="text-[#008B8B]" size={18} />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] mb-1">Call Us Directly</p>
                  <p className="text-[#6B7280] text-[15px]">+91 91004 04352</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E4DC] shrink-0">
                  <Clock className="text-[#008B8B]" size={18} />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] mb-1">Clinic Timings</p>
                  <p className="text-[#6B7280] text-[15px]">
                    Open Every Day: 8:00 AM – 9:30 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large WhatsApp CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={reduce ? noMotion : fadeUp}
          >
            <div className="bg-white p-10 lg:p-14 rounded-[4px] border border-[#E8E4DC] shadow-sm text-center">
              <div className="bg-[#25D366]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="text-[#25D366]" size={40} />
              </div>
              <h3 className="heading-font text-[28px] text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Book via WhatsApp
              </h3>
              <p className="text-[#6B7280] mb-10 text-[16px] leading-relaxed">
                Click the button below to message us directly. Our team responds instantly during working hours to confirm your slot.
              </p>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-10 py-5 rounded-[4px] text-[16px] hover:bg-[#20BE5A] transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                Message Dr. Adnan & Maimoona →
              </a>
              <p className="mt-6 text-[12px] text-[#9A9A9A] uppercase tracking-widest font-medium">
                No forms. No waiting. Direct care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
