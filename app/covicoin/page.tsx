import Navbar from "@/components/Navbar";
import CovicoinAlphaFullReport from "@/components/CovicoinAlphaFullReport";
import Footer from "@/components/Footer";

export const metadata = {
  title: "COVICOIN ALPHA — Informe Cripto Diario | COVI4IA",
  description:
    "Análisis técnico y on-chain de 9 activos digitales: BTC, ETH, SOL, BNB, TAO, ONDO, NEAR, FET, GALA. Señales, ballenas, DeFi y conclusiones generadas con IA cada mañana.",
};

export default function CovicoinPage() {
  return (
    <>
      <Navbar />
      <main>
        <CovicoinAlphaFullReport />
      </main>
      <Footer />
    </>
  );
}
