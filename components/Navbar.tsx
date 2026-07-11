'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const serviciosDropdown = [
  { label: 'Formación IA',            sub: 'Educación e IA aplicada',      href: '/servicios/aprendemos',    color: '#00D4FF', group: 'Aprendemos' },
  { label: 'Ecosistema Crypto',        sub: 'Blockchain & mercados crypto', href: '/servicios/aprendemos',    color: '#f7931a', group: 'Aprendemos' },
  { label: 'Ecosistema Supply Chain',  sub: 'Cadena de suministro',         href: '/servicios/aprendemos',    color: '#22c55e', group: 'Aprendemos' },
  { label: 'Integración IA·Crypto·SC', sub: 'Convergencia tecnológica',     href: '/servicios/aprendemos',    color: '#a78bfa', group: 'Aprendemos' },
  { label: 'Automatizamos',           sub: 'Flujos y procesos',             href: '/servicios/automatizamos', color: '#60a5fa', group: ''           },
  { label: 'Optimizamos',             sub: 'Eficiencia operativa',          href: '/servicios/optimizamos',   color: '#f59e0b', group: ''           },
]

const navLinks = [
  { label: 'Nosotros',   href: '#nosotros'  },
  { label: 'Para quién', href: '#audiencia' },
  { label: 'Contacto',   href: '#contacto'  },
]

const explorarLinks = [
  { label: 'Noticias IA',     sub: 'Inteligencia artificial', color: '#6366f1', href: '#noticias-ia',     isRoute: false },
  { label: 'Noticias Crypto', sub: 'Blockchain & tokens',     color: '#f7931a', href: '#noticias-crypto', isRoute: false },
  { label: 'Noticias SC',     sub: 'Supply Chain',            color: '#22c55e', href: '#noticias-sc',     isRoute: false },
  { label: 'COVICOIN ALPHA',  sub: 'Informe diario crypto',   color: '#00D4FF', href: '/covicoin',        isRoute: true  },
  { label: 'Trading IA Bots', sub: 'Automatización',          color: '#a78bfa', href: '#trading-bots',    isRoute: false },
  { label: 'Ebooks',          sub: 'Recursos descargables',   color: '#fb923c', href: '#ebooks',          isRoute: false },
]

export default function Navbar() {
  const [open,         setOpen]         = useState(false)
  const [scrolled,     setScrolled]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [explorarOpen, setExplorarOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const explorarRef = useRef<HTMLDivElement>(null)
  const pathname    = usePathname()
  const isCovicoin  = pathname === '/covicoin'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false)
      if (explorarRef.current && !explorarRef.current.contains(e.target as Node))
        setExplorarOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    setDropdownOpen(false)
    setExplorarOpen(false)
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
                    <div className="absolute top-full left-0 mt-3 w-72 rounded-xl border border-white/10 bg-brand-navy-mid shadow-2xl shadow-black/40 py-2 z-50">
                      {/* Ver todos */}
                      <button onClick={() => scrollTo('#servicios')}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors text-left">
                        <div style={{ width: 3, height: 30, borderRadius: 3, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                        <div>
                          <div className="text-sm font-semibold text-white/60">Ver todos</div>
                          <div className="text-xs text-brand-mid-gray">Todos los servicios</div>
                        </div>
                      </button>
                      <div className="h-px bg-white/5 mx-4 my-1" />

                      {/* Aprendemos section */}
                      <div className="px-4 pt-1.5 pb-0.5">
                        <p className="text-[10px] font-bold text-white/35 uppercase tracking-[0.15em]">Aprendemos</p>
                      </div>
                      {serviciosDropdown.filter(s => s.group === 'Aprendemos').map(s => (
                        <Link key={s.label} href={s.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors">
                          <div style={{ width: 3, height: 28, borderRadius: 3, background: s.color, flexShrink: 0 }} />
                          <div>
                            <div className="text-sm font-semibold" style={{ color: s.color }}>{s.label}</div>
                            <div className="text-xs text-brand-mid-gray">{s.sub}</div>
                          </div>
                        </Link>
 