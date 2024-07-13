// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import '../App.css'

function SolMarketCap() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "symbol": "CRYPTOCAP:SOL",
            "width": "100%",
            "isTransparent": false,
            "colorTheme": "light",
            "locale": "en"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="market-cap-widget-container" ref={container}>
      <div className="market-cap-widget-container__widget"></div>
    </div>
  );
}

export default memo(SolMarketCap);
