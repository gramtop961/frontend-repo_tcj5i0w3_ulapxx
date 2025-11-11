import React from 'react'

const items = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  img: `https://images.unsplash.com/photo-${[
    '1519741497674-611481863552',
    '1491553895911-0055eca6402d',
    '1516821175245-928931a82d48',
    '1520975922215-23c2c1d4f59a',
    '1517467139951-f5a925c9f9d8',
    '1506086679524-493c64fdfaa6',
    '1541373578853-02e38d3d1b0b',
    '1518546305927-5a555bb7020d',
    '1503342217505-b0a15cf70489'
  ][i]}?auto=format&fit=crop&w=1200&q=80`,
  tag: ['Fashion', 'Product', 'Portrait'][i % 3]
}))

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Portfolio
          </h2>
          <p className="text-sm text-white/60">Hover to preview • Click to enlarge</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <a key={item.id} href={item.img} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              <img
                src={item.img}
                alt="Portfolio item"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white/90">
                {item.tag}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
