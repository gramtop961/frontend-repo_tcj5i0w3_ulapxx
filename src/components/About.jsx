import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          Vision, Discipline, Emotion
        </h2>
        <p className="mt-6 max-w-3xl text-white/80">
          Our work is the intersection of disciplined craft and instinctive storytelling. We design light like architects, frame like editors, and move like musicians—building visual identities that feel inevitable. From brand photography to cinema-grade campaigns, our process honors both precision and poetry.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            {
              title: 'Philosophy',
              text:
                'Every frame is an invitation. We capture truth with intention—elevating brand DNA into iconic visual language.'
            },
            {
              title: 'Approach',
              text:
                'Creative direction meets technical mastery. We choreograph lighting, lens choices, and motion to shape emotion.'
            },
            {
              title: 'Promise',
              text:
                'Luxury without pretense. Work that is timeless, ownable, and aligned to your commercial goals.'
            }
          ].map((item, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
              <p className="mt-3 text-white/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
