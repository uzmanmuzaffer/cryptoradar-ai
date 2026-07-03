function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <input
        type="text"
        placeholder="Coin ara... (Bitcoin, Ethereum...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-500"
      />
    </div>
  );
}

export default SearchBar;