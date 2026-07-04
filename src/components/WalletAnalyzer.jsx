import { useState } from "react";
import { getWalletTokens, getWalletBalance } from "../services/walletApi";

function WalletAnalyzer() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState([]);
  const [balance, setBalance] = useState(null);

  async function analyzeWallet() {
    if (!address) return;

    setLoading(true);

    try {
      const [bal, tks] = await Promise.all([
        getWalletBalance(address),
        getWalletTokens(address),
      ]);

      setBalance(bal);
      setTokens(tks);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        👜 Wallet Analyzer
      </h2>

      <div className="flex gap-2">
        <input
          className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
          placeholder="0x wallet address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          onClick={analyzeWallet}
          className="bg-cyan-500 px-4 py-2 rounded text-black font-bold"
        >
          Analiz Et
        </button>
      </div>

      {loading && (
        <p className="text-white mt-4">Analiz ediliyor...</p>
      )}

      {balance && (
        <div className="mt-6 text-white">
          <h3 className="text-xl font-bold">💰 Balance</h3>
          <p>{(balance.balance / 1e18).toFixed(4)} ETH</p>
        </div>
      )}

      {tokens.length > 0 && (
        <div className="mt-6 grid md:grid-cols-2 gap-3">
          {tokens.slice(0, 10).map((t, i) => (
            <div
              key={i}
              className="bg-slate-900 p-3 rounded border border-slate-700 text-white"
            >
              <p className="font-bold">{t.name}</p>
              <p className="text-gray-400">
                {(Number(t.balance) / 10 ** t.decimals).toFixed(4)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WalletAnalyzer;