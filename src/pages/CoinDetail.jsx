import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCoinDetail } from "../services/api";
import TradingViewWidget from "../components/TradingViewWidget";

function CoinDetail() {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCoin() {
      const data = await getCoinDetail(id);
      setCoin(data);
      setLoading(false);
    }

    loadCoin();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Coin bulunamadı.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <Link
        to="/"
        className="inline-block mb-8 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700"
      >
        ← Ana Sayfa
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <img src={coin.image.large} alt={coin.name} className="w-16 h-16" />

        <div>
          <h1 className="text-5xl font-bold">
            {coin.name} ({coin.symbol.toUpperCase()})
          </h1>

          <p className="text-gray-400">
            #{coin.market_cap_rank}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">💲 Güncel Fiyat</h2>
          <p className="text-3xl font-bold mt-2">
            ${coin.market_data.current_price.usd.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">📈 24 Saat</h2>
          <p
            className={`text-3xl font-bold mt-2 ${
              coin.market_data.price_change_percentage_24h >= 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">💰 Market Cap</h2>
          <p className="text-2xl font-bold mt-2">
            ${coin.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">📊 24 Saat Hacim</h2>
          <p className="text-2xl font-bold mt-2">
            ${coin.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          📈 Canlı Grafik
        </h2>

        <TradingViewWidget symbol={coin.symbol} />
      </div>

      <div className="bg-slate-900 p-6 rounded-xl mt-8">
        <h2 className="text-2xl font-bold mb-4">
          📝 Hakkında
        </h2>

        <p className="text-gray-300">
          {coin.description.en
            ? coin.description.en.replace(/<[^>]+>/g, "").slice(0, 700) + "..."
            : "Açıklama bulunamadı."}
        </p>
      </div>
    </div>
  );
}

export default CoinDetail;