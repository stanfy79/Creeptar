// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import '../App.css'

function TopFeeds() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "feedMode": "all_symbols",
            "isTransparent": false,
            "displayMode": "compact",
            "width": "100%",
            "height": "100%",
            "colorTheme": "light",
            "locale": "en"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="timeline-widget-container" ref={container}>
      <div className="timeline-widget-container__widget"></div>
    </div>
  );
}

export default memo(TopFeeds);
