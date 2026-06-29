import Link from 'next/link'
import { ArrowLeft, BookOpen, CheckCircle2, Users, Clock, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = { title: 'Aprendemos — COVI4IA', description: 'Formación in-company en IA aplicada a Supply Chain.' }

const includes = [
  'Diagnóstico previo de necesidades y nivel del equipo',
  'Contenidos 100 % personalizados al sector y la empresa',
  'Casos de uso reales de supply chain con IA generativa',
  'Materiales y recursos post-formación',
  'Seguimiento a 30 días para medir aplicabilidad',
  'Certificado de participación para cada integrante',
]

const modulos = [
  { num: '01', title: 'Fundamentos de IA generativa',  desc: 'Conceptos clave, herramientas actuales y cómo aplican a operaciones.' },
  { num: '02', title: 'IA en supply chain',             desc: 'Casos de uso en logística, compras, inventario y planificación.' },
  { num: '03', title: 'Herramientas prácticas',         desc: 'Taller hands-on con herramientas de IA aplicadas al negocio.' },
  { num: '04', title: 'Implementación y adopción',      desc: 'Cómo integrar IA en los procesos diarios del equipo.' },
]

export default function AprendemosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-navy min-h-screen pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy py-24 lg:py-32">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.10) 0%, transparent 60%)' }} />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-brand-mid-gray hover:text-white text-sm mb-10 transition-colors">
              <ArrowLeft size={16} /> Volver al inicio
            </Link>
            <div className="max-w-3xl">
              <div className="inline-flex p-4 rounded-2xl bg-brand-cyan/10 mb-6">
                <BookOpen size={32} className="text-brand-cyan" />
              </div>
              <p className="text-brand-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">Servicio</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-2 leading-tight">APRENDEMOS</h1>
              <p className="font-display text-2xl text-brand-mid-gray font-light italic mb-6">Contenidos que transforman.</p>
              <p className="text-brand-mid-gray text-lg leading-relaxed max-w-2xl">
                Programas educativos personalizados en IA aplicada a supply chain. Cada módulo incluye
                casos de uso reales del sector para garantizar aplicabilidad inmediata en tu operación.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: Users, label: 'In-company'     },
                  { icon: Clock, label: '2 a 6 semanas'  },
                  { icon: Award, label: 'Certificado'     },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/25 bg-brand-cyan/5 text-sm text-brand-cyan font-medium">
                    <b.icon size={14} /> {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Módulos */}
        <section className="bg-brand-navy-mid py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-white mb-10">Estructura del programa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {modulos.map(m => (
                <div key={m.num} className="rounded-2xl border border-white/8 bg-brand-navy p-6">
                  <p className="font-display text-4xl font-bold text-brand-cyan opacity-20 mb-3 leading-none">{m.num}</p>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-brand-mid-gray text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Includes */}
        <section className="bg-brand-navy py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">¿Qué incluye?</h2>
                <p className="text-brand-mid-gray mb-8">Cada programa es diseñado desde cero para tu empresa y tu equipo.</p>
                <ul className="space-y-3">
                  {includes.map(i => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-brand-mid-gray text-sm">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand-cyan/20 bg-brand-navy-mid p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-white mb-3">¿Querés este servicio?</h3>
                <p className="text-brand-mid-gray text-sm mb-6">Contanos el tamaño de tu equipo y qué procesos necesitás transformar.</p>
                <a href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-brand-cyan text-brand-navy font-bold hover:bg-brand-cyan-dark transition-colors">
                  Solicitar programa
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
