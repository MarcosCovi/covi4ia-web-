'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Qué tamaño de empresa necesito tener para trabajar con COVI4IA?',
    a: 'Trabajamos con pymes medianas en crecimiento y con empresas establecidas. No tenés que ser una multinacional: si tenés procesos de supply chain que se repiten y equipos que los ejecutan, hay oportunidades de mejora con IA.',
  },
  {
    q: '¿Cuánto tiempo lleva implementar un agente de IA?',
    a: 'Depende de la complejidad. Un agente para automatizar un proceso específico puede estar en producción en 3 a 6 semanas. Diagnósticos y consultorías estratégicas suelen tomar entre 2 y 4 semanas.',
  },
  {
    q: '¿Necesito conocimientos técnicos en mi equipo?',
    a: 'No. Una parte del valor de COVI4IA es justamente traducir la IA al lenguaje operativo. Nos encargamos de la parte técnica y formamos a tu equipo para que pueda operar y aprovechar las soluciones de forma autónoma.',
  },
  {
    q: '¿Trabajan con empresas fuera de Argentina?',
    a: 'Sí. Tenemos presencia en Argentina, Uruguay y Chile, y trabajamos de forma remota con empresas de cualquier país de Latinoamérica.',
  },
  {
    q: '¿Cómo se mide el retorno de inversión de un proyecto?',
    a: 'Definimos KPIs de impacto antes de arrancar: ahorro de horas, reducción de errores, mejora en tiempos de ciclo, etc. Todo proyecto cierra con un informe de resultados contra línea de base.',
  },
  {
    q: '¿Ofrecen soporte después de la implementación?',
    a: 'Sí. Todos los proyectos incluyen un período de seguimiento post-implementación. Y ofrecemos contratos de soporte continuo para agentes en producción.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-brand-navy-mid py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Preguntas frecuentes</h2>
          <p className="text-brand-mid-gray text-lg">Todo lo que necesitás saber antes de dar el paso.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                open === i ? 'border-brand-cyan/30 bg-brand-navy' : 'border-white/8 bg-brand-navy/50'
              }`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                <span className={`font-display font-semibold text-base transition-colors ${open === i ? 'text-white' : 'text-brand-mid-gray'}`}>
                  {faq.q}
                </span>
                <ChevronDown size={18}
                  className={`flex-shrink-0 text-brand-cyan transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-brand-mid-gray text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
