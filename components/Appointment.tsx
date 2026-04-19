'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { openWhatsApp, type AppointmentFormData } from '@/lib/whatsapp'
import { fadeLeft, fadeRight, noMotion, viewportOptions } from '@/lib/animations'

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  specialty: z.string().min(1, 'Please select a specialty'),
  date: z.string().min(1, 'Date is required'),
  message: z.string().optional(),
})

export default function Appointment() {
  const reduce = useReducedMotion()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: AppointmentFormData) => {
    openWhatsApp(data)
  }

  return (
    <section id="contact" className="section-padding bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left Column: Info */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={reduce ? noMotion : fadeLeft}
          >
            <span className="label-text">Book An Appointment</span>
            <h2
              className="heading-font mt-4 mb-6 text-[#1A1A1A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 3.5vw, 44px)',
                lineHeight: '1.15',
                letterSpacing: '-0.01em',
              }}
            >
              Ready to See a Doctor?
            </h2>
            <div className="bg-[#008B8B] h-[2px] w-12 mb-8" />

            <p className="text-[#5C5C5C] leading-relaxed mb-10 text-[15px]">
              Walk-ins welcome. For shorter wait times, book your slot below. We&apos;ll confirm within minutes.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <MapPin className="text-[#008B8B] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1A1A1A] mb-1">Clinic Address</p>
                  <p className="text-[#5C5C5C] text-[14px] leading-relaxed">
                    Banjara Hills Rd No. 10, Zahara Nagar, <br />
                    Hyderabad, Telangana 500034
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#008B8B] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1A1A1A] mb-1">Phone / WhatsApp</p>
                  <p className="text-[#5C5C5C] text-[14px]">+91 91004 04352</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#008B8B] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1A1A1A] mb-1">Working Hours</p>
                  <p className="text-[#5C5C5C] text-[14px]">
                    Mon – Sun: 8:00 AM – 9:30 PM <br />
                    <span className="text-[#2D6A4F] text-[13px] font-medium mt-1 inline-block">Open Every Day</span>
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919100404352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-8 py-3.5 rounded-[2px] text-[15px] hover:bg-[#20BE5A] transition-all duration-200 shadow-sm w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Message Us on WhatsApp
            </a>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="lg:col-span-3 lg:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={reduce ? noMotion : fadeRight}
          >
            <div className="bg-white p-8 lg:p-10 rounded-[8px] shadow-sm border border-[#E8E4DC]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-medium text-[#1A1A1A] mb-2 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full bg-[#FAF9F7] border border-[#E8E4DC] rounded-[2px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#D40000] transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-medium text-[#1A1A1A] mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full bg-[#FAF9F7] border border-[#E8E4DC] rounded-[2px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#D40000] transition-colors"
                      placeholder="+91"
                    />
                    {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="specialty" className="block text-[13px] font-medium text-[#1A1A1A] mb-2 uppercase tracking-wide">
                      Specialty Needed
                    </label>
                    <select
                      {...register('specialty')}
                      id="specialty"
                      className="w-full bg-[#FAF9F7] border border-[#E8E4DC] rounded-[2px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#D40000] transition-colors appearance-none"
                    >
                      <option value="">Select Department</option>
                      <option value="General Medicine & Diabetes Care">General Medicine & Diabetes Care</option>
                      <option value="Eye Care & Vision Surgery">Eye Care & Vision Surgery</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.specialty && <p className="text-red-500 text-[12px] mt-1">{errors.specialty.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-[13px] font-medium text-[#1A1A1A] mb-2 uppercase tracking-wide">
                      Preferred Date
                    </label>
                    <input
                      {...register('date')}
                      type="date"
                      id="date"
                      className="w-full bg-[#FAF9F7] border border-[#E8E4DC] rounded-[2px] px-4 py-3 text-[15px] text-[#5C5C5C] focus:outline-none focus:border-[#D40000] transition-colors"
                    />
                    {errors.date && <p className="text-red-500 text-[12px] mt-1">{errors.date.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-[#1A1A1A] mb-2 uppercase tracking-wide">
                    Brief Message <span className="text-[#9A9A9A] normal-case tracking-normal">(Optional)</span>
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full bg-[#FAF9F7] border border-[#E8E4DC] rounded-[2px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#D40000] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D40000] text-white py-4 rounded-[2px] text-[15px] font-medium hover:bg-[#B30000] transition-colors duration-200 mt-2"
                >
                  Request Appointment →
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
