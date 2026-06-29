import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy hero-grid">

      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,123,56,0.10) 0%, transparent 70%)', animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(100,60,160,0.08) 0%, transparent 70%)' }} />

      {/* Content — centrado */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Lion logo — centrado */}
          <div className="mb-4">
            <Image
              src="/lion.png"
              alt="COVI4IA León"
              width={200}
              height={200}
              className="drop-shadow-[0_0_50px_rgba(0,212,255,0.40)]"
              priority
            />
          </div>

          {/* Brand name */}
          <h1 className="font-display font-bold tracking-tight leading-none mb-4"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}>
            <span className="text-white">COVI</span>
            <span className="text-brand-cyan">4</span>
            <span className="text-white">IA</span>
          </h1>

          {/* Taglines */}
          <div className="mb-4">
            <p className="text-brand-mid-gray text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-2">
              Engineering the <span className="text-brand-cyan">Web4</span> Enterprise
            </p>
            <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white font-light italic leading-snug">
              Inteligencia para operaciones reales.
            </p>
          </div>

          {/* Description */}
          <p className="text-brand-mid-gray text-base sm:text-lg max-w-2xl leading-relaxed mt-4 mb-8">
            Transformamos la cadena de suministro de empresas latinoamericanas
            con <span className="text-white">IA generativa</span>. Aprendemos juntos,
            automatizamos procesos y optimizamos resultados.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-cyan text-brand-navy font-semibold text-base hover:bg-brand-cyan-dark transition-all duration-200 shadow-lg shadow-brand-cyan/25 hover:-translate-y-0.5">
              Conocé nuestros servicios <ArrowRight size={18} />
            </a>
            <a href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-base hover:border-brand-cyan/50 hover:text-brand-cyan transition-all duration-200 hover:-translate-y-0.5">
              Hablemos
            </a>
          </div>

          {/* Service pillars */}
          <div className="mt-14 flex flex-wrap gap-8 justify-center">
            {[
              { verb: 'APRENDEMOS',    sub: 'Contenidos que transforman.' },
              { verb: 'AUTOMATIZAMOS', sub: 'Agentes que ejecutan.'       },
              { verb: 'OPTIMIZAMOS',   sub: 'Resultados que importan.'    },
            ].map(s => (
              <div key={s.verb} className="flex flex-col items-center gap-0.5">
                <span className="font-display text-sm font-bold text-brand-cyan tracking-widest">{s.verb}</span>
                <span className="text-xs text-brand-mid-gray">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-mid-gray opacity-50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
