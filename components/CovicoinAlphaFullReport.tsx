"use client";

import { useState, useEffect, CSSProperties } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

interface MarketData {
  btc_price?: number; eth_price?: number; sol_price?: number;
  bnb_price?: number; tao_price?: number; ondo_price?: number;
  near_price?: number; fet_price?: number; gala_price?: number;
  total_market_cap?: string; btc_dominance?: string;
  fear_greed?: number; altcoin_season?: number; dxy?: number;
}

interface PortfolioItem {
  asset: string; signal: string; support: string; resistance: string;
  change_24h: number; analysis: string;
}

interface MarketZone {
  demand: string; supply: string; volume: string; narrative: string;
}

interface Opportunity {
  asset: string; narrative: string; reason: string; target: string;
}

interface DefiYield {
  protocol: string; asset: string; chain: string;
  apy: number; tvl: string; risk: string;
}

interface WhaleMove {
  asset: string; amount: string; type: string;
  from: string; to: string; impact: string; time: string; note: string;
}

interface NewsItem { asset?: string; text?: string; title?: string; }

interface CovicoinFullData {
  date: string; time: string;
  market: MarketData;
  signals: Record<string, string>;
  macro_narrative?: string;
  portfolio_analysis?: PortfolioItem[];
  top_news?: NewsItem[];
  market_zones?: { btc?: MarketZone; eth?: MarketZone };
  opportunities?: Opportunity[];
  defi_yields?: DefiYield[];
  altcoin_narrative?: string;
  whale_movements?: WhaleMove[];
  conclusions?: string[];
  daily_recommendation?: string;
}

// ─── Config ────────────────────────────────────────────────────────────────

const SIG: Record<string, { color: string; bg: string }> = {
  COMPRAR:  { color: "#22c55e", bg: "rgba(34,197,94,.12)"  },
  ACUMULAR: { color: "#f7931a", bg: "rgba(247,147,26,.12)" },
  ESPERAR:  { color: "#f59e0b", bg: "rgba(245,158,11,.12)" },
  REDUCIR:  { color: "#ef4444", bg: "rgba(239,68,68,.12)"  },
};

const ASSET_META: Record<string, { symbol: string; name: string; icon: string; color: string }> = {
  btc:  { symbol: "BTC",  name: "Bitcoin",   icon: "₿",  color: "#f7931a" },
  eth:  { symbol: "ETH",  name: "Ethereum",  icon: "Ξ",  color: "#627eea" },
  sol:  { symbol: "SOL",  name: "Solana",    icon: "◎",  color: "#14f195" },
  bnb:  { symbol: "BNB",  name: "BNB",       icon: "B",  color: "#f0b90b" },
  tao:  { symbol: "TAO",  name: "Bittensor", icon: "τ",  color: "#19b3fd" },
  ondo: { symbol: "ONDO", name: "Ondo",      icon: "◈",  color: "#4488ff" },
  near: { symbol: "NEAR", name: "NEAR",      icon: "N",  color: "#00ec97" },
  fet:  { symbol: "FET",  name: "Fetch.ai",  icon: "F",  color: "#1565c0" },
  gala: { symbol: "GALA", name: "Gala",      icon: "G",  color: "#02f7e1" },
};

const IMPACT_COLOR: Record<string, string> = {
  Bullish: "#22c55e", Neutral: "#f59e0b", Bearish: "#ef4444",
};

// ─── Sub-components ────────────────────────────────────────────────────────

function SignalBadge({ signal }: { signal: string }) {
  const cfg = SIG[signal] || SIG["ESPERAR"];
  return (
    <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 4, fontSize: 10, fontWeight: 800, letterSpacing: ".5px", color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.color}44` }}>
      {signal}
    </span>
  );
}

function SectionHeader({ emoji, title, subtitle }: { emoji: string; title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: 20, paddingBottom: 14, borderBottom: "1px solid #1e2d45" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 20 }}>{emoji}</span>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.3px" }}>{title}</h3>
      </div>
      {subtitle && <p style={{ margin: "4px 0 0 30px", fontSize: 12, color: "#64748b" }}>{subtitle}</p>}
    </div>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: CSSProperties }) {
  return (
    <div style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: 10, padding: "18px 20px", ...style }}>
      {children}
    </div>
  );
}

function formatPrice(key: string, value?: number): string {
  if (value === undefined || value === null) return "–";
  if (["gala", "fet", "ondo"].includes(key) && value < 1) return `$${value.toFixed(4)}`;
  if (value < 1) return `$${value.toFixed(4)}`;
  if (value < 10) return `$${value.toFixed(3)}`;
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

// ─── Main ──────────────────────────────────────────────────────────────────

export default function CovicoinAlphaFullReport() {
  const [data, setData] = useState<CovicoinFullData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/covicoin-data-latest.json")
      .then((r) => r.ok ? r.json() as Promise<CovicoinFullData> : null)
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const wrap: CSSProperties = {
    background: "linear-gradient(180deg,#060a14 0%,#0a0e1a 100%)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    color: "#e2e8f0",
  };

  const container: CSSProperties = { maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" };

  const th: CSSProperties = {
    fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#64748b",
    padding: "8px 14px", textAlign: "left", borderBottom: "1px solid #1e2d45",
  };
  const td: CSSProperties = {
    padding: "11px 14px", borderBottom: "1px solid rgba(30,45,69,.4)", fontSize: 13,
  };

  if (loading) {
    return (
      <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
        <div style={{ textAlign: "center", color: "#64748b" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>⚡</div>
          <div style={{ fontSize: 14 }}>Cargando informe COVICOIN ALPHA...</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={wrap}>
        {/* Hero — siempre visible aunque no haya datos */}
        <div style={{ background: "linear-gradient(180deg,#0a0e1a 0%,#060a14 100%)", borderBottom: "1px solid #1e2d45", padding: "104px 24px 56px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#f7931a", textTransform: "uppercase", marginBottom: 16 }}>
                  📊 Ecosistema Blockchain · COVI4IA
                </div>
                <h1 style={{ fontSize: 48, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.05, letterSpacing: "-2px" }}>
                  COVICOIN <span style={{ color: "#f7931a" }}>ALPHA</span>
                </h1>
                <p style={{ color: "#00D4FF", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", margin: 0 }}>
                  Inteligencia de Mercado Crypto · Informe Completo
                </p>
              </div>

              {/* Coin Visual */}
              <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
                <div style={{ width: 240, height: 240, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="240" height="240" viewBox="0 0 240 240" style={{ position: "absolute", top: 0, left: 0 }}>
                    <line x1="120" y1="120" x2="22"  y2="46"  stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="218" y2="54"  stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="224" y2="168" stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="44"  y2="192" stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="120" y2="13"  stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="16"  y2="140" stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="232" y2="120" stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
                    <line x1="22"  y1="46"  x2="218" y2="54"  stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                    <line x1="218" y1="54"  x2="224" y2="168" stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                    <line x1="224" y1="168" x2="44"  y2="192" stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                    <line x1="44"  y1="192" x2="22"  y2="46"  stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                    <circle cx="22"  cy="46"  r="4" fill="rgba(0,212,255,0.5)"/>
                    <circle cx="218" cy="54"  r="4" fill="rgba(0,212,255,0.5)"/>
                    <circle cx="224" cy="168" r="4" fill="rgba(0,212,255,0.5)"/>
                    <circle cx="44"  cy="192" r="4" fill="rgba(0,212,255,0.5)"/>
                    <circle cx="120" cy="13"  r="3" fill="rgba(0,212,255,0.4)"/>
                    <circle cx="16"  cy="140" r="3" fill="rgba(0,212,255,0.4)"/>
                    <circle cx="232" cy="120" r="3" fill="rgba(0,212,255,0.4)"/>
                    <circle cx="72"  cy="80"  r="2" fill="rgba(247,147,26,0.4)"/>
                    <circle cx="176" cy="88"  r="2" fill="rgba(247,147,26,0.4)"/>
                    <circle cx="160" cy="184" r="2" fill="rgba(247,147,26,0.4)"/>
                    <circle cx="64"  cy="160" r="2" fill="rgba(247,147,26,0.4)"/>
                    <line x1="120" y1="120" x2="72"  y2="80"  stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="176" y2="88"  stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="160" y2="184" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                    <line x1="120" y1="120" x2="64"  y2="160" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                  </svg>
                  <div style={{ position: "absolute", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(247,147,26,0.2) 0%, rgba(247,147,26,0.05) 55%, transparent 70%)" }} />
                  <div style={{
                    width: 120, height: 120, borderRadius: "50%",
                    background: "linear-gradient(145deg, #fbb040 0%, #f7931a 30%, #c47b38 60%, #e8830a 80%, #f7931a 100%)",
                    boxShadow: "0 0 50px rgba(247,147,26,0.45), 0 0 100px rgba(247,147,26,0.15), inset 0 2px 6px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative", zIndex: 2,
                    border: "4px solid rgba(255,200,100,0.25)",
                  }}>
                    <div style={{ position: "absolute", width: 98, height: 98, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.12)" }} />
                    <span style={{ fontSize: 55, fontWeight: 900, color: "#fff", textShadow: "0 3px 10px rgba(0,0,0,0.4)", lineHeight: 1, position: "relative", zIndex: 1 }}>₿</span>
                  </div>
                </div>
              </div>

              {/* Info box — pending state */}
              <div style={{ background: "rgba(247,147,26,.1)", border: "1px solid rgba(247,147,26,.25)", borderRadius: 12, padding: "20px 28px", textAlign: "right", minWidth: 180 }}>
                <div style={{ fontSize: 10, color: "#64748b", letterSpacing: 1, marginBottom: 6 }}>PRÓXIMA ACTUALIZACIÓN</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#64748b" }}>07:00 AM</div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 6 }}>Buenos Aires</div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "flex-end", marginTop: 12 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 8px #f59e0b" }} />
                  <span style={{ fontSize: 10, color: "#f59e0b", fontWeight: 700 }}>PENDIENTE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mensaje sin datos */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
          <div style={{ textAlign: "center", color: "#64748b" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>📊</div>
            <div style={{ fontSize: 14 }}>El informe se actualiza automáticamente a las 7:00 AM.</div>
          </div>
        </div>
      </div>
    );
  }

  const mkt = data.market || {};

  return (
    <div style={wrap}>
      {/* ── HERO HEADER ─────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(180deg,#0a0e1a 0%,#060a14 100%)", borderBottom: "1px solid #1e2d45", padding: "104px 24px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#f7931a", textTransform: "uppercase", marginBottom: 16 }}>
                📊 Ecosistema Blockchain · COVI4IA
              </div>
              <h1 style={{ fontSize: 48, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.05, letterSpacing: "-2px" }}>
                COVICOIN <span style={{ color: "#f7931a" }}>ALPHA</span>
              </h1>
              <p style={{ color: "#00D4FF", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", margin: 0 }}>
                Inteligencia de Mercado Crypto · Informe Completo
              </p>
            </div>

            {/* ── Bitcoin Coin Visual (mismo patrón que CovicoinAlphaPromo) ── */}
            <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
              <div style={{ width: 240, height: 240, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

                {/* Network SVG — sin defs */}
                <svg width="240" height="240" viewBox="0 0 240 240" style={{ position: "absolute", top: 0, left: 0 }}>
                  <line x1="120" y1="120" x2="22"  y2="46"  stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="218" y2="54"  stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="224" y2="168" stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="44"  y2="192" stroke="rgba(0,212,255,0.25)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="120" y2="13"  stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="16"  y2="140" stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="232" y2="120" stroke="rgba(0,212,255,0.18)" strokeWidth="1"/>
                  <line x1="22"  y1="46"  x2="218" y2="54"  stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                  <line x1="218" y1="54"  x2="224" y2="168" stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                  <line x1="224" y1="168" x2="44"  y2="192" stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                  <line x1="44"  y1="192" x2="22"  y2="46"  stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                  <circle cx="22"  cy="46"  r="4" fill="rgba(0,212,255,0.5)"/>
                  <circle cx="218" cy="54"  r="4" fill="rgba(0,212,255,0.5)"/>
                  <circle cx="224" cy="168" r="4" fill="rgba(0,212,255,0.5)"/>
                  <circle cx="44"  cy="192" r="4" fill="rgba(0,212,255,0.5)"/>
                  <circle cx="120" cy="13"  r="3" fill="rgba(0,212,255,0.4)"/>
                  <circle cx="16"  cy="140" r="3" fill="rgba(0,212,255,0.4)"/>
                  <circle cx="232" cy="120" r="3" fill="rgba(0,212,255,0.4)"/>
                  <circle cx="72"  cy="80"  r="2" fill="rgba(247,147,26,0.4)"/>
                  <circle cx="176" cy="88"  r="2" fill="rgba(247,147,26,0.4)"/>
                  <circle cx="160" cy="184" r="2" fill="rgba(247,147,26,0.4)"/>
                  <circle cx="64"  cy="160" r="2" fill="rgba(247,147,26,0.4)"/>
                  <line x1="120" y1="120" x2="72"  y2="80"  stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="176" y2="88"  stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="160" y2="184" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                  <line x1="120" y1="120" x2="64"  y2="160" stroke="rgba(247,147,26,0.15)" strokeWidth="1"/>
                </svg>

                {/* Outer glow ring */}
                <div style={{
                  position: "absolute",
                  width: 160, height: 160, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(247,147,26,0.2) 0%, rgba(247,147,26,0.05) 55%, transparent 70%)",
                }} />

                {/* Coin — mismo CSS que en Promo */}
                <div style={{
                  width: 120, height: 120, borderRadius: "50%",
                  background: "linear-gradient(145deg, #fbb040 0%, #f7931a 30%, #c47b38 60%, #e8830a 80%, #f7931a 100%)",
                  boxShadow: "0 0 50px rgba(247,147,26,0.45), 0 0 100px rgba(247,147,26,0.15), inset 0 2px 6px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", zIndex: 2,
                  border: "4px solid rgba(255,200,100,0.25)",
                }}>
                  <div style={{ position: "absolute", width: 98, height: 98, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.12)" }} />
                  <span style={{ fontSize: 55, fontWeight: 900, color: "#fff", textShadow: "0 3px 10px rgba(0,0,0,0.4)", lineHeight: 1, position: "relative", zIndex: 1 }}>
                    ₿
                  </span>
                </div>

              </div>
            </div>

            <div style={{ background: "rgba(247,147,26,.1)", border: "1px solid rgba(247,147,26,.25)", borderRadius: 12, padding: "20px 28px", textAlign: "right", minWidth: 180 }}>
              <div style={{ fontSize: 10, color: "#64748b", letterSpacing: 1, marginBottom: 6 }}>INFORME DEL DÍA</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#f7931a" }}>{data.date}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 6 }}>07:00 AM · Buenos Aires</div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "flex-end", marginTop: 12 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
                <span style={{ fontSize: 10, color: "#22c55e", fontWeight: 700 }}>GENERADO CON IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={container}>

        {/* ── KPIs ──────────────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 10, margin: "32px 0 28px" }}>
          {[
            { label: "Market Cap",     value: mkt.total_market_cap ?? "–" },
            { label: "BTC Dominance",  value: mkt.btc_dominance ?? "–" },
            { label: "Fear & Greed",   value: mkt.fear_greed ?? "–" },
            { label: "Altcoin Season", value: `${mkt.altcoin_season ?? "–"}/100` },
            { label: "DXY",            value: mkt.dxy ?? "–" },
          ].map((item) => (
            <div key={item.label} style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: 10, padding: "12px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 5 }}>{item.label}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#e2e8f0" }}>{String(item.value)}</div>
            </div>
          ))}
        </div>

        {/* Fear & Greed bar */}
        {mkt.fear_greed !== undefined && (() => {
          const v = mkt.fear_greed!;
          const color = v < 25 ? "#ef4444" : v < 50 ? "#f59e0b" : v < 75 ? "#22c55e" : "#14f195";
          const label = v < 25 ? "Extreme Fear" : v < 50 ? "Fear" : v < 75 ? "Greed" : "Extreme Greed";
          return (
            <Card style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: "#64748b" }}>Fear & Greed Index</span>
                <span style={{ fontSize: 13, fontWeight: 800, color }}>{v} — {label}</span>
              </div>
              <div style={{ background: "#1e2d45", borderRadius: 4, height: 6, overflow: "hidden" }}>
                <div style={{ width: `${v}%`, height: "100%", background: color, borderRadius: 4 }} />
              </div>
            </Card>
          );
        })()}

        {/* ── 1. MACRO ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 36 }}>
          <SectionHeader emoji="📊" title="MACRO" subtitle="Contexto macroeconómico del día" />
          <Card>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: "#cbd5e1" }}>
              {data.macro_narrative || "Análisis macro en preparación."}
            </p>
          </Card>
        </div>

        {/* ── 2. PORTFOLIO ──────────────────────────────────────── */}
        <div style={{ marginBottom: 36 }}>
          <SectionHeader emoji="💼" title="PORTFOLIO" subtitle="Análisis técnico de los 9 activos del portafolio" />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#0f172a" }}>
                  <th style={th}>ACTIVO</th>
                  <th style={th}>PRECIO</th>
                  <th style={{ ...th, textAlign: "center" }}>SEÑAL</th>
                  <th style={th}>24H</th>
                  <th style={th}>SOPORTE</th>
                  <th style={th}>RESISTENCIA</th>
                  <th style={th}>ANÁLISIS</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(ASSET_META).map((key) => {
                  const meta = ASSET_META[key];
                  const priceKey = `${key}_price` as keyof MarketData;
                  const price = mkt[priceKey] as number | undefined;
                  const analysis = data.portfolio_analysis?.find((p) => p.asset === key);
                  const signal = data.signals?.[key] || analysis?.signal || "ESPERAR";
                  const change = analysis?.change_24h;
                  const changeColor = change === undefined ? "#64748b" : change >= 0 ? "#22c55e" : "#ef4444";
                  return (
                    <tr key={key} style={{ transition: "background .15s" }}>
                      <td style={td}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${meta.color}20`, color: meta.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
                            {meta.icon}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: 13 }}>{meta.symbol}</div>
                            <div style={{ fontSize: 11, color: "#64748b" }}>{meta.name}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ ...td, fontWeight: 700 }}>{formatPrice(key, price)}</td>
                      <td style={{ ...td, textAlign: "center" }}><SignalBadge signal={signal} /></td>
                      <td style={{ ...td, color: changeColor, fontWeight: 700 }}>
                        {change !== undefined ? `${change >= 0 ? "+" : ""}${change}%` : "–"}
                      </td>
                      <td style={{ ...td, color: "#64748b", fontSize: 12 }}>{analysis?.support ?? "–"}</td>
                      <td style={{ ...td, color: "#64748b", fontSize: 12 }}>{analysis?.resistance ?? "–"}</td>
                      <td style={{ ...td, fontSize: 12, color: "#94a3b8", maxWidth: 280 }}>{analysis?.analysis ?? "–"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 3. FUNDAMENTOS (Noticias) ─────────────────────────── */}
        {data.top_news && data.top_news.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <SectionHeader emoji="📰" title="FUNDAMENTOS" subtitle="Noticias clave de las últimas 24 horas" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {data.top_news.map((news, i) => (
                <Card key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  {news.asset && (
                    <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 8, background: `${ASSET_META[news.asset.toLowerCase()]?.color ?? "#f7931a"}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: ASSET_META[news.asset.toLowerCase()]?.color ?? "#f7931a" }}>
                      {ASSET_META[news.asset.toLowerCase()]?.icon ?? news.asset.charAt(0)}
                    </div>
                  )}
                  <div>
                    {news.asset && <div style={{ fontSize: 11, fontWeight: 700, color: "#f7931a", marginBottom: 4 }}>{news.asset.toUpperCase()}</div>}
                    <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>{news.text || news.title}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── 4. MERCADO (Zonas) ────────────────────────────────── */}
        {data.market_zones && (
          <div style={{ marginBottom: 36 }}>
            <SectionHeader emoji="🌊" title="MERCADO" subtitle="Zonas de demanda y oferta · Liquidez y profundidad" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
              {Object.entries(data.market_zones).map(([asset, zone]) => {
                if (!zone) return null;
                const meta = ASSET_META[asset];
                return (
                  <Card key={asset}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${meta?.color ?? "#f7931a"}18`, color: meta?.color ?? "#f7931a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800 }}>
                        {meta?.icon ?? asset.toUpperCase().charAt(0)}
                      </div>
                      <div style={{ fontWeight: 800, fontSize: 15 }}>{meta?.symbol ?? asset.toUpperCase()}</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                      <div style={{ background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.2)", borderRadius: 8, padding: "10px 12px" }}>
                        <div style={{ fontSize: 10, color: "#22c55e", fontWeight: 700, marginBottom: 4 }}>DEMANDA</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#e2e8f0" }}>{zone.demand}</div>
                      </div>
                      <div style={{ background: "rgba(239,68,68,.08)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 8, padding: "10px 12px" }}>
                        <div style={{ fontSize: 10, color: "#ef4444", fontWeight: 700, marginBottom: 4 }}>OFERTA</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#e2e8f0" }}>{zone.supply}</div>
                      </div>
                    </div>
                    {zone.volume && <div style={{ fontSize: 11, color: "#64748b", marginBottom: 10 }}>Vol 24h: {zone.volume}</div>}
                    <p style={{ margin: 0, fontSize: 12, color: "#94a3b8", lineHeight: 1.65 }}>{zone.narrative}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 5. POTENCIALES ────────────────────────────────────── */}
        {data.opportunities && data.opportunities.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <SectionHeader emoji="🚀" title="POTENCIALES" subtitle="Activos con mejor momentum narrativo del día" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
              {data.opportunities.map((opp, i) => {
                const meta = ASSET_META[opp.asset.toLowerCase()];
                return (
                  <Card key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${meta?.color ?? "#f7931a"}18`, color: meta?.color ?? "#f7931a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800 }}>
                          {meta?.icon ?? opp.asset.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 15 }}>{opp.asset}</div>
                          <div style={{ fontSize: 11, color: "#00D4FF", fontWeight: 600 }}>{opp.narrative}</div>
                        </div>
                      </div>
                      {opp.target && (
                        <div style={{ background: "rgba(34,197,94,.1)", border: "1px solid rgba(34,197,94,.25)", borderRadius: 6, padding: "4px 10px" }}>
                          <div style={{ fontSize: 9, color: "#64748b", marginBottom: 1 }}>TARGET</div>
                          <div style={{ fontSize: 12, fontWeight: 800, color: "#22c55e" }}>{opp.target}</div>
                        </div>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: 12, color: "#94a3b8", lineHeight: 1.65 }}>{opp.reason}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 6. DEFI ───────────────────────────────────────────── */}
        {data.defi_yields && data.defi_yields.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <SectionHeader emoji="💰" title="DEFI" subtitle="Mejores rendimientos activos en protocolos DeFi" />
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#0f172a" }}>
                    <th style={th}>PROTOCOLO</th>
                    <th style={th}>ACTIVO</th>
                    <th style={th}>RED</th>
                    <th style={th}>APY</th>
                    <th style={th}>TVL</th>
                    <th style={th}>RIESGO</th>
                  </tr>
                </thead>
                <tbody>
                  {data.defi_yields.sort((a, b) => b.apy - a.apy).map((y, i) => {
                    const riskColor = y.risk === "Muy Bajo" ? "#22c55e" : y.risk === "Bajo" ? "#f7931a" : "#ef4444";
                    return (
                      <tr key={i}>
                        <td style={{ ...td, fontWeight: 700, color: "#e2e8f0" }}>{y.protocol}</td>
                        <td style={{ ...td, color: "#00D4FF", fontWeight: 600 }}>{y.asset}</td>
                        <td style={{ ...td, color: "#64748b" }}>{y.chain}</td>
                        <td style={{ ...td, fontWeight: 800, color: "#22c55e", fontSize: 15 }}>{y.apy}%</td>
                        <td style={{ ...td, color: "#94a3b8" }}>{y.tvl}</td>
                        <td style={td}>
                          <span style={{ color: riskColor, fontSize: 11, fontWeight: 700 }}>{y.risk}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── 7. TEMPORADA ──────────────────────────────────────── */}
        <div style={{ marginBottom: 36 }}>
          <SectionHeader emoji="🌡️" title="TEMPORADA" subtitle="Fear & Greed + Altcoin Season — contexto del ciclo" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 16 }}>
            {/* Fear & Greed */}
            {mkt.fear_greed !== undefined && (() => {
              const v = mkt.fear_greed!;
              const color = v < 25 ? "#ef4444" : v < 50 ? "#f59e0b" : v < 75 ? "#22c55e" : "#14f195";
              const label = v < 25 ? "Extreme Fear" : v < 50 ? "Fear" : v < 75 ? "Greed" : "Extreme Greed";
              return (
                <Card>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>FEAR & GREED INDEX</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color, marginBottom: 4 }}>{v}</div>
                  <div style={{ fontSize: 12, color, fontWeight: 700, marginBottom: 10 }}>{label}</div>
                  <div style={{ background: "#1e2d45", borderRadius: 4, height: 6 }}>
                    <div style={{ width: `${v}%`, height: "100%", background: color, borderRadius: 4 }} />
                  </div>
                </Card>
              );
            })()}
            {/* Altcoin Season */}
            {mkt.altcoin_season !== undefined && (() => {
              const v = mkt.altcoin_season!;
              const label = v > 75 ? "Altcoin Season 🔥" : v > 50 ? "Transición" : "Bitcoin Season";
              const color = v > 75 ? "#f7931a" : v > 50 ? "#f59e0b" : "#627eea";
              return (
                <Card>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>ALTCOIN SEASON INDEX</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color, marginBottom: 4 }}>{v}<span style={{ fontSize: 18 }}>/100</span></div>
                  <div style={{ fontSize: 12, color, fontWeight: 700, marginBottom: 10 }}>{label}</div>
                  <div style={{ background: "#1e2d45", borderRadius: 4, height: 6 }}>
                    <div style={{ width: `${v}%`, height: "100%", background: color, borderRadius: 4 }} />
                  </div>
                </Card>
              );
            })()}
          </div>
          {data.altcoin_narrative && (
            <Card>
              <p style={{ margin: 0, fontSize: 13, color: "#cbd5e1", lineHeight: 1.75 }}>{data.altcoin_narrative}</p>
            </Card>
          )}
        </div>

        {/* ── 8. BALLENAS ───────────────────────────────────────── */}
        {data.whale_movements && data.whale_movements.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <SectionHeader emoji="🐋" title="BALLENAS" subtitle="Movimientos on-chain significativos · Últimas 24h" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {data.whale_movements.map((w, i) => {
                const impactColor = IMPACT_COLOR[w.impact] ?? "#f59e0b";
                const meta = ASSET_META[w.asset.toLowerCase()];
                return (
                  <Card key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 8, background: `${meta?.color ?? "#f7931a"}18`, color: meta?.color ?? "#f7931a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800 }}>
                      {meta?.icon ?? w.asset.charAt(0)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                          <span style={{ fontWeight: 800, fontSize: 14 }}>{w.asset}</span>
                          <span style={{ fontWeight: 700, fontSize: 15, color: "#e2e8f0" }}>{w.amount}</span>
                          <span style={{ fontSize: 11, color: "#64748b" }}>{w.type}</span>
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <span style={{ fontSize: 11, color: impactColor, fontWeight: 700, background: `${impactColor}18`, padding: "2px 8px", borderRadius: 4 }}>{w.impact}</span>
                          <span style={{ fontSize: 11, color: "#64748b" }}>{w.time}</span>
                        </div>
                      </div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>
                        {w.from} → {w.to}
                      </div>
                      {w.note && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{w.note}</div>}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 9. CONCLUSIONES ───────────────────────────────────── */}
        {data.conclusions && data.conclusions.length > 0 && (
          <div style={{ marginBottom: 40 }}>
            <SectionHeader emoji="✅" title="CONCLUSIONES" subtitle="Recomendaciones tácticas para hoy" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {data.conclusions.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(247,147,26,.04)", border: "1px solid rgba(247,147,26,.15)", borderLeft: "3px solid #f7931a", borderRadius: "0 10px 10px 0", padding: "14px 18px" }}>
                  <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "#f7931a", color: "#000", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                  <p style={{ margin: 0, fontSize: 13, color: "#e2e8f0", lineHeight: 1.65 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Recomendación diaria ──────────────────────────────── */}
        {data.daily_recommendation && (
          <div style={{ background: "rgba(0,212,255,.05)", border: "1px solid rgba(0,212,255,.2)", borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#00D4FF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>🎯 RESUMEN DEL DÍA</div>
            <p style={{ margin: 0, fontSize: 14, color: "#e2e8f0", lineHeight: 1.75 }}>{data.daily_recommendation}</p>
          </div>
        )}

        {/* Disclaimer */}
        <div style={{ borderTop: "1px solid #1e2d45", paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#475569", margin: 0, lineHeight: 1.6 }}>
            ⚠️ Este análisis es generado automáticamente con inteligencia artificial y tiene carácter exclusivamente informativo.<br />
            No constituye asesoramiento financiero. Los activos digitales conllevan riesgo de pérdida total del capital invertido.
          </p>
        </div>

      </div>
    </div>
  );
}