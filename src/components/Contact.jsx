import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          Collaborate With Us
        </h2>
        <p className="mt-4 text-white/80">Tell us about your brand, your audience, and what you hope to create. We’ll reply within 24 hours.</p>
        <form className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 outline-none placeholder:text-white/50 focus:border-[#c8a96a]" placeholder="Name" required />
            <input className="w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 outline-none placeholder:text-white/50 focus:border-[#c8a96a]" placeholder="Email" type="email" required />
          </div>
          <input className="w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 outline-none placeholder:text-white/50 focus:border-[#c8a96a]" placeholder="Company / Brand" />
          <textarea className="min-h-[140px] w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 outline-none placeholder:text-white/50 focus:border-[#c8a96a]" placeholder="Project details, timelines, references" />
          <button className="mt-2 w-full rounded-md bg-[#c8a96a] px-6 py-3 font-semibold text-black transition hover:bg-[#d7bb7c] sm:w-auto">Request a Proposal</button>
        </form>
      </div>
    </section>
  )
}
