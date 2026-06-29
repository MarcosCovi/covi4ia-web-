import { BookOpen, Bot, BarChart3 } from 'lucide-react'

const services = [
  {
    verb:   'APRENDEMOS',
    sub:    'Contenidos que transforman.',
    icon:   BookOpen,
    desc:   'Programas educativos personalizados en IA aplicada a supply chain. Cada módulo incluye casos de uso reales del sector para garantizar aplicabilidad inmediata en tu operación.',
    tags:   ['Personalizado', 'Casos reales', 'In-Company'],
    border: 'border-brand-cyan/25 hover:border-brand-cyan/60',
    iconBg: 'bg-brand-cyan/10 text-brand-cyan',
    glow:   'hover:shadow-brand-cyan/10',
  },
  {
    verb:   'AUTOMATIZAMOS',
    sub:    'Agentes que ejecutan.',
    icon:   Bot,
    desc:   'Empleados virtuales inteligentes que automatizan procesos clave: gestión de proveedores, control de inventario, logística y más. IA generativa que trabaja por vos.',
    tags:   ['IA Generativa', 'Automatización', 'Eficiencia'],
    border: 'border-brand-steel/35 hover:border-blue-400/60',
    iconBg: 'bg-blue-400/10 text-blue-400',
    glow:   'hover:shadow-blue-500/10',
  },
  {
    verb:   'OPTIMIZAMOS',
    sub:    'Resultados que importan.',
    icon:   BarChart3,
    desc:   'Analizamos en profundidad tus procesos de supply chain, identificamos palancas de mejora e implementamos soluciones con IA que generan impacto medible desde el día uno.',
    tags:   ['Diagnóstico', 'Estrategia', 'ROI'],
    border: 'border-brand-copper/25 hover:border-brand-copper/60',
    iconBg: 'bg-brand-copper/10 text-brand-copper',
    glow:   'hover:shadow-brand-copper/10',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-brand-navy-mid py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Servicios
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Tres verbos. Un objetivo.
          </h2>
          <p className="text-brand-mid-gray text-lg max-w-xl mx-auto">
            Todo lo que necesitás para llevar tu supply chain al siguiente nivel con IA.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => {
            const Icon = s.icon
            return (
              <div
                key={s.verb}
                className={`relative group rounded-2xl border bg-brand-navy p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${s.border} ${s.glow}`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-5 ${s.iconBg}`}>
                  <Icon size={22} />
                </div>

                {/* Verb */}
                <p className="font-display text-xs font-bold tracking-[0.25em] text-brand-mid-gray mb-1">
                  {s.verb}
                </p>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {s.sub}
                </h3>
                <p className="text-brand-mid-gray text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-brand-mid-gray border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors text-sm font-semibold group"
          >
            Contanos tu desafío
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
