'use client'
import Link from 'next/link'
import type { CSSProperties } from 'react'

const SECTIONS = [
  {
    label: 'Noticias IA',
    sub: 'Inteligencia artificial',
    color: '#6366f1',
    href: '#noticias-ia',
    highlight: false,
  },
  {
    label: 'Noticias Cripto',
    sub: 'Blockchain & tokens',
    color: '#f7931a',
    href: '#noticias-cripto',
    highlight: false,
  },
  {
    label: 'Noticias SC',
    sub: 'Supply Chain',
    color: '#22c55e',
    href: '#noticias-sc',
    highlight: false,
  },
  {
    label: 'COVICOIN ALPHA',
    sub: 'Informe diario cripto',
    color: '#00D4FF',
    href: '/covicoin',
    highlight: true,
  },
  {
    label: 'Trading IA Bots',
    sub: 'Automatización',
    color: '#a78bfa',
    href: '#trading-bots',
    highlight: false,
  },
  {
    label: 'Ebooks',
    sub: 'Recursos descargables',
    color: '#fb923c',
    href: '#ebooks',
    highlight: false,
  },
] as const

const panel: CSSProperties = {
  position: 'fixed',
  left: 14,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 40,
  width: 182,
  background: 'rgba(6,10,20,0.90)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 12,
  padding: '14px 0 10px',
}

const header: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '0 14px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
}

export default function SectionNavPanel() {
  return (
    <div className="hidden 2xl:block" style={panel}>
      {/* Header */}
      <div style={header}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00D4FF' }} />
        <span style={{
          fontSize: 10,
          letterSpacing: 2,
          color: '#00D4FF',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}>
          Explorar
        </span>
      </div>

      {/* Section links */}
      <div style={{ padding: '8px 10px 0' }}>
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            style={{
              display: 'block',
              position: 'relative',
              padding: '9px 22px 9px 16px',
              marginBottom: 4,
              borderRadius: 8,
              background: s.highlight
                ? 'rgba(0,212,255,0.05)'
                : 'rgba(255,255,255,0.02)',
              border: `1px solid ${s.highlight
                ? 'rgba(0,212,255,0.15)'
                : 'rgba(255,255,255,0.05)'}`,
              textDecoration: 'none',
              overflow: 'hidden',
            }}
          >
            {/* Left accent bar */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 6,
              bottom: 6,
              width: 3,
              borderRadius: 3,
              background: s.color,
            }} />

            {/* Label */}
            <div style={{
              fontSize: 12,
              fontWeight: 600,
              color: s.highlight ? s.color : '#d4e0ee',
              lineHeight: 1.2,
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              letterSpacing: s.highlight ? 0.3 : 0,
            }}>
              {s.label}
            </div>

            {/* Subtitle */}
            <div style={{
              fontSize: 10,
              color: '#4a6080',
              marginTop: 2,
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}>
              {s.sub}
            </div>

            {/* Arrow */}
            <div style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 13,
              color: s.highlight ? s.color : '#2a3d55',
            }}>›</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
