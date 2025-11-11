import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 sm:pt-36 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-[0.3em] text-[#c8a96a]"
        >
          Cinematic Brand Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Crafted Light. Framed Stories. Brands in Motion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl text-base text-white/80 sm:text-lg"
        >
          We create luxurious, emotionally charged visuals for fashion labels, ambitious startups, and iconic products. Precision lighting, editorial composition, and narrative-driven cinematography—designed to move your audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-4 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="rounded-full bg-[#c8a96a] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d7bb7c]">
            Start a Project
          </a>
          <a href="#portfolio" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
            View Portfolio
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 opacity-80 sm:flex sm:flex-row sm:items-center sm:gap-10">
          {[
            ['Fashion', 'Films'],
            ['Product', 'Shoots'],
            ['Creative', 'Direction'],
            ['Corporate', 'Visuals'],
          ].map(([a, b], i) => (
            <div key={i} className="text-sm text-white/70">
              <span className="font-medium text-white">{a}</span> / {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
