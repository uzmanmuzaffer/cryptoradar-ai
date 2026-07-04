import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MarketStats from "../components/MarketStats";
import CoinList from "../components/CoinList";
import WalletAnalyzer from "../components/WalletAnalyzer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      {/* Market genel istatistikler */}
      <MarketStats />

      {/* Canlı coin listesi */}
      <CoinList />

      {/* 👜 Wallet Analyzer */}
      <WalletAnalyzer />
    </div>
  );
}

export default Home;