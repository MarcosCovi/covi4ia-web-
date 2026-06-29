import { Zap, Target, Globe, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon:  Zap,
    title: 'Especialización real',
    desc:  'No somos generalistas en IA. Vivimos en la intersección exacta de supply chain e inteligencia artificial generativa.',
    color: 'text-brand-cyan',
    bg:    'bg-brand-cyan/10',
  },
  {
    icon:  Target,
    title: 'Casos de uso concretos',
    desc:  'Cada servicio que ofrecemos se ancla en ejemplos reales del sector. Sin teoría abstracta, sin demos vacíos.',
    color: 'text-brand-copper',
    bg:    'bg-brand-copper/10',
  },
  {
    icon:  Globe,
    title: 'Hecho para Latam',
    desc:  'Entendemos el contexto argentino y latinoamericano. Hablamos tu idioma — literal y operativamente.',
    color: 'text-blue-400',
    bg:    'bg-blue-400/10',
  },
  {
    icon:  TrendingUp,
    title: 'Resultados medibles',
    desc:  'Nada de promesas vacías. Cada intervención tiene métricas de impacto definidas desde el día uno.',
    color: 'text-green-400',
    bg:    'bg-green-400/10',
  },
]

export default function WhyCovi() {
  return (
    <section id="nosotros" className="bg-brand-light-bg py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-cyan-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Por qué elegir COVI4IA
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-navy mb-4">
            Inteligencia que entiende tu operación.
          </h2>
          <p className="text-brand-steel text-lg leading-relaxed">
            Muchas consultoras hablan de IA. Pocas la aplican donde realmente importa.
            Nosotros nos especializamos en el lugar donde la cadena se rompe — y la
            reparamos con inteligencia generativa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map(r => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:shadow-gray-200/80 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`inline-flex p-3 rounded-xl mb-5 ${r.bg}`}>
                  <Icon size={22} className={r.color} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                  {r.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
