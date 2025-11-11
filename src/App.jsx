import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <a href="#" className="text-lg font-semibold text-white"><span className="text-[#c8a96a]">FRAME</span> & MOTION</a>
      <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
        {[
          ['About', '#about'],
          ['Services', '#services'],
          ['Portfolio', '#portfolio'],
          ['Process', '#process'],
          ['Testimonials', '#testimonials'],
          ['Contact', '#contact']
        ].map(([label, href]) => (
          <a key={href} href={href} className="transition hover:text-white">{label}</a>
        ))}
      </nav>
      <a href="#contact" className="rounded-full bg-[#c8a96a] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#d7bb7c]">Book</a>
    </header>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-12 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row">
        <div>
          <div className="text-white"><span className="text-[#c8a96a]">FRAME</span> & MOTION</div>
          <p className="mt-2 max-w-md text-sm">Cinematic brand photography and films for fashion houses, luxury products, and ambitious founders.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
          <div>
            <div className="text-white">Studio</div>
            <p className="mt-2">New York • Paris • Remote</p>
          </div>
          <div>
            <div className="text-white">Connect</div>
            <a href="#contact" className="mt-2 block hover:text-white">Request Proposal</a>
            <a href="#portfolio" className="block hover:text-white">Portfolio</a>
          </div>
          <div>
            <div className="text-white">Legal</div>
            <p className="mt-2">© {new Date().getFullYear()} Frame & Motion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
