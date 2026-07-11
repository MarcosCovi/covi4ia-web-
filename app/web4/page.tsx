'use client'
import { useState } from 'react'

export default function Web4Page() {
  const [format, setFormat] = useState<'16x9' | '9x16'>('16x9')

  return (
    <main style={{ minHeight: '100vh', background: '#060a14', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        paddingTop: 96,
        paddingBottom: 32,
        textAlign: 'center',
        borderBottom: '1px solid #1e2d45',
        background: 'linear-gradient(180deg, #0a0e1a 0%, #060a14 100%)',
      }}>
        <div style={{ fontSize: 11, letterSpacing: 6, textTransform: 'uppercase', color: '#334155', marginBottom: 12 }}>
          COVI4IA · Presentación
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: -1, margin: 0 }}>
          WEB<span style={{ color: '#00D4FF', textShadow: '0 0 40px rgba(0,212,255,0.6)' }}>4</span>
        </h1>
        <p style={{ fontSize: 15, color: '#475569', marginTop: 10, letterSpacing: 2 }}>
          El Nuevo Paradigma
        </p>

        {/* Format toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 28 }}>
          {(['16x9', '9x16'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              style={{
                padding: '8px 22px',
                borderRadius: 8,
                border: format === f ? '1px solid #00D4FF' : '1px solid #1e2d45',
                background: format === f ? 'rgba(0,212,255,0.08)' : 'transparent',
                color: format === f ? '#00D4FF' : '#475569',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                cursor: 'pointer',
                transition: 'all .2s',
              }}
            >
              {f === '16x9' ? '▬ Web / LinkedIn' : '▮ Instagram / Reels'}
            </button>
          ))}
        </div>
      </div>

      {/* Video container */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        {format === '16x9' ? (
          <div style={{ width: '100%', maxWidth: 1100 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid #1e2d45', boxShadow: '0 0 80px rgba(0,212,255,0.07)' }}>
              <iframe
                src="/web4-video-16x9.html"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title="Web4 Presentación 16:9"
              />
            </div>
          </div>
        ) : (
          <div style={{ width: '100%', maxWidth: 420 }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid #1e2d45', boxShadow: '0 0 80px rgba(0,212,255,0.07)' }}>
              <iframe
                src="/web4-video-9x16.html"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title="Web4 Presentación 9:16"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer note */}
      <div style={{ textAlign: 'center', padding: '24px 24px 48px', color: '#1e2d45', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase' }}>
        COVI4IA · Engineering the Web4 Enterprise · www.covi4ia.com
      </div>
    </main>
  )
}
