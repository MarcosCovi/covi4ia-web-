'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Nosotros',   href: '#nosotros'  },
  { label: 'Para quién', href: '#audiencia' },
  { label: 'Contacto',   href: '#contacto'  },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/lion.png"
              alt="COVI4IA"
              width={32}
              height={32}
              className="drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]"
            />
            <span className="font-display text-lg font-bold tracking-tight leading-none">
              <span className="text-white">COVI</span>
              <span className="text-brand-cyan">4</span>
              <span className="text-white">IA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-sm text-brand-mid-gray hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleLink('#contacto')}
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-brand-cyan text-brand-navy hover:bg-brand-cyan-dark transition-colors duration-200"
            >
              Hablemos
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-navy-mid border-t border-white/5">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-left py-3 px-2 text-base text-brand-mid-gray hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLink('#contacto')}
              className="mt-3 w-full py-3 rounded-lg font-semibold bg-brand-cyan text-brand-navy hover:bg-brand-cyan-dark transition-colors"
            >
              Hablemos
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
