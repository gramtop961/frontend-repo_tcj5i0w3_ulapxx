import React from 'react'
import { Camera, Clapperboard, Sparkles, Briefcase, Palette } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Brand Photography',
    desc: 'Editorial portraits, lookbooks, and campaigns—crafted with dramatic light and clean art direction.'
  },
  {
    icon: Sparkles,
    title: 'Product Shoots',
    desc: 'Studio or on-location, we shape textures, reflections, and scale to make products unforgettable.'
  },
  {
    icon: Clapperboard,
    title: 'Fashion Films',
    desc: 'Cinematic narratives with choreography, movement, and sound design built for modern distribution.'
  },
  {
    icon: Briefcase,
    title: 'Corporate Visuals',
    desc: 'Executive profiles and brand films that communicate clarity, trust, and momentum.'
  },
  {
    icon: Palette,
    title: 'Creative Direction',
    desc: 'Concept development, storyboarding, production design, and post—end-to-end creative leadership.'
  }
]

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <Icon className="h-6 w-6 text-[#c8a96a]" />
              <h3 className="mt-4 text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
              <p className="mt-2 text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
