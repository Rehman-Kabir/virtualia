import React from 'react'
import Header from '../../components/Header/Header'
import VirtualiaWallet from '../../assets/virtualia-wallet.png'
import MetaMaskWallet from '../../assets/metamask.svg'
import BinanceWallet from '../../assets/binance.svg'
import CoinBaseWallet from '../../assets/coinbase.svg'
import TrustWallet from '../../assets/TW.svg'
import './connectwallet.css'
import Footer from '../../components/Footer/Footer'
const ConnectWallet = () => {
  return (
    <>
    <Header/>
    <section className="connect-wallet" id="connect-wallet">
        <div className="connect-wallet-container">
            <div className="container">
                <div className="wallet-content-container">
                    <h1>Connect With Your Wallet</h1>
                    <div className="virtualia-wallet-wrap">
                        <p>Connect with the official Virtualia wallet and soon compatible popular wallets</p>
                        <div className="virtualia-wallet">
                            <div className="wallet">
                                <div className="wallet-img">
                                    <img src={VirtualiaWallet} alt="icon" />
                                </div>
                                <h2>Virtualia</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wallet-grid">
                    <div className="wallet b-orange">
                        <div className="wallet-img ">
                            <img src={MetaMaskWallet} alt="icon" />
                        </div>
                        <h2>Metamask</h2>
                    </div>
                    <div className="wallet b-yellow">
                        <div className="wallet-img">
                            <img src={BinanceWallet} alt="icon" />
                        </div>
                        <h2>Binance</h2>
                    </div>
                    <div className="wallet b-blue">
                        <div className="wallet-img">
                            <img src={CoinBaseWallet} alt="icon" />
                        </div>
                        <h2>Coinbase</h2>
                    </div>
                    <div className="wallet b-l-blue">
                        <div className="wallet-img">
                            <img src={TrustWallet} alt="icon" />
                        </div>
                        <h2>Trust Wallet</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default ConnectWallet