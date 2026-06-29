import { ArrowRight, Mail, Linkedin } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-brand-navy py-24 lg:py-32">

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 50%, rgba(0,212,255,0.08) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
          <span className="text-xs text-brand-cyan font-medium tracking-wider uppercase">
            Contacto
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          ¿Listo para hacer inteligente
          <br />
          <span className="text-gradient-cyan">tu cadena?</span>
        </h2>

        <p className="text-brand-mid-gray text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Trabajemos juntos. Contanos tu desafío operativo y te mostramos cómo la IA lo resuelve.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:hola@covi4ia.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-cyan text-brand-navy font-bold text-lg hover:bg-brand-cyan-dark transition-all duration-200 shadow-2xl shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:-translate-y-0.5 mb-8"
        >
          <Mail size={20} />
          Envianos un mensaje
          <ArrowRight size={20} />
        </a>

        {/* Divider */}
        <p className="text-brand-mid-gray text-sm mb-6">o encontranos en</p>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-brand-mid-gray hover:border-white/30 hover:text-white transition-all duration-200 text-sm font-medium"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:hola@covi4ia.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-brand-mid-gray hover:border-white/30 hover:text-white transition-all duration-200 text-sm font-medium"
          >
            <Mail size={16} />
            hola@covi4ia.com
          </a>
        </div>
      </div>
    </section>
  )
}
