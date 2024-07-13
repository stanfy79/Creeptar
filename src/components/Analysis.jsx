// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import '../App.css'

function AnalysisChart() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "interval": "1m",
            "width": "100%",
            "isTransparent": true,
            "height": "100%",
            "symbol": "COINBASE:SOLUSD",
            "showIntervalTabs": true,
            "displayMode": "single",
            "locale": "en",
            "colorTheme": "light"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="analysis-widget-container" ref={container}>
      <div className="analysis-widget-container__widget"></div>
    </div>
  );
}

export default memo(AnalysisChart);
