'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 15,  suffix: '+', label: 'Empresas acompañadas', desc: 'en Argentina y Latam'          },
  { value: 30,  suffix: '+', label: 'Agentes deployados',   desc: 'en producción'                 },
  { value: 3,   suffix: '',  label: 'Países de alcance',    desc: 'Argentina · Uruguay · Chile'   },
  { value: 100, suffix: '%', label: 'ROI medible',          desc: 'en cada proyecto'              },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref     = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps     = 40
          const duration  = 1500
          const increment = target / steps
          let current     = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(current))
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="bg-brand-navy-mid border-y border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl sm:text-5xl font-bold text-brand-cyan mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white font-semibold text-sm mb-0.5">{s.label}</p>
              <p className="text-brand-mid-gray text-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
