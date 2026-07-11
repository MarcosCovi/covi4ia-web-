"use client";

/**
 * COVICOIN ALPHA — Sección de inteligencia de mercado crypto para covi4ia.com
 * Integrada en app/page.tsx — actualizada automáticamente cada día a las 7:00 AM
 */

import { useState, useEffect, CSSProperties } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NewsItem {
  asset?: string;
  text?: string;
  title?: string;
}

interface MarketData {
  btc_price?: number;
  eth_price?: number;
  sol_price?: number;
  bnb_price?: number;
  tao_price?: number;
  ondo_price?: number;
  near_price?: number;
  fet_price?: number;
  gala_price?: number;
  total_market_cap?: string;
  btc_dominance?: string;
  fear_greed?: number;
  altcoin_season?: number;
  dxy?: number;
}

interface Signals {
  btc?: string;
  eth?: string;
  sol?: string;
  bnb?: string;
  tao?: string;
  ondo?: string;
  near?: string;
  fet?: string;
  gala?: string;
}

interface CovicoinData {
  date: string;
  time: string;
  market: MarketData;
  signals: Signals;
  top_news: NewsItem[];
  daily_recommendation: string;
  report_file?: string;
}

// ─── Config ──────────────────────────────────────────────────────────────────

const SIGNAL_CONFIG: Record<string, { color: string; bg: string; label: string }> = {
  COMPRAR:  { color: "#22c55e", bg: "rgba(34,197,94,.12)",   label: "COMPRAR"  },
  ACUMULAR: { color: "#f7931a", bg: "rgba(247,147,26,.12)",  label: "ACUMULAR" },
  ESPERAR:  { color: "#f59e0b", bg: "rgba(245,158,11,.12)",  label: "ESPERAR"  },
  REDUCIR:  { color: "#ef4444", bg: "rgba(239,68,68,.12)",   label: "REDUCIR"  },
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function SignalBadge({ signal }: { signal: string }) {
  const cfg = SIGNAL_CONFIG[signal] || SIGNAL_CONFIG["ESPERAR"];
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 4,
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: ".5px",
      color: cfg.color,
      background: cfg.bg,
      border: `1px solid ${cfg.color}44`,
    }}>
      {cfg.label}
    </span>
  );
}

function formatPrice(key: string, value?: number): string {
  if (!value) return "–";
  if (["gala", "fet", "ondo"].includes(key)) return `$${value.toFixed(4)}`;
  if (value < 10) return `$${value.toFixed(3)}`;
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

function FearGaugeBar({ value }: { value: number }) {
  const color = value < 25 ? "#ef4444" : value < 50 ? "#f59e0b" : value < 75 ? "#22c55e" : "#14f195";
  const label = value < 25 ? "Extreme Fear" : value < 50 ? "Fear" : value < 75 ? "Greed" : "Extreme Greed";
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 11, color: "#64748b" }}>Fear & Greed Index</span>
        <span style={{ fontSize: 13, fontWeight: 800, color }}>{value} — {label}</span>
      </div>
      <div style={{ background: "#1e2d45", borderRadius: 4, height: 6, overflow: "hidden" }}>
        <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 4, transition: "width .5s" }} />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CovicoinAlphaSection() {
  const [data, setData] = useState<CovicoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch("/covicoin-data-latest.json")
      .then((r) => {
        if (!r.ok) throw new Error("No se pudo cargar el informe");
        return r.json() as Promise<CovicoinData>;
      })
      .then(setData)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const sectionStyle: CSSProperties = {
    background: "linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)",
    borderTop: "1px solid #1e2d45",
    borderBottom: "1px solid #1e2d45",
    padding: "80px 0",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  };

  const container: CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  };

  if (loading) {
    return (
      <section style={sectionStyle}>
        <div style={container}>
          <div style={{ textAlign: "center", color: "#64748b", padding: "60px 0" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>⚡</div>
            <div style={{ fontSize: 14 }}>Cargando informe COVICOIN ALPHA...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section style={sectionStyle}>
        <div style={container}>
          <div style={{ textAlign: "center", color: "#64748b", padding: "60px 0" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>📊</div>
            <div style={{ fontSize: 14 }}>El informe de hoy se actualizará a las 7:00 AM.</div>
          </div>
        </div>
      </section>
    );
  }

  const mkt = data.market || {};
  const signals = data.signals || {};
  const assets = Object.keys(ASSET_META);

  const macroCard: CSSProperties = {
    background: "#111827",
    border: "1px solid #1e2d45",
    borderRadius: 10,
    padding: "14px 16px",
    textAlign: "center",
  };

  const th: CSSProperties = {
    fontSize: 10,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#64748b",
    padding: "8px 14px",
    textAlign: "left",
    borderBottom: "1px solid #1e2d45",
  };

  const td: CSSProperties = {
    padding: "12px 14px",
    borderBottom: "1px solid rgba(30,45,69,.4)",
    fontSize: 13,
    color: "#e2e8f0",
  };

  const ctaBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#f7931a",
    color: "#000",
    fontWeight: 800,
    fontSize: 13,
    padding: "10px 22px",
    borderRadius: 8,
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    letterSpacing: ".5px",
  };

  return (
    <section style={sectionStyle} id="covicoin-alpha">
      <div style={container}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#f7931a", textTransform: "uppercase", marginBottom: 8 }}>
              📊 Ecosistema Blockchain
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 900, color: "#e2e8f0", margin: 0, lineHeight: 1.2 }}>
              COVICOIN <span style={{ color: "#f7931a" }}>ALPHA</span>
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", marginTop: 8, marginBottom: 0 }}>
              Inteligencia de mercado crypto · Actualizado cada día a las 7:00 AM
            </p>
          </div>
          <div style={{ background: "rgba(247,147,26,.1)", border: "1px solid rgba(247,147,26,.25)", borderRadius: 8, padding: "10px 18px", textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#64748b", letterSpacing: 1, marginBottom: 4 }}>INFORME DEL DÍA</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#f7931a" }}>{data.date}</div>
            <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>07:00 AM · Buenos Aires</div>
          </div>
        </div>

        {/* Macro KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Market Cap",      value: mkt.total_market_cap ?? "–" },
            { label: "BTC Dominance",   value: mkt.btc_dominance ?? "–" },
            { label: "Fear & Greed",    value: mkt.fear_greed ?? "–" },
            { label: "Altcoin Season",  value: `${mkt.altcoin_season ?? "–"}/100` },
            { label: "DXY Dollar",      value: mkt.dxy ?? "–" },
          ].map((item) => (
            <div key={item.label} style={macroCard}>
              <div style={{ fontSize: 10, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{item.label}</div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "#e2e8f0" }}>{String(item.value)}</div>
            </div>
          ))}
        </div>

        {/* Fear & Greed Bar */}
        {mkt.fear_greed !== undefined && (
          <div style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: 10, padding: "16px 20px", marginBottom: 28 }}>
            <FearGaugeBar value={mkt.fear_greed} />
          </div>
        )}

        {/* Portfolio Table */}
        <div style={{ overflowX: "auto", marginBottom: 28 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={th}>ACTIVO</th>
                <th style={th}>PRECIO</th>
                <th style={th}>SEÑAL</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((key) => {
                const meta = ASSET_META[key];
                const priceKey = `${key}_price` as keyof MarketData;
                const price = mkt[priceKey] as number | undefined;
                const signal = signals[key as keyof Signals];
                return (
                  <tr key={key}>
                    <td style={td}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: "50%",
                          background: `${meta.color}22`,
                          color: meta.color,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 13, fontWeight: 800, flexShrink: 0,
                        }}>
                          {meta.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 13 }}>{meta.symbol}</div>
                          <div style={{ fontSize: 11, color: "#64748b" }}>{meta.name}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ ...td, fontWeight: 700 }}>{formatPrice(key, price)}</td>
                    <td style={td}>
                      {signal ? <SignalBadge signal={signal} /> : "–"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Daily Recommendation */}
        {data.daily_recommendation && (
          <div style={{
            background: "rgba(247,147,26,.06)",
            border: "1px solid rgba(247,147,26,.2)",
            borderLeft: "3px solid #f7931a",
            borderRadius: "0 10px 10px 0",
            padding: "16px 20px",
            marginBottom: 28,
          }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: "#f7931a", textTransform: "uppercase", marginBottom: 8 }}>
              🎯 Recomendación del día
            </div>
            <p style={{ fontSize: 13, color: "#e2e8f0", margin: 0, lineHeight: 1.7 }}>
              {data.daily_recommendation}
            </p>
          </div>
        )}

        {/* Top News */}
        {data.top_news && data.top_news.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>
              📰 Noticias destacadas del día
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {data.top_news.slice(0, expanded ? undefined : 3).map((news, i) => (
                <div key={i} style={{
                  background: "#111827",
                  border: "1px solid #1e2d45",
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontSize: 13,
                  color: "#e2e8f0",
                  lineHeight: 1.6,
                }}>
                  {news.asset && (
                    <span style={{ color: "#f7931a", fontWeight: 700 }}>[{news.asset.toUpperCase()}] </span>
                  )}
                  {news.text || news.title || ""}
                </div>
              ))}
            </div>
            {data.top_news.length > 3 && (
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  ...ctaBtn,
                  marginTop: 12,
                  background: "transparent",
                  color: "#f7931a",
                  border: "1px solid rgba(247,147,26,.3)",
                }}
              >
                {expanded ? "Ver menos ↑" : `Ver ${data.top_news.length - 3} noticias más ↓`}
              </button>
            )}
          </div>
        )}

        {/* Footer CTA */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, paddingTop: 24, borderTop: "1px solid #1e2d45" }}>
          <p style={{ fontSize: 12, color: "#64748b", margin: 0, maxWidth: 500 }}>
            ⚠️ Este análisis es solo informativo. No constituye asesoramiento financiero.
            Los activos digitales implican riesgo de pérdida total de capital.
          </p>
          {data.report_file && (
            <a
              href={`/reports/${data.report_file}`}
              style={ctaBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver informe completo →
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
