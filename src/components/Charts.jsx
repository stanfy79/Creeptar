// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import '../App.css'

function Charts() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "COINBASE:SOLUSD|1D"
            ],
            [
              "BINANCE:ETHUSD|1D"
            ],
            [
              "OKX:TONUSDT|1D"
            ],
            [
              "CRYPTO:NOTUSD|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "gridLineColor": "rgba(209, 212, 220, 0)",
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "widgetFontColor": "rgba(0, 0, 0, 1)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(34, 171, 148, 1)"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="chartview-widget-container" ref={container}>
      <div className="chartview-widget-container__widget"></div>
    </div>
  );
}

export default memo(Charts);
