import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './marketplace.css'
import TopSeller from '../../components/TopSeller/TopSeller'
import PopularNFT from '../../components/PopularNFT/PopularNFT'
import Popular from '../../components/Popular/Popular'
const Marketplace = () => {
  return (
    <>
    <Header/>
    <section className="marketplace" id="marketplace">
        <div className="marketplace-bg">
            <div className="marketplace-container">    
            <TopSeller/>
            <PopularNFT/>
            </div>
        <Popular/>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Marketplace