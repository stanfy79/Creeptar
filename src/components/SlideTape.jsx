// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import '../App.css'

function SlideTape() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "symbols": [
    {
      "description": "Solana",
      "proName": "COINBASE:SOLUSD"
    },
    {
      "description": "Ethereum",
      "proName": "BITSTAMP:ETHUSD"
    },
    {
      "description": "Toncoin",
      "proName": "CRYPTO:TONUSD"
    },
    {
      "description": "Notcoin",
      "proName": "CRYPTO:NOTUSD"
    },
    {
      "description": "Pepe",
      "proName": "CRYPTO:PEPEUSD"
    },
    {
      "description": "Bitcoin",
      "proName": "BINANCE:BTCUSD"
    },
    {
      "description": "Polygon",
      "proName": "COINBASE:MATICUSD"
    },
    {
      "description": "DogWifHat",
      "proName": "CRYPTO:WIFUSD"
    }
  ],
  "showSymbolLogo": true,
  "isTransparent": false,
  "displayMode": "adaptive",
  "colorTheme": "dark",
  "locale": "en"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="slider-widget-container" ref={container}>
      <div className="slider-widget-container__widget"></div>
    </div>
  );
}

export default memo(SlideTape);
