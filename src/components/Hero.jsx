import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">🚀 CryptoRadar AI</span>

        <h1>Kripto Piyasasını Yapay Zekâ ile Analiz Et</h1>

        <p>
          Canlı fiyatlar, teknik analiz, yapay zekâ destekli yorumlar,
          trend coinler ve piyasa haberleri tek platformda.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">📈 Canlı Piyasalar</button>
          <button className="secondary-btn">🤖 AI Analiz</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;