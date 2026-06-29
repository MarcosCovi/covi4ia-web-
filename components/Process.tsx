import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    num: '01', icon: Search, title: 'Diagnóstico',
    desc: 'Analizamos tus procesos actuales, identificamos cuellos de botella y detectamos dónde la IA puede generar impacto real en tu cadena.',
    color: 'text-brand-cyan',   border: 'border-brand-cyan/30',   bg: 'bg-brand-cyan/10',
  },
  {
    num: '02', icon: Lightbulb, title: 'Diseño',
    desc: 'Diseñamos la solución a medida: qué agentes construir, qué contenidos dictar, qué procesos rediseñar. Sin plantillas genéricas.',
    color: 'text-blue-400',     border: 'border-blue-400/30',     bg: 'bg-blue-400/10',
  },
  {
    num: '03', icon: Rocket, title: 'Implementación',
    desc: 'Deployamos agentes, dictamos formaciones y ejecutamos la consultoría. Todo con acompañamiento activo de nuestro equipo.',
    color: 'text-brand-copper', border: 'border-brand-copper/30', bg: 'bg-brand-copper/10',
  },
  {
    num: '04', icon: BarChart3, title: 'Medición',
    desc: 'Definimos KPIs desde el día uno y hacemos seguimiento del impacto. Ajustamos hasta que los números hablen por sí solos.',
    color: 'text-green-400',    border: 'border-green-400/30',    bg: 'bg-green-400/10',
  },
]

export default function Process() {
  return (
    <section className="bg-brand-navy py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">Metodología</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Cómo trabajamos</h2>
          <p className="text-brand-mid-gray text-lg max-w-xl mx-auto">
            Un proceso claro de cuatro pasos que lleva tu operación del diagnóstico al impacto medible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.num} className={`relative rounded-2xl border ${s.border} bg-brand-navy-mid p-7`}>
                <p className={`font-display text-5xl font-bold ${s.color} opacity-20 mb-4 leading-none`}>{s.num}</p>
                <div className={`inline-flex p-3 rounded-xl mb-4 ${s.bg}`}>
                  <Icon size={20} className={s.color} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-brand-mid-gray text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
