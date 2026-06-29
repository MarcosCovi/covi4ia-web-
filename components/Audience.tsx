import { Building2, GraduationCap, CheckCircle2 } from 'lucide-react'

const empresas = [
  'Pymes y empresas medianas en crecimiento',
  'Sectores con cadenas de suministro complejas',
  'Equipos de operaciones y logística',
  'Gerentes COO / Directores de operaciones',
  'Empresas buscando automatizar procesos clave',
]

const instituciones = [
  'Universidades con carreras de negocios y logística',
  'Centros de formación ejecutiva',
  'Programas de Supply Chain y operaciones',
  'Directores académicos y coordinadores',
  'Instituciones que forman líderes del futuro',
]

function AudienceCard({
  icon: Icon,
  title,
  subtitle,
  items,
  accent,
}: {
  icon: React.ElementType
  title: string
  subtitle: string
  items: string[]
  accent: string
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col">
      {/* Header */}
      <div className={`${accent} px-8 py-7`}>
        <div className="inline-flex p-2.5 rounded-xl bg-white/20 mb-4">
          <Icon size={22} className="text-white" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/70 text-sm">{subtitle}</p>
      </div>

      {/* List */}
      <ul className="px-8 py-7 space-y-3 flex-1">
        {items.map(item => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 size={16} className="text-brand-cyan-dark mt-0.5 flex-shrink-0" />
            <span className="text-brand-steel text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {/* Footer CTA */}
      <div className="px-8 pb-8">
        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan-dark hover:text-brand-navy transition-colors group"
        >
          Hablemos
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  )
}

export default function Audience() {
  return (
    <section id="audiencia" className="bg-brand-light-bg py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-cyan-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Audiencia
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-navy mb-4">
            ¿Para quién es COVI4IA?
          </h2>
          <p className="text-brand-steel text-lg max-w-xl mx-auto">
            Trabajamos con quienes toman decisiones operativas — en empresas y en aulas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AudienceCard
            icon={Building2}
            title="Empresas"
            subtitle="Operaciones · Logística · Supply Chain"
            items={empresas}
            accent="bg-brand-steel"
          />
          <AudienceCard
            icon={GraduationCap}
            title="Instituciones educativas"
            subtitle="Universidades · Programas ejecutivos"
            items={instituciones}
            accent="bg-brand-copper"
          />
        </div>
      </div>
    </section>
  )
}
