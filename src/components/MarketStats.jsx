import { useEffect, useState } from "react";
import { getGlobalData } from "../services/api";

function MarketStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadStats() {
      const data = await getGlobalData();
      setStats(data);
    }

    loadStats();
  }, []);

  if (!stats) {
    return null;
  }

  const cards = [
    {
      title: "💰 Toplam Piyasa Değeri",
      value: `$${Math.round(
        stats.total_market_cap.usd / 1_000_000_000_000
      )}T`,
    },
    {
      title: "📊 24 Saatlik Hacim",
      value: `$${Math.round(
        stats.total_volume.usd / 1_000_000_000
      )}B`,
    },
    {
      title: "₿ Bitcoin Dominansı",
      value: `${stats.market_cap_percentage.btc.toFixed(2)}%`,
    },
    {
      title: "🪙 Aktif Coin",
      value: stats.active_cryptocurrencies.toLocaleString(),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <p className="text-gray-400 text-sm">{card.title}</p>

            <h3 className="text-3xl font-bold text-cyan-400 mt-3">
              {card.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketStats;