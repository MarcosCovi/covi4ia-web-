import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'COVI4IA — Inteligencia para operaciones reales.',
  description:
    'Consultoría en IA generativa aplicada a Supply Chain. Formación in-company, agentes de IA y diagnóstico estratégico para empresas latinoamericanas.',
  keywords: ['inteligencia artificial', 'supply chain', 'consultoría', 'IA generativa', 'Latinoamérica', 'COVI4IA'],
  openGraph: {
    title: 'COVI4IA — Inteligencia para operaciones reales.',
    description: 'Transformamos tu cadena de suministro con IA generativa.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
