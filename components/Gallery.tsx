'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { fadeUp, noMotion, viewportOptions, staggerContainer } from '@/lib/animations'

const PHOTOS = [
  {
    src: '/images/clinic/cataract-surgery.jpg',
    alt: 'Cataract surgery in progress at Pinnacle Healthcare and Eye Clinic',
    caption: 'Cataract Surgery in Progress',
    span: 'lg:row-span-2',
  },
  {
    src: '/images/clinic/lasik-procedure.jpg',
    alt: 'LASIK procedure using Schwind laser technology',
    caption: 'LASIK Vision Correction',
    span: '',
  },
  {
    src: '/images/clinic/eye-exam.jpg',
    alt: 'Dr. Maimoona Fareed conducting a slit-lamp eye examination',
    caption: 'Detailed Eye Examination',
    span: '',
  },
  {
    src: '/images/clinic/yag-laser.jpg',
    alt: 'YAG laser treatment at Pinnacle Eye Care',
    caption: 'YAG Laser Treatment',
    span: '',
  },
  {
    src: '/images/clinic/conference-talk.jpg',
    alt: 'Dr. Maimoona Fareed presenting at the 10th Annual State Ophthalmology Conference',
    caption: 'Sharing Expertise at Ekashila Eye Con 2025',
    span: '',
  },
  {
    src: '/images/clinic/award-ceremony.jpg',
    alt: 'Dr. Maimoona Fareed receiving a certificate of appreciation',
    caption: 'Recognized for Excellence in Ophthalmology',
    span: '',
  },
]

export default function Gallery() {
  const reduce = useReducedMotion()

  return (
    <section className="py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : fadeUp}
        >
          <span className="label-text">Inside Our Clinic</span>
          <h2
            className="heading-font mt-4 text-[#1A1A1A] max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            A Look at Our Care in Action
          </h2>
          <p className="mt-6 text-[#6B7280] max-w-2xl mx-auto text-[17px] leading-relaxed">
            From the operating theatre to the conference podium — real moments from our doctors and our practice.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={reduce ? noMotion : staggerContainer}
        >
          {PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              variants={reduce ? noMotion : fadeUp}
              className={`group relative overflow-hidden rounded-[8px] shadow-card ${photo.span} ${photo.span ? 'col-span-2 lg:col-span-1' : ''} aspect-[4/3]`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-[13px] font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
