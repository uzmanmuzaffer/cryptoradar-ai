import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🚀 CryptoRadar
      </div>

      <ul>
        <li>Ana Sayfa</li>
        <li>Piyasalar</li>
        <li>Trend Coinler</li>
        <li>Analizler</li>
      </ul>
    </nav>
  );
}

export default Navbar;