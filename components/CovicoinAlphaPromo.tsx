"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface PromoData {
  date?: string;
  market?: { btc_price?: number; fear_greed?: number };
  signals?: { btc?: string };
}

const SIGNAL_COLOR: Record<string, string> = {
  COMPRAR:  "#22c55e",
  ACUMULAR: "#f7931a",
  ESPERAR:  "#f59e0b",
  REDUCIR:  "#ef4444",
};

const SECTIONS = [
  "📊 Macro", "💼 Portfolio", "📰 Fundamentos",
  "🌊 Mercado", "🚀 Potenciales", "💰 DeFi",
  "🌡️ Temporada", "🐋 Ballenas", "✅ Conclusiones",
];

export default function CovicoinAlphaPromo() {
  const [promo, setPromo] = useState<PromoData | null>(null);

  useEffect(() => {
    fetch("/covicoin-data-latest.json")
      .then((r) => r.ok ? r.json() : null)
      .then(setPromo)
      .catch(() => null);
  }, []);

  const btcPrice = promo?.market?.btc_price
    ? `$${promo.market.btc_price.toLocaleString("en-US")}`
    : null;
  const fg = promo?.market?.fear_greed;
  const btcSignal = promo?.signals?.btc;
  const signalColor = btcSignal ? (SIGNAL_COLOR[btcSignal] || "#f7931a") : "#f7931a";

  return (
    <section
      id="covicoin-alpha"
      style={{
        background: "linear-gradient(160deg, #060a14 0%, #0a0e1a 40%, #0d1525 100%)",
        borderTop: "1px solid rgba(0,212,255,0.08)",
        borderBottom: "1px solid rgba(0,212,255,0.08)",
        padding: "80px 24px",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "22%",
        transform: "translate(-50%,-50%)",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(247,147,26,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap", position: "relative" }}>

        {/* ── LEFT: Bitcoin visual ─────────────────────────────── */}
        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
          <div style={{ width: 300, height: 300, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

            {/* Network SVG */}
            <svg width="300" height="300" viewBox="0 0 300 300" style={{ position: "absolute", top: 0, left: 0 }}>
              {/* lines */}
              <line x1="150" y1="150" x2="28"  y2="58"  stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="272" y2="68"  stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="280" y2="210" stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="55"  y2="240" stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="150" y2="16"  stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="20"  y2="175" stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="290" y2="150" stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
              {/* secondary lines */}
              <line x1="28"  y1="58"  x2="272" y2="68"  stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
              <line x1="272" y1="68"  x2="280" y2="210" stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
              <line x1="280" y1="210" x2="55"  y2="240" stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
              <line x1="55"  y1="240" x2="28"  y2="58"  stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
              {/* nodes */}
              <circle cx="28"  cy="58"  r="4" fill="rgba(0,212,255,0.5)"/>
              <circle cx="272" cy="68"  r="4" fill="rgba(0,212,255,0.5)"/>
              <circle cx="280" cy="210" r="4" fill="rgba(0,212,255,0.5)"/>
              <circle cx="55"  cy="240" r="4" fill="rgba(0,212,255,0.5)"/>
              <circle cx="150" cy="16"  r="3" fill="rgba(0,212,255,0.4)"/>
              <circle cx="20"  cy="175" r="3" fill="rgba(0,212,255,0.4)"/>
              <circle cx="290" cy="150" r="3" fill="rgba(0,212,255,0.4)"/>
              {/* small secondary nodes */}
              <circle cx="90"  cy="100" r="2" fill="rgba(247,147,26,0.4)"/>
              <circle cx="220" cy="110" r="2" fill="rgba(247,147,26,0.4)"/>
              <circle cx="200" cy="230" r="2" fill="rgba(247,147,26,0.4)"/>
              <circle cx="80"  cy="200" r="2" fill="rgba(247,147,26,0.4)"/>
              {/* lines to small nodes */}
              <line x1="150" y1="150" x2="90"  y2="100" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="220" y2="110" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="200" y2="230" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
              <line x1="150" y1="150" x2="80"  y2="200" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
            </svg>

            {/* Outer glow ring */}
            <div style={{
              position: "absolute",
              width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(247,147,26,0.2) 0%, rgba(247,147,26,0.05) 55%, transparent 70%)",
            }} />

            {/* Coin */}
            <div style={{
              width: 148, height: 148, borderRadius: "50%",
              background: "linear-gradient(145deg, #fbb040 0%, #f7931a 30%, #c47b38 60%, #e8830a 80%, #f7931a 100%)",
              boxShadow: "0 0 50px rgba(247,147,26,0.45), 0 0 100px rgba(247,147,26,0.15), inset 0 2px 6px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", zIndex: 2,
              border: "4px solid rgba(255,200,100,0.25)",
            }}>
              {/* Inner ring */}
              <div style={{
                position: "absolute", width: 122, height: 122, borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.12)",
              }} />
              <span style={{ fontSize: 68, fontWeight: 900, color: "#fff", textShadow: "0 3px 10px rgba(0,0,0,0.4)", lineHeight: 1, position: "relative", zIndex: 1 }}>
                ₿
              </span>
            </div>

            {/* Live data badges */}
            {btcPrice && (
              <div style={{
                position: "absolute", top: 16, right: 8,
                background: "rgba(10,14,26,0.9)", border: "1px solid rgba(247,147,26,0.3)",
                borderRadius: 20, padding: "4px 10px",
                fontSize: 12, fontWeight: 700, color: "#f7931a",
              }}>
                BTC {btcPrice}
              </div>
            )}
            {btcSignal && (
              <div style={{
                position: "absolute", bottom: 24, right: 4,
                background: "rgba(10,14,26,0.9)", border: `1px solid ${signalColor}55`,
                borderRadius: 20, padding: "4px 10px",
                fontSize: 11, fontWeight: 800, color: signalColor,
              }}>
                {btcSignal}
              </div>
            )}
            {fg !== undefined && fg !== null && (
              <div style={{
                position: "absolute", bottom: 24, left: 4,
                background: "rgba(10,14,26,0.9)", border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: 20, padding: "4px 10px",
                fontSize: 11, fontWeight: 700, color: "#ef4444",
              }}>
                F&G {fg}
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Content ───────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 280 }}>

          {/* Live badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(247,147,26,0.08)",
            border: "1px solid rgba(247,147,26,0.25)",
            borderRadius: 4, padding: "4px 12px", marginBottom: 18,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
            <span style={{ color: "#f7931a", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
              LIVE · Actualizado 7:00 AM diario
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ fontSize: 48, fontWeight: 900, color: "#fff", margin: "0 0 6px", lineHeight: 1.05, letterSpacing: "-1.5px" }}>
            COVICOIN{" "}
            <span style={{ color: "#f7931a", WebkitTextStroke: "0px" }}>ALPHA</span>
          </h2>

          <p style={{ color: "#00D4FF", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", margin: "0 0 20px" }}>
            Inteligencia de Mercado Crypto
          </p>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.75, margin: "0 0 28px", maxWidth: 490 }}>
            Análisis técnico y on-chain de 9 activos digitales generado cada mañana con IA.
            Señales de trading, movimientos de ballenas, oportunidades DeFi y conclusiones
            tácticas — todo en un solo informe.
          </p>

          {/* Section pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 34 }}>
            {SECTIONS.map((s) => (
              <span key={s} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 20, padding: "5px 13px",
                color: "rgba(255,255,255,0.55)", fontSize: 12,
              }}>
                {s}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/covicoin"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #f7931a 0%, #e8830a 100%)",
              color: "#000", textDecoration: "none",
              padding: "15px 34px", borderRadius: 10,
              fontWeight: 800, fontSize: 15, letterSpacing: 0.3,
              boxShadow: "0 4px 24px rgba(247,147,26,0.35)",
            }}
          >
            Ver Informe Completo
            <span style={{ fontSize: 20, lineHeight: 1 }}>→</span>
          </Link>

          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, marginTop: 14 }}>
            ⚠️ Solo informativo. No constituye asesoramiento financiero.
          </p>
        </div>
      </div>
    </section>
  );
}
