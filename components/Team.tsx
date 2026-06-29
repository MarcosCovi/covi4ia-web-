import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name:     'Covi Marcos',
    role:     'Fundador & Director de Consultoría',
    bio:      'Especialista en la intersección de inteligencia artificial generativa y operaciones de supply chain. Lidera proyectos de formación, automatización y diagnóstico en empresas argentinas y latinoamericanas, con foco en resultados medibles desde el día uno.',
    linkedin: 'https://www.linkedin.com/in/covi4ia-721985196',
    email:    'sales@covi4ia.com',
    initials: 'CM',
  },
]

export default function Team() {
  return (
    <section className="bg-brand-navy py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">Equipo</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Quién está detrás</h2>
          <p className="text-brand-mid-gray text-lg max-w-xl mx-auto">
            Expertise real en IA y supply chain. Sin intermediarios.
          </p>
        </div>

        <div className="flex justify-center">
          {team.map(m => (
            <div key={m.name}
              className="rounded-2xl border border-white/10 bg-brand-navy-mid p-10 max-w-md w-full text-center">
              <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-brand-cyan/10 border-2 border-brand-cyan/30 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-brand-cyan">{m.initials}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">{m.name}</h3>
              <p className="text-brand-cyan text-sm font-semibold tracking-wide mb-5">{m.role}</p>
              <p className="text-brand-mid-gray text-sm leading-relaxed mb-7">{m.bio}</p>
              <div className="flex justify-center gap-3">
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-brand-mid-gray hover:text-white hover:border-white/30 transition-all text-sm font-medium">
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a href={`mailto:${m.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-brand-mid-gray hover:text-white hover:border-white/30 transition-all text-sm font-medium">
                  <Mail size={15} /> Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
