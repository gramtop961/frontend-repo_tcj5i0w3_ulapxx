import React from 'react'

const testimonials = [
  {
    quote:
      'Every frame felt intentional and true to our brand. The film not only looked beautiful—it moved product.',
    name: 'Elena M.',
    role: 'Creative Director, Atelier No.9'
  },
  {
    quote:
      'They choreograph light like musicians. Our launch campaign outperformed benchmarks across every channel.',
    name: 'Karan S.',
    role: 'Founder, VERVE Labs'
  },
  {
    quote:
      'Professional, visionary, meticulous. The stills and video defined our visual identity for years.',
    name: 'Julien R.',
    role: 'Brand Lead, Maison Vasseur'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          Words From Our Clients
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-6 text-sm text-white/60">
                <span className="font-medium text-white">{t.name}</span>
                <span className=""> — {t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
