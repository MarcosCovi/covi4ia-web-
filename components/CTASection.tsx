'use client'
import { useState } from 'react'
import { ArrowRight, Mail, Linkedin, CheckCircle2 } from 'lucide-react'

export default function CTASection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm]     = useState({ nombre: '', empresa: '', email: '', mensaje: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xgojzegp', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-brand-navy py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(0,212,255,0.08) 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-xs text-brand-cyan font-medium tracking-wider uppercase">Contacto</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            ¿Listo para hacer inteligente<br />
            <span className="text-gradient-cyan">tu cadena?</span>
          </h2>
          <p className="text-brand-mid-gray text-lg max-w-xl mx-auto">
            Contanos tu desafío operativo y te mostramos cómo la IA lo resuelve.
          </p>
        </div>

        {/* Form / Success */}
        {status === 'sent' ? (
          <div className="text-center py-16">
            <CheckCircle2 size={56} className="text-brand-cyan mx-auto mb-5" />
            <h3 className="font-display text-2xl font-bold text-white mb-2">¡Mensaje recibido!</h3>
            <p className="text-brand-mid-gray">Te respondemos en menos de 24 horas hábiles.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}
            className="bg-brand-navy-mid rounded-2xl border border-white/8 p-8 sm:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-brand-mid-gray uppercase tracking-widest mb-2">Nombre</label>
                <input required value={form.nombre}
                  onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                  placeholder="Tu nombre"
                  className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-mid-gray/40 text-sm focus:outline-none focus:border-brand-cyan/50 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-mid-gray uppercase tracking-widest mb-2">Empresa</label>
                <input value={form.empresa}
                  onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))}
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-mid-gray/40 text-sm focus:outline-none focus:border-brand-cyan/50 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-mid-gray uppercase tracking-widest mb-2">Email</label>
              <input required type="email" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="tu@empresa.com"
                className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-mid-gray/40 text-sm focus:outline-none focus:border-brand-cyan/50 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-mid-gray uppercase tracking-widest mb-2">
                ¿Cuál es tu desafío operativo?
              </label>
              <textarea required rows={4} value={form.mensaje}
                onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
                placeholder="Contanos brevemente qué proceso quieren mejorar o qué problema enfrentan en su supply chain..."
                className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-mid-gray/40 text-sm focus:outline-none focus:border-brand-cyan/50 transition-colors resize-none" />
            </div>
            {status === 'error' && (
              <p className="text-red-400 text-sm">Hubo un error al enviar. Intentá nuevamente o escribinos directamente a sales@covi4ia.com</p>
            )}
            <button type="submit" disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-cyan text-brand-navy font-bold text-base hover:bg-brand-cyan-dark transition-all duration-200 shadow-2xl shadow-brand-cyan/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Enviando...' : <><span>Enviá tu consulta</span><ArrowRight size={18} /></>}
            </button>
          </form>
        )}

        {/* Alt contact */}
        <div className="text-center mt-8">
          <p className="text-brand-mid-gray text-sm mb-4">o contactanos directamente</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://www.linkedin.com/in/covi4ia-721985196" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-brand-mid-gray hover:border-white/30 hover:text-white transition-all duration-200 text-sm font-medium">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="mailto:sales@covi4ia.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-brand-mid-gray hover:border-white/30 hover:text-white transition-all duration-200 text-sm font-medium">
              <Mail size={16} /> sales@covi4ia.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
