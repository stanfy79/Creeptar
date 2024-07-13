import React, { useEffect, useState } from 'react';
import SlideTape from '../components/SlideTape';
import '../tokenList.css';
import axios from 'axios';

export default function Tokens() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h%2C24h%2C30d', {
          params: {
            vs_currency: 'usd',
          },
          headers: { accept: 'application/json' },
        });
        setTokens(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="token-list-container">
        <SlideTape />
      <div className="header">
        <h1>Cryptocurrency Prices by Market Cap</h1>
      </div>
      <div className="token-item-list">
        <div className="token-list-head">
            <div id="coin">Coin</div>
            <div>Price</div>
            <div>Change</div>
            <div>24h Highest</div>
            <div>24h Lowest</div>
            <div>24h Volume</div>
            <div>Market Cap</div>
        </div>
        {tokens.map((token) => (
          <div key={token.id} className="token-item-container">
            <div id="token-rank">{token.market_cap_rank}.</div>
            <div className="token-logo">
                <img src={token.image} alt="Logo" loading='lazy' />
            </div>
            <div className="token-title">
              <span id="token-symbol">{token.symbol.toUpperCase()}</span>
              <span id="token-name">{token.name}</span>
            </div>
            <div className="token-trading-info-container">
                <div id="token-price">${token.current_price}</div>
                <div id="token-price-change">{token.price_change_percentage_24h}%</div>
                <div id="token-high">${token.high_24h}</div>
                <div id="token-low">${token.low_24h}</div>
                <div id="token-volumn">${token.total_volume}</div>
                <div id="token-market-cap">${token.market_cap}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
