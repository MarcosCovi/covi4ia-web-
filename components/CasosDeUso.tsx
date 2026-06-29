import { TrendingDown, Users, Search } from 'lucide-react'

const casos = [
  {
    tag: 'AUTOMATIZAMOS', tagColor: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
    icon: TrendingDown,   iconColor: 'text-blue-400 bg-blue-400/10',
    title:     'Empresa distribuidora reduce errores de órdenes de compra',
    challenge: 'El equipo procesaba 200+ órdenes semanales manualmente, con un 15 % de errores que generaban devoluciones y pérdidas de margen.',
    solution:  'Agente de IA que valida, cruza y procesa órdenes automáticamente, con alertas de excepción para el equipo operativo.',
    result:    '–70 % errores · –40 % tiempo de procesamiento',
  },
  {
    tag: 'APRENDEMOS',    tagColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/5',
    icon: Users,          iconColor: 'text-brand-cyan bg-brand-cyan/10',
    title:     'Equipo de logística de 40 personas formado en IA generativa',
    challenge: 'La empresa quería incorporar IA en sus operaciones pero el equipo no tenía conocimientos ni herramientas adaptadas al sector.',
    solution:  'Programa in-company de 4 semanas con casos de uso reales extraídos de su propia cadena de suministro.',
    result:    '40 personas formadas · 4 semanas · 100 % aplicabilidad',
  },
  {
    tag: 'OPTIMIZAMOS',   tagColor: 'text-brand-copper border-brand-copper/30 bg-brand-copper/5',
    icon: Search,         iconColor: 'text-brand-copper bg-brand-copper/10',
    title:     'Diagnóstico de palancas de mejora en cadena de frío',
    challenge: 'Empresa de alimentos con mermas del 8 % sin identificar dónde exactamente se perdía el control de temperatura.',
    solution:  'Consultoría de diagnóstico con IA que analizó datos históricos y detectó 4 puntos críticos en la cadena.',
    result:    '–5 % merma en 60 días · ROI x4 del proyecto',
  },
]

export default function CasosDeUso() {
  return (
    <section className="bg-brand-navy-mid py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">Casos de uso</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">IA aplicada. No teoría.</h2>
          <p className="text-brand-mid-gray text-lg max-w-xl mx-auto">
            Escenarios reales del tipo de trabajo que hacemos con empresas latinoamericanas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {casos.map(c => {
            const Icon = c.icon
            return (
              <div key={c.title} className="rounded-2xl border border-white/8 bg-brand-navy p-7 flex flex-col gap-5">
                <span className={`inline-flex self-start text-xs font-bold tracking-widest px-3 py-1 rounded-full border ${c.tagColor}`}>
                  {c.tag}
                </span>
                <div className="flex gap-4 items-start">
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${c.iconColor}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-bold text-white leading-snug">{c.title}</h3>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-mid-gray uppercase tracking-widest mb-1.5">Desafío</p>
                  <p className="text-sm text-brand-mid-gray leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-mid-gray uppercase tracking-widest mb-1.5">Solución</p>
                  <p className="text-sm text-brand-mid-gray leading-relaxed">{c.solution}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/8">
                  <p className="text-sm font-bold text-white">{c.result}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs text-brand-mid-gray mt-8 italic opacity-60">
          * Los casos representan escenarios típicos del tipo de proyectos que desarrollamos.
        </p>
      </div>
    </section>
  )
}
