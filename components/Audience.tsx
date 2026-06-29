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

function AudienceCard({ icon: Icon, title, subtitle, items, accent, accentText }: {
  icon: React.ElementType; title: string; subtitle: string
  items: string[]; accent: string; accentText: string
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-brand-navy overflow-hidden flex flex-col">
      <div className={`${accent} px-8 py-7`}>
        <div className="inline-flex p-2.5 rounded-xl bg-white/15 mb-4">
          <Icon size={22} className="text-white" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/60 text-sm">{subtitle}</p>
      </div>
      <ul className="px-8 py-7 space-y-3 flex-1">
        {items.map(item => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 size={16} className={`${accentText} mt-0.5 flex-shrink-0`} />
            <span className="text-brand-mid-gray text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <div className="px-8 pb-8">
        <a href="#contacto"
          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accentText} hover:text-white transition-colors group`}>
          Hablemos <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  )
}

export default function Audience() {
  return (
    <section id="audiencia" className="bg-brand-navy py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">Audiencia</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">¿Para quién es COVI4IA?</h2>
          <p className="text-brand-mid-gray text-lg max-w-xl mx-auto">
            Trabajamos con quienes toman decisiones operativas — en empresas y en aulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AudienceCard
            icon={Building2} title="Empresas"
            subtitle="Operaciones · Logística · Supply Chain"
            items={empresas}
            accent="bg-brand-steel"
            accentText="text-blue-400"
          />
          <AudienceCard
            icon={GraduationCap} title="Instituciones educativas"
            subtitle="Universidades · Programas ejecutivos"
            items={instituciones}
            accent="bg-brand-copper"
            accentText="text-brand-copper"
          />
        </div>
      </div>
    </section>
  )
}
