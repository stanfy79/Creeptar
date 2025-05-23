import React from "react";
import SolMarketCap from '../components/SolMarketCap'
import AnalysisChart from '../components/Analysis'
import TopFeeds from '../components/TopFeeds'
import SlideTape from '../components/SlideTape'
import Header from '../components/Header'
import Chart from '../components/Charts'
import '../App.css'


function Home() {


    return (
        <>
            <div className="app">
                
                <header className="header">
                    <h1>Welcome To Creeptar</h1>
                    <div className="header-buttons">
                        <a href="https://github.com/stanfy79/Creeptar">
                            <button className="view-apps-button">View Creeptar GitHub Repository</button>
                        </a>
                    </div>
                </header>

                <section className="apps-overview">
                    <iframe src="https://qrcoinwidget.vercel.app" width="100%" height="110px" frameBorder="0" style={{ background: 'transparent' }} title="QR Coin Widget" />
                    <div className="app-card">
                        <div>
                            <SlideTape />
                        </div>
                        <h2>Flow</h2>
                        <p>9 requests (24h/7)</p>
                        <div className="networks">
                            <span className="network">Tokens</span>
                            <span className="network">NFTs</span>
                            <span className="network">+6 topics</span>
                        </div>
                        <a href="https://www.coingecko.com/en/developers/dashboard" target="_blank" rel="noopener noreferrer">
                            <button className="endpoints-button">Get API Endpoints</button>
                        </a>
                    </div>
                </section>

                <section className='technical-analysis-container'>
                    <AnalysisChart />
                    <SolMarketCap />
                </section>

                <section className="analytics-overview">
                    <div className="analytics-card">
                    <p>Daily ETH Transactions</p>
                    <div className="requests-circle">9 txn</div>
                    <div className="requests-details">
                        <span className="successful">9 (100%)</span>
                        <span className="failed">0 (0%)</span>
                    </div>
                    </div>
                    <div className="analytics-card">
                    <p>Weekly request growth</p>
                    <p>7/3 - 7/9</p>
                    <p>0%</p>
                    </div>
                    <div className="analytics-card">
                    <p>Weekly CU growth</p>
                    <p>7/3 - 7/9</p>
                    <p>0%</p>
                    <div className="cu-growth-chart">
                        <p>No Data</p>
                    </div>
                    </div>
                </section>

                <section>
                    <Chart />
                </section>

                <section>
                    <TopFeeds />
                </section>

                <section className="details-overview">
                    <div className="details-cards">
                        <p>Onchain</p>
                        <div className="details-card-info">
                            <p>Find Top NFTs collection on Opensea</p>
                        </div>
                        <div className="details-card-button-container">
                            <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">
                                <button type="button">Check Out</button>
                            </a>
                        </div>
                    </div>
                    <div className="details-cards">
                        <p>Onchain</p>
                        <div className="details-card-info">
                            <p>Learn how to query NFT data, then dive into some fun tutorials!</p>
                        </div>
                        <div className="details-card-button-container">
                            <a href="https://docs.alchemy.com/reference/nft-api-quickstart" target="_blank" rel="noopener noreferrer">
                                <button type="button">Check Out</button>
                            </a>
                        </div>
                    </div>
                    <div className="details-cards">
                    <p>Onchain</p>
                        <div className="details-card-info">
                            <p>Started in 2014, CoinGecko is the world's largest independent crypto data... aggregator that is integrated with more than 900 crypto exchanges and lists more than 12,000 coins.</p>
                        </div>
                        <div className="details-card-button-container">
                            <a href="https://docs.coingecko.com/v3.0.1/reference/introduction" target="_blank" rel="noopener noreferrer">
                                <button type="button">Check Out</button>
                            </a>
                        </div>
                    </div>
                    <div className="details-cards">
                    <p>Onchain</p>
                        <div className="details-card-info"> 
                            <p>Alchemy Transact is a suite of APIs and tools built to make your blockchain transactions faster, cheaper and more reliable.</p>
                        </div>
                        <div className="details-card-button-container">
                            <a href="https://docs.alchemy.com/reference/transact-api-quickstart" target="_blank" rel="noopener noreferrer">
                                <button type="button">Check Out</button>
                            </a>
                        </div>
                    </div>
                </section>

                </div>
        </>
    )
}

export default Home
