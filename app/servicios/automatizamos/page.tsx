import Link from 'next/link'
import { ArrowLeft, Bot, CheckCircle2, Zap, Shield, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = { title: 'Automatizamos — COVI4IA', description: 'Agentes de IA para automatizar procesos de Supply Chain.' }

const casos = [
  'Procesamiento automático de órdenes de compra',
  'Validación y conciliación de facturas con proveedores',
  'Alertas inteligentes de stock y reposición',
  'Seguimiento de embarques y notificaciones',
  'Generación de reportes operativos automatizados',
  'Chatbot interno de consultas de inventario',
]

const beneficios = [
  { icon: Zap,       title: 'Disponibilidad 24/7',    desc: 'Los agentes trabajan sin pausas, fines de semana ni feriados.'  },
  { icon: Shield,    title: 'Sin errores humanos',     desc: 'Validación automática que elimina errores de carga y tipeo.'    },
  { icon: RefreshCw, title: 'Integración nativa',      desc: 'Se conectan con tus sistemas actuales (ERP, Excel, email).'    },
]

export default function AutomatizamosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-navy min-h-screen pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy py-24 lg:py-32">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(96,165,250,0.10) 0%, transparent 60%)' }} />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-brand-mid-gray hover:text-white text-sm mb-10 transition-colors">
              <ArrowLeft size={16} /> Volver al inicio
            </Link>
            <div className="max-w-3xl">
              <div className="inline-flex p-4 rounded-2xl bg-blue-400/10 mb-6">
                <Bot size={32} className="text-blue-400" />
              </div>
              <p className="text-blue-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Servicio</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-2 leading-tight">AUTOMATIZAMOS</h1>
              <p className="font-display text-2xl text-brand-mid-gray font-light italic mb-6">Agentes que ejecutan.</p>
              <p className="text-brand-mid-gray text-lg leading-relaxed max-w-2xl">
                Empleados virtuales inteligentes que automatizan procesos clave: gestión de proveedores,
                control de inventario, logística y más. IA generativa que trabaja por vos, sin parar.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="bg-brand-navy-mid py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-white mb-10">Por qué un agente de IA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {beneficios.map(b => {
                const Icon = b.icon
                return (
                  <div key={b.title} className="rounded-2xl border border-blue-400/20 bg-brand-navy p-7">
                    <div className="inline-flex p-3 rounded-xl bg-blue-400/10 mb-4">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-brand-mid-gray text-sm leading-relaxed">{b.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Casos */}
        <section className="bg-brand-navy py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">Casos de aplicación</h2>
                <p className="text-brand-mid-gray mb-8">Procesos que automatizamos en empresas de supply chain.</p>
                <ul className="space-y-3">
                  {casos.map(c => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-mid-gray text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-400/20 bg-brand-navy-mid p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-white mb-3">¿Querés un agente?</h3>
                <p className="text-brand-mid-gray text-sm mb-6">Contanos qué proceso querés automatizar y te mostramos cómo funciona.</p>
                <a href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-blue-400 text-brand-navy font-bold hover:bg-blue-300 transition-colors">
                  Solicitar agente
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
