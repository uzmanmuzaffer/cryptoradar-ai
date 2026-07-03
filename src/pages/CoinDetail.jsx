import { useParams } from "react-router-dom";

function CoinDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold text-cyan-400">
        {id.toUpperCase()}
      </h1>

      <p className="text-gray-400 mt-4 text-xl">
        Coin detay sayfası hazırlanıyor...
      </p>
    </div>
  );
}

export default CoinDetail;