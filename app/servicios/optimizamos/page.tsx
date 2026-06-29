import Link from 'next/link'
import { ArrowLeft, BarChart3, CheckCircle2, Search, TrendingUp, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = { title: 'Optimizamos — COVI4IA', description: 'Consultoría en diagnóstico y optimización de Supply Chain con IA.' }

const entregables = [
  'Mapeo completo del proceso de supply chain actual',
  'Identificación de ineficiencias y cuellos de botella',
  'Detección de palancas de mejora con IA',
  'Informe ejecutivo con recomendaciones priorizadas',
  'Plan de implementación con hitos y KPIs',
  'Sesión de presentación con el equipo directivo',
]

const etapas = [
  { icon: Search,     title: 'Relevamiento',  desc: 'Entrevistas con el equipo, análisis de datos históricos y mapeo de procesos actuales.' },
  { icon: BarChart3,  title: 'Análisis',       desc: 'Procesamiento con IA para detectar patrones, anomalías y oportunidades ocultas.' },
  { icon: Target,     title: 'Diagnóstico',    desc: 'Informe ejecutivo con hallazgos y palancas de mejora ordenadas por impacto.' },
  { icon: TrendingUp, title: 'Plan de acción', desc: 'Hoja de ruta con iniciativas, responsables, plazos y métricas de éxito.' },
]

export default function OptimizamosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-navy min-h-screen pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy py-24 lg:py-32">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(196,123,56,0.10) 0%, transparent 60%)' }} />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-brand-mid-gray hover:text-white text-sm mb-10 transition-colors">
              <ArrowLeft size={16} /> Volver al inicio
            </Link>
            <div className="max-w-3xl">
              <div className="inline-flex p-4 rounded-2xl bg-brand-copper/10 mb-6">
                <BarChart3 size={32} className="text-brand-copper" />
              </div>
              <p className="text-brand-copper text-xs font-semibold tracking-[0.3em] uppercase mb-4">Servicio</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-2 leading-tight">OPTIMIZAMOS</h1>
              <p className="font-display text-2xl text-brand-mid-gray font-light italic mb-6">Resultados que importan.</p>
              <p className="text-brand-mid-gray text-lg leading-relaxed max-w-2xl">
                Analizamos en profundidad tus procesos de supply chain, identificamos palancas de mejora
                e implementamos soluciones con IA que generan impacto medible desde el día uno.
              </p>
            </div>
          </div>
        </section>

        {/* Etapas */}
        <section className="bg-brand-navy-mid py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-white mb-10">Cómo hacemos el diagnóstico</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {etapas.map((e, i) => {
                const Icon = e.icon
                return (
                  <div key={e.title} className="rounded-2xl border border-brand-copper/20 bg-brand-navy p-7">
                    <p className="font-display text-4xl font-bold text-brand-copper opacity-20 mb-3 leading-none">0{i+1}</p>
                    <div className="inline-flex p-3 rounded-xl bg-brand-copper/10 mb-4">
                      <Icon size={20} className="text-brand-copper" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">{e.title}</h3>
                    <p className="text-brand-mid-gray text-sm leading-relaxed">{e.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Entregables */}
        <section className="bg-brand-navy py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">Entregables</h2>
                <p className="text-brand-mid-gray mb-8">Lo que recibís al final de cada diagnóstico.</p>
                <ul className="space-y-3">
                  {entregables.map(e => (
                    <li key={e} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-brand-copper mt-0.5 flex-shrink-0" />
                      <span className="text-brand-mid-gray text-sm">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand-copper/20 bg-brand-navy-mid p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-white mb-3">¿Querés el diagnóstico?</h3>
                <p className="text-brand-mid-gray text-sm mb-6">Contanos en qué área de tu cadena querés detectar oportunidades.</p>
                <a href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-brand-copper text-white font-bold hover:opacity-90 transition-opacity">
                  Solicitar diagnóstico
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
