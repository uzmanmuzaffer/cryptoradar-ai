function CoinCard({ coin }) {
  return (
    <div className="coin-card">
      <img src={coin.image} alt={coin.name} width="40" />

      <h3>{coin.name}</h3>

      <h2>${coin.current_price.toLocaleString()}</h2>

      <p
        style={{
          color:
            coin.price_change_percentage_24h >= 0 ? "#00ff99" : "#ff4d4d",
        }}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
}

export default CoinCard;