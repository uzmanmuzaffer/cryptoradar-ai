function SearchBar({ search, setSearch, sortBy, setSortBy }) {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Coin ara... (Bitcoin, Ethereum...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-500"
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-slate-900 border border-slate-700 rounded-xl px-4 text-white"
      >
        <option value="marketcap">Market Cap</option>
        <option value="price">Fiyat</option>
        <option value="gainers">En Çok Yükselen</option>
        <option value="losers">En Çok Düşen</option>
      </select>
    </div>
  );
}

export default SearchBar;