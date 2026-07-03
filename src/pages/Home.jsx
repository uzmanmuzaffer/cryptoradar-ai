import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoinList from "../components/CoinList";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <CoinList />
    </div>
  );
}

export default Home;