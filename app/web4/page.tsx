'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Web4Page() {
  const [format, setFormat] = useState<'16x9' | '9x16'>('16x9')

  return (
    <main style={{ minHeight: '100vh', background: '#060a14', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* ── Header ── */}
      <div style={{
        paddingTop: 96,
        paddingBottom: 32,
        textAlign: 'center',
        borderBottom: '1px solid #1e2d45',
        background: 'linear-gradient(180deg, #0a0e1a 0%, #060a14 100%)',
      }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: -1, margin: '0 0 10px' }}>
          WEB<span style={{ color: '#00D4FF', textShadow: '0 0 40px rgba(0,212,255,0.6)' }}>4</span>
        </h1>
        <p style={{ fontSize: 15, color: '#475569', margin: 0, letterSpacing: 2 }}>
          El Nuevo Paradigma
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 28 }}>
          {(['16x9', '9x16'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              style={{
                padding: '8px 22px',
                borderRadius: 8,
                border: format === f ? '1px solid #00D4FF' : '1px solid #1e2d45',
                background: format === f ? 'rgba(0,212,255,0.08)' : 'transparent',
                color: format === f ? '#00D4FF' : '#475569',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                cursor: 'pointer',
                transition: 'all .2s',
              }}
            >
              {f === '16x9' ? '▬ Web / LinkedIn' : '▮ Instagram / Reels'}
            </button>
          ))}
        </div>
      </div>

      {/* ── Video container ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        {format === '16x9' ? (
          <div style={{ width: '100%', maxWidth: 1100 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid #1e2d45', boxShadow: '0 0 80px rgba(0,212,255,0.07)' }}>
              <iframe
                src="/web4-video-16x9.html"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title="Web4 Presentación 16:9"
              />
            </div>
          </div>
        ) : (
          <div style={{ width: '100%', maxWidth: 420 }}>
            <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid #1e2d45', boxShadow: '0 0 80px rgba(0,212,255,0.07)' }}>
              <iframe
                src="/web4-video-9x16.html"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title="Web4 Presentación 9:16"
              />
            </div>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT SECTION
      ══════════════════════════════════════════════ */}
      <div style={{ borderTop: '1px solid #1e2d45', background: '#060a14' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '80px 24px' }}>

          {/* ── Intro ── */}
          <section style={{ marginBottom: 72 }}>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase',
              color: '#00D4FF', marginBottom: 20,
            }}>
              El punto de inflexión
            </p>
            <h2 style={{
              fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1.2,
              margin: '0 0 28px', letterSpacing: -0.5,
            }}>
              La historia no avanza en línea recta.<br />
              <span style={{ color: '#00D4FF' }}>Avanza por saltos.</span>
            </h2>
            <p style={{ fontSize: 17, color: '#94a3b8', lineHeight: 1.8, margin: '0 0 20px' }}>
              La imprenta tardó décadas en transformar Europa. Internet tardó años en redefinir los negocios.
              La inteligencia artificial tardó meses en cambiar la forma en que el mundo trabaja.
              El intervalo entre cada revolución tecnológica se acorta de manera constante, y esa aceleración
              no es una metáfora: es un dato empírico que se refleja en los mercados, en los patrones de adopción
              y en las decisiones estratégicas de los gobiernos y las organizaciones más avanzadas del planeta.
            </p>
            <p style={{ fontSize: 17, color: '#cbd5e1', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
              Estamos en uno de esos puntos de inflexión. Se llama <strong style={{ color: '#fff' }}>Web4</strong>.
              Y no viene a mejorar lo que existe: viene a reemplazar la lógica con la que construimos
              el mundo digital durante los últimos treinta años.
            </p>
          </section>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1e2d45, transparent)', marginBottom: 72 }} />

          {/* ── Evolución tecnológica ── */}
          <section style={{ marginBottom: 72 }}>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase',
              color: '#a78bfa', marginBottom: 20,
            }}>
              La evolución
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 24px', letterSpacing: -0.5 }}>
              De la piedra al algoritmo: cada era redujo a la mitad el tiempo del siguiente cambio
            </h2>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, margin: '0 0 40px' }}>
              Para entender hacia dónde vamos, es necesario mirar hacia atrás. De la Edad de Piedra a la imprenta,
              de la revolución industrial al automóvil, del transistor a internet —cada salto tecnológico acortó
              el plazo del siguiente. Lo que antes tomaba siglos, luego tomó décadas, después años, hoy ocurre
              en meses. La Web4 no es solo el próximo capítulo de la red. Es la convergencia de todas las
              tecnologías que hemos construido hasta aquí, alcanzando masa crítica al mismo tiempo.
            </p>

            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { era: 'Edad de Piedra', year: '≈ 3 M a.C.', desc: 'El primer salto: de la naturaleza a la herramienta. La habilidad de transformar el entorno define a la especie.', last: false },
                { era: 'Imprenta', year: '1440', desc: 'La información escala por primera vez. El conocimiento deja de ser privilegio de unos pocos y se vuelve transferible a escala masiva.', last: false },
                { era: 'Revolución Industrial', year: '1760', desc: 'La energía se industrializa. El trabajo manual se multiplica con máquinas. Nace la economía moderna.', last: false },
                { era: 'Electricidad y Telecomunicaciones', year: '1870', desc: 'La distancia colapsa. El teléfono, la radio y la electricidad conectan el mundo en tiempo real por primera vez.', last: false },
                { era: 'Era Digital e Internet', year: '1969 – 2000', desc: 'La información se digitaliza. Internet conecta a millones de personas. El mundo adopta la lógica de la red.', last: false },
                { era: 'IA + Blockchain + Web4', year: '2020 – hoy', desc: 'La convergencia definitiva. La inteligencia artificial razona, blockchain verifica sin intermediarios, y el mundo físico se integra con el digital.', last: true },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 24, position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 20 }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: '50%', marginTop: 4, flexShrink: 0,
                      background: item.last ? '#00D4FF' : '#1e2d45',
                      border: item.last ? '2px solid #00D4FF' : '2px solid #2d3f5a',
                      boxShadow: item.last ? '0 0 12px rgba(0,212,255,0.5)' : 'none',
                    }} />
                    {!item.last && (
                      <div style={{ width: 1, flex: 1, background: '#1e2d45', marginTop: 4 }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: !item.last ? 32 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: item.last ? '#00D4FF' : '#fff',
                      }}>{item.era}</span>
                      <span style={{ fontSize: 11, color: '#475569', letterSpacing: 1 }}>{item.year}</span>
                    </div>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1e2d45, transparent)', marginBottom: 72 }} />

          {/* ── Web1 a Web4 ── */}
          <section style={{ marginBottom: 72 }}>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase',
              color: '#f7931a', marginBottom: 20,
            }}>
              La evolución de la web
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: -0.5 }}>
              De consumir información a vivir dentro de ella
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, margin: '0 0 36px' }}>
              Cada versión de la web redefinió quién tiene el poder sobre los datos, la identidad y el valor digital.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              {[
                { version: 'Web 1', period: '1993 – 2004', color: '#475569', isLast: false, title: 'Solo lectura', desc: 'Páginas estáticas e información centralizada. El usuario consumía sin participar ni crear.' },
                { version: 'Web 2', period: '2004 – 2016', color: '#a78bfa', isLast: false, title: 'Lectura y escritura', desc: 'Redes sociales y plataformas colaborativas. El usuario crea, pero los datos pertenecen a las plataformas.' },
                { version: 'Web 3', period: '2016 – 2024', color: '#f7931a', isLast: false, title: 'Propiedad digital', desc: 'Blockchain, contratos inteligentes y criptomonedas. El usuario recupera el control de sus activos e identidad.' },
                { version: 'Web 4', period: '2025 →', color: '#00D4FF', isLast: true, title: 'La web consciente', desc: 'Convergencia de IA, blockchain, biotecnología e interfaces físicas. Ya no navegamos la web: vivimos dentro de ella.' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#0a0e1a',
                  border: `1px solid ${item.isLast ? 'rgba(0,212,255,0.3)' : '#1e2d45'}`,
                  borderRadius: 12,
                  padding: '24px 20px',
                  boxShadow: item.isLast ? '0 0 24px rgba(0,212,255,0.05)' : 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <span style={{
                      fontSize: 18, fontWeight: 900, color: item.color,
                      textShadow: item.isLast ? '0 0 20px rgba(0,212,255,0.4)' : 'none',
                    }}>{item.version}</span>
                    <span style={{ fontSize: 10, color: '#334155', letterSpacing: 1 }}>{item.period}</span>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1e2d45, transparent)', marginBottom: 72 }} />

          {/* ── Qué nos trae la Web4 ── */}
          <section style={{ marginBottom: 72 }}>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase',
              color: '#00D4FF', marginBottom: 20,
            }}>
              ¿Qué nos trae la Web4?
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: -0.5 }}>
              No son prototipos. Son capacidades en despliegue.
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, margin: '0 0 36px' }}>
              La Web4 no es ciencia ficción. Es la combinación de tecnologías maduras operando de forma
              integrada por primera vez. Estos son algunos ejemplos concretos de lo que ya está tomando forma:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '🚗', title: 'Pagos autónomos en movilidad', desc: 'Tu vehículo detecta un estacionamiento disponible, negocia el precio mediante un contrato inteligente y completa el pago automáticamente —todo antes de que llegues al lugar.' },
                { icon: '🩺', title: 'Medicina preventiva en tiempo real', desc: 'Dispositivos wearables médicos monitorean tus biomarcadores de forma continua, anticipan episodios de salud antes de que se manifiesten y coordinan con tu médico sin intervención manual.' },
                { icon: '🏠', title: 'Hipotecas sin escribanos ni demoras', desc: 'Un contrato inteligente ejecuta simultáneamente la transferencia de fondos al vendedor y el registro de propiedad al comprador, eliminando intermediarios, demoras y costos operativos.' },
                { icon: '🤖', title: 'Asistentes de IA contextuales', desc: 'Un agente de inteligencia artificial aprende tus hábitos, objetivos y preferencias, y actúa como un colaborador que entiende tu contexto mejor que cualquier persona nueva en tu equipo.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  background: '#0a0e1a', border: '1px solid #1e2d45',
                  borderRadius: 12, padding: '20px 24px',
                }}>
                  <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{item.title}</p>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1e2d45, transparent)', marginBottom: 72 }} />

          {/* ── Impacto en la vida cotidiana ── */}
          <section style={{ marginBottom: 72 }}>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase',
              color: '#a78bfa', marginBottom: 20,
            }}>
              Impacto en la vida cotidiana
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: -0.5 }}>
              Cuatro dimensiones transformadas de raíz
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, margin: '0 0 36px' }}>
              La Web4 no impacta solo en tecnología. Reescribe las reglas del dinero, el trabajo, la salud y la forma en que nos relacionamos.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20 }}>
              {[
                { color: '#f7931a', rgbVals: '247,147,26', icon: '₿', title: 'Finanzas', subtitle: 'Soberanía económica real', body: 'Los sistemas de la Web4 no requieren bancos ni intermediarios para funcionar. Las finanzas descentralizadas (DeFi) permiten préstamos, inversiones y pagos globales en segundos. Los contratos inteligentes automatizan procesos que hoy llevan días o semanas. La soberanía económica —la capacidad de gestionar tu propio dinero sin depender de instituciones— deja de ser un ideal y se convierte en infraestructura disponible.' },
                { color: '#a78bfa', rgbVals: '167,139,250', icon: '⚙️', title: 'Trabajo', subtitle: 'Contratos que se ejecutan solos', body: 'Los contratos laborales inteligentes liberan pagos automáticos al verificarse los entregables, sin procesos de aprobación manuales. La inteligencia artificial integrada en flujos de trabajo no reemplaza a las personas: multiplica su capacidad de análisis, decisión y ejecución. Emergen roles sin precedente: arquitectos de organizaciones autónomas descentralizadas, gestores de activos digitales, ingenieros de protocolos de gobernanza.' },
                { color: '#00D4FF', rgbVals: '0,212,255', icon: '🪷', title: 'Salud', subtitle: 'De tratar enfermedades a prevenirlas', body: 'La medicina personalizada basada en datos biométricos continuos permite intervenir antes de que los síntomas aparezcan. Los dispositivos IoT integrados monitorean indicadores que hoy solo se miden en laboratorio. El historial médico del paciente, almacenado en blockchain, lo acompaña a cualquier parte del mundo, disponible para el profesional que lo necesite —con consentimiento explícito y sin intermediarios institucionales.' },
                { color: '#34d399', rgbVals: '52,211,153', icon: '🌐', title: 'Relaciones sociales', subtitle: 'Identidad y comunidad sin fronteras', body: 'Los espacios de realidad aumentada y virtual permiten colaborar, crear y conectar más allá de la distancia física. Las comunidades digitales adquieren gobernanza real, propiedad compartida y mecanismos de decisión colectiva verificables. La identidad digital soberana —controlada por el usuario, no por corporaciones— define cómo cada persona se presenta ante el mundo y qué comparte con quién.' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#0a0e1a',
                  border: `1px solid rgba(${item.rgbVals},0.2)`,
                  borderRadius: 16, padding: '28px 24px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{
                      fontSize: 20, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `rgba(${item.rgbVals},0.1)`,
                      borderRadius: 10,
                    }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 800, color: item.color, margin: 0 }}>{item.title}</p>
                      <p style={{ fontSize: 11, color: '#475569', margin: 0, letterSpacing: 0.5 }}>{item.subtitle}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1e2d45, transparent)', marginBottom: 72 }} />

          {/* ── Por qué entender Web3 primero ── */}
          <section style={{ marginBottom: 72 }}>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase',
              color: '#f7931a', marginBottom: 20,
            }}>
              El punto de partida
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 24px', letterSpacing: -0.5 }}>
              Para llegar a la Web4, hay que entender la Web3
            </h2>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, margin: '0 0 20px' }}>
              La Web4 no emerge del vacío. Es la maduración de la infraestructura que la Web3 construyó durante la última década:
              protocolos descentralizados, contratos inteligentes, redes de consenso distribuido y activos digitales verificables.
              Quien intente adoptar la Web4 sin comprender esos fundamentos estará construyendo sobre bases frágiles —y repetirá
              los errores de quienes levantaron negocios digitales en los años noventa sin entender cómo funcionaba internet.
            </p>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, margin: '0 0 28px' }}>
              Hoy, muchas organizaciones están tratando de entender la Web3 mientras la Web4 ya está siendo construida.
              El costo de ese retraso no es solo tecnológico: es estratégico, competitivo y, en algunos sectores, regulatorio.
            </p>
            <div style={{
              background: 'rgba(247,147,26,0.05)', border: '1px solid rgba(247,147,26,0.2)',
              borderRadius: 12, padding: '24px 28px',
            }}>
              <p style={{ fontSize: 17, fontWeight: 600, color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
                <span style={{ color: '#f7931a' }}>La era exponencial no es una teoría.</span>{' '}
                Es un hecho observable en los datos, en los mercados y en las decisiones de los gobiernos
                y corporaciones más avanzadas del mundo. La pregunta ya no es si esto va a ocurrir.
                La pregunta es cuándo cada organización va a decidir entenderlo.
              </p>
            </div>
          </section>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1e2d45, transparent)', marginBottom: 72 }} />

          {/* ── Reflexión final (original) ── */}
          <section>
            <p style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase',
              color: '#00D4FF', marginBottom: 20,
            }}>
              Reflexión
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 28px', letterSpacing: -0.5 }}>
              Vivir en el umbral tiene un costo —y una ventaja
            </h2>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.85, margin: '0 0 22px' }}>
              Hay algo peculiar en estar parado en el umbral de una nueva era. La mayoría de las personas no reconoce
              los momentos históricos mientras los está atravesando: los identifica décadas después, en retrospectiva,
              con una mezcla de asombro y nostalgia. Pero existe una minoría que sí los reconoce en tiempo real.
              Y esa diferencia —no de inteligencia, sino de atención y disposición a entender— es la que separa
              a quienes construyen el futuro de quienes lo reciben como sorpresa.
            </p>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.85, margin: '0 0 22px' }}>
              La Web4 no va a pedir permiso para instalarse. Ya está en marcha: en los contratos inteligentes que ejecutan
              operaciones financieras sin intervención humana, en los modelos de inteligencia artificial que razonan sobre
              contextos complejos, en los sensores que convierten el cuerpo y el entorno en flujos de datos continuos,
              en las redes descentralizadas que procesan valor sin necesidad de instituciones que lo garanticen.
              Lo que cambia no es si esto ocurrirá. Lo que cambia es cuándo cada organización —y cada persona—
              decide entenderlo y actuar sobre esa comprensión.
            </p>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.85, margin: '0 0 40px' }}>
              La historia recompensa a quienes llegaron preparados, no a quienes llegaron primero.
              El primer paso no es adoptar tecnología: es comprender la lógica que la hace posible.
              Ese es el trabajo que vale la pena hacer ahora.
            </p>

            {/* COVI4IA CTA */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(167,139,250,0.06) 100%)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 16, padding: '32px 36px',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#00D4FF',
                  boxShadow: '0 0 8px rgba(0,212,255,0.6)',
                }} />
                <span style={{ fontSize: 11, letterSpacing: 3, color: '#00D4FF', textTransform: 'uppercase', fontWeight: 700 }}>
                  COVI4IA
                </span>
              </div>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.4 }}>
                Existimos exactamente en ese punto de intersección: entre el conocimiento técnico y su aplicación operativa real.
              </p>
              <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.7 }}>
                No para predecir tendencias desde la distancia, sino para ayudar a empresas y equipos a convertir
                la comprensión de esta convergencia en ventaja competitiva concreta.
                Porque el futuro no recompensa a los que lo anticipan con asombro.
                Recompensa a los que lo construyen con precisión.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ textAlign: 'center', padding: '24px 24px 48px', color: '#1e2d45', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', borderTop: '1px solid #0d1623' }}>
        COVI4IA · Engineering the Web4 Enterprise · www.covi4ia.com
      </div>
    </main>
  )
}
