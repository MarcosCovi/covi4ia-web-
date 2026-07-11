'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const serviciosDropdown = [
  { label: 'Aprendemos',    href: '/servicios/aprendemos',    color: 'text-brand-cyan'   },
  { label: 'Automatizamos', href: '/servicios/automatizamos', color: 'text-blue-400'     },
  { label: 'Optimizamos',   href: '/servicios/optimizamos',   color: 'text-brand-copper' },
]

const navLinks = [
  { label: 'Nosotros',   href: '#nosotros'  },
  { label: 'Para quién', href: '#audiencia' },
  { label: 'Contacto',   href: '#contacto'  },
]

export default function Navbar() {
  const [open,         setOpen]         = useState(false)
  const [scrolled,     setScrolled]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isCovicoin = pathname === '/covicoin'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    setDropdownOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-navy/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/lion.png" alt="COVI4IA" width={32} height={32}
              className="drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
            <span className="font-display text-lg font-bold tracking-tight leading-none">
              <span className="text-white">COVI</span>
              <span className="text-brand-cyan">4</span>
              <span className="text-white">IA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">

            {!isCovicoin && (
              <>
                {/* Servicios dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm text-brand-mid-gray hover:text-white transition-colors duration-200 font-medium">
                    Servicios
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-xl border border-white/10 bg-brand-navy-mid shadow-2xl shadow-black/40 py-2 z-50">
                      <button onClick={() => scrollTo('#servicios')}
                        className="w-full text-left px-4 py-2.5 text-sm text-brand-mid-gray hover:text-white hover:bg-white/5 transition-colors">
                        Ver todos
                      </button>
                      <div className="h-px bg-white/5 my-1" />
                      {serviciosDropdown.map(s => (
                        <Link key={s.href} href={s.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2.5 text-sm font-semibold ${s.color} hover:bg-white/5 transition-colors`}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.map(link => (
                  <button key={link.href} onClick={() => scrollTo(link.href)}
                    className="text-sm text-brand-mid-gray hover:text-white transition-colors duration-200 font-medium">
                    {link.label}
                  </button>
                ))}
              </>
            )}

            {/* COVICOIN ALPHA — solo visible fuera de /covicoin */}
            {!isCovicoin && (
              <Link
                href="/covicoin"
                className="flex items-center gap-1.5 text-sm font-bold text-[#f7931a] hover:text-[#fbb040] transition-colors duration-200 border border-[#f7931a]/30 rounded-lg px-3 py-1.5 hover:border-[#f7931a]/60 hover:bg-[#f7931a]/5">
                <span style={{ fontSize: 13 }}>₿</span> COVICOIN ALPHA
              </Link>
            )}
          </nav>

          {/* Desktop CTA — oculto en /covicoin */}
          {!isCovicoin && (
            <div className="hidden md:block">
              <button onClick={() => scrollTo('#contacto')}
                className="px-5 py-2 rounded-lg text-sm font-semibold bg-brand-cyan text-brand-navy hover:bg-brand-cyan-dark transition-colors duration-200">
                Hablemos
              </button>
            </div>
          )}

          {/* Mobile hamburger — hidden on /covicoin */}
          {!isCovicoin && (
            <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menú">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu — hidden on /covicoin */}
      {open && !isCovicoin && (
        <div className="md:hidden bg-brand-navy-mid border-t border-white/5">
          <div className="px-4 py-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-brand-mid-gray uppercase tracking-widest px-2 pt-1 pb-2">Servicios</p>
            {serviciosDropdown.map(s => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                className={`py-2.5 px-2 text-sm font-semibold ${s.color} border-b border-white/5`}>
                → {s.label}
              </Link>
            ))}
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                className="text-left py-3 px-2 text-base text-brand-mid-gray hover:text-white transition-colors border-b border-white/5 last:border-0">
                {link.label}
              </button>
            ))}
            {!isCovicoin && (
              <Link href="/covicoin" onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-3 px-2 text-base font-bold text-[#f7931a] border-b border-white/5">
                <span>₿</span> COVICOIN ALPHA
              </Link>
            )}
            {!isCovicoin && (
              <button onClick={() => scrollTo('#contacto')}
                className="mt-3 w-full py-3 rounded-lg font-semibold bg-brand-cyan text-brand-navy hover:bg-brand-cyan-dark transition-colors">
                Hablemos
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
