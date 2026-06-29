import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const links = {
  Servicios: [
    { label: 'Aprendemos',    href: '/servicios/aprendemos'    },
    { label: 'Automatizamos', href: '/servicios/automatizamos' },
    { label: 'Optimizamos',   href: '/servicios/optimizamos'   },
  ],
  Empresa: [
    { label: 'Por qué COVI4IA', href: '/#nosotros'  },
    { label: 'Para quién',      href: '/#audiencia' },
    { label: 'Contacto',        href: '/#contacto'  },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/lion.png" alt="COVI4IA" width={40} height={40}
                className="drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]" />
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-white">COVI</span>
                <span className="text-brand-cyan">4</span>
                <span className="text-white">IA</span>
              </span>
            </div>
            <p className="text-brand-mid-gray text-xs tracking-[0.2em] uppercase mb-1">
              Engineering the <span className="text-brand-cyan">Web4</span> Enterprise
            </p>
            <p className="text-brand-mid-gray text-sm italic mb-5">
              Inteligencia para operaciones reales.
            </p>
            <p className="text-brand-mid-gray text-sm leading-relaxed max-w-xs">
              Consultoría en IA generativa aplicada a Supply Chain.
              Formación, agentes virtuales y diagnóstico para empresas latinoamericanas.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.linkedin.com/in/covi4ia-721985196" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg border border-white/10 text-brand-mid-gray hover:text-white hover:border-white/25 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="mailto:sales@covi4ia.com" aria-label="Email"
                className="p-2 rounded-lg border border-white/10 text-brand-mid-gray hover:text-white hover:border-white/25 transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <p className="text-xs font-semibold text-white tracking-widest uppercase mb-4">{col}</p>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href}
                      className="text-sm text-brand-mid-gray hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-mid-gray text-xs">© {year} COVI4IA — Argentina · Latinoamérica</p>
          <p className="text-brand-mid-gray text-xs">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
