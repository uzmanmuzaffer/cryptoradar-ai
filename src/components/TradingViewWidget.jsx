import { useEffect, useRef } from "react";

function TradingViewWidget({ symbol }) {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: `BINANCE:${symbol.toUpperCase()}USDT`,
      interval: "240",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "tr",
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    container.current.appendChild(script);
  }, [symbol]);

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden mt-8">
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "600px", width: "100%" }}
      />
    </div>
  );
}

export default TradingViewWidget;