import React from 'react'

const steps = [
  { title: 'Discovery', text: 'We distill your brand DNA, audience, and objectives into a clear creative brief.' },
  { title: 'Concept & Direction', text: 'Moodboards, storyboards, treatment. We align narrative, palette, and motion.' },
  { title: 'Production', text: 'Casting, crew, lighting design, locations, shotlists—fluently executed.' },
  { title: 'Post & Delivery', text: 'Edit, grade, sound, retouching, and mastered exports designed for every platform.' },
]

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          Process
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="absolute -top-3 left-4 rounded-full bg-[#c8a96a] px-3 py-1 text-xs font-bold text-black">{String(i+1).padStart(2,'0')}</div>
              <h3 className="mt-4 text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>{s.title}</h3>
              <p className="mt-2 text-white/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
