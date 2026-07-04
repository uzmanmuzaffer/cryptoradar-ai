import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMarketData } from "../services/api";
import SearchBar from "./SearchBar";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("marketcap");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCoins() {
      try {
        console.log("🚀 loadCoins başladı");

        const data = await getMarketData();

        console.log("📦 API'den gelen veri:", data);

        setCoins(data);
        setFilteredCoins(data);
      } catch (error) {
        console.error("❌ Coin verileri alınamadı:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCoins();
  }, []);

  useEffect(() => {
    let filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    switch (sortBy) {
      case "price":
        filtered.sort((a, b) => b.current_price - a.current_price);
        break;

      case "gainers":
        filtered.sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        break;

      case "losers":
        filtered.sort(
          (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h
        );
        break;

      default:
        filtered.sort((a, b) => b.market_cap - a.market_cap);
        break;
    }

    setFilteredCoins(filtered);
  }, [search, coins, sortBy]);

  if (loading) {
    return (
      <div className="text-white text-center py-10">
        Coin verileri yükleniyor...
      </div>
    );
  }

  if (filteredCoins.length === 0) {
    return (
      <div className="text-center text-red-400 py-10">
        Hiç coin bulunamadı veya API'den veri gelmedi.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        📈 Canlı Piyasalar
      </h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredCoins.map((coin) => (
          <Link
            key={coin.id}
            to={`/coin/${coin.id}`}
            className="bg-slate-900 rounded-xl p-5 border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300 block"
          >
            <div className="flex items-center gap-3">
              <img src={coin.image} alt={coin.name} className="w-10 h-10" />

              <div>
                <h3 className="font-bold">{coin.name}</h3>
                <p className="text-gray-400 uppercase">{coin.symbol}</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-2xl font-bold">
                ${coin.current_price.toLocaleString()}
              </p>

              <p
                className={`mt-2 font-semibold ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CoinList;