import React from 'react'
import NFTImg1 from '../../assets/nft-1.png'
import NFTImg2 from '../../assets/nft-2.png'
import NFTImg3 from '../../assets/nft-3.png'
import NFTImg4 from '../../assets/nft-4.png'
import NFTImg5 from '../../assets/nft-5.png'
import NFTImg6 from '../../assets/nft-6.png'
import Profile1 from '../../assets/Avatar.png'
import LikeIcon from '../../assets/Heart.png'
import VIA from '../../assets/VIA.png'
import BidIcon from '../../assets/bidIcon.png'
import Profile3 from '../../assets/profile-avatar-3.png'
import PopNFT1 from '../../assets/Avatar (8).png'
import PopNFT2 from '../../assets/profile-avatar-2.png'
import './popularnft.css'

const PopularNFT = () => {
  return (
    <>
    <section className="popular-nft" id="popular-nft">
      <div className="container">
        <div className="popular-nft-head">
          <h1>Popular  NFTs</h1>
          <div className="category-container">
            <a href='/' className="category-links active">
              Trending
            </a>
            <a href='/' className="category-links">
              Furniture
            </a>
            <a href='/' className="category-links">
              Yachts
            </a>
            <a href='/' className="category-links">
              Supercars
            </a>
            <a href='/' className="category-links">
              Jewellery
            </a>
            <a href='/' className="category-links">
              Real Estate
            </a>
            <a href='/' className="category-links">
              Private Jets
            </a>
          </div>
        </div>
        <div className="popular-nft-card-container">
          <div className="nft-card-wrapper">
            <div className="nft-img">
              <img src={NFTImg1} alt="nft" />
            </div>
            <div className="nft-aurther-wrap">
              <div className="profile-wrap">
                  <div className="profile-img">
                      <img src={Profile3} alt="profile" />
                  </div>
                  <div className="profile"> 
                    <h4>Mars Rocket</h4>
                    <p>Created by <span> GrafxMars </span></p>
                    <div className="profile-social">                    
                  </div>
                </div>
              </div>
            </div>
            <div className="like-price-wrap">
              <span><img src={LikeIcon} alt="icon" />372K</span>
              <span><img src={VIA} alt="icon" /><p> 1.760 <small> VIA$</small></p></span>
            </div>
            <div className="bid-wrap">
              <button className="bid-btn">
                <img src={BidIcon} alt="Icon" />
                Place Bid
              </button>
            </div>
          </div>
          <div className="nft-card-wrapper">
            <div className="nft-img">
              <img src={NFTImg2} alt="nft" />
            </div>
            <div className="nft-aurther-wrap">
              <div className="profile-wrap">
                  <div className="profile-img">
                      <img src={Profile1} alt="profile" />
                  </div>
                  <div className="profile"> 
                    <h4>Fashion Shoes Store</h4>
                    <p>Created by <span> Justin William </span></p>
                </div>
              </div>
            </div>
            <div className="like-price-wrap">
              <span><img src={LikeIcon} alt="icon" />12K</span>
              <span><img src={VIA} alt="icon" /><p>3.360<small> VIA$</small></p></span>
            </div>
            <div className="bid-wrap">
              <button className="bid-btn">
                <img src={BidIcon} alt="Icon" />
                Place Bid
              </button>
            </div>
          </div>
          <div className="nft-card-wrapper">
            <div className="nft-img">
              <img src={NFTImg3} alt="nft" />
            </div>
            <div className="nft-aurther-wrap">
              <div className="profile-wrap">
                  <div className="profile-img">
                      <img src={Profile1} alt="profile" />
                  </div>
                  <div className="profile"> 
                    <h4>Dior Vibe Classic</h4>
                    <p>Created by <span> Justin William </span></p>
                    <div className="profile-social">
                  </div>
                </div>
              </div>
            </div>
            <div className="like-price-wrap">
              <span><img src={LikeIcon} alt="icon" />55K</span>
              <span><img src={VIA} alt="icon" /><p> 560 <small> VIA$</small></p></span>
            </div>
            <div className="bid-wrap">
              <button className="bid-btn">
                <img src={BidIcon} alt="Icon" />
                Place Bid
              </button>
            </div>
          </div>
          <div className="nft-card-wrapper">
            <div className="nft-img">
              <img src={NFTImg4} alt="nft" />
            </div>
            <div className="nft-aurther-wrap">
              <div className="profile-wrap">
                  <div className="profile-img">
                      <img src={PopNFT1} alt="profile" />
                  </div>
                  <div className="profile"> 
                    <h4>Chillon Castle</h4>
                    <p>Created by <span> Pix4D </span></p>
                    <div className="profile-social">  
                  </div>
                </div>
              </div>
            </div>
            <div className="like-price-wrap">
              <span><img src={LikeIcon} alt="icon" />28K</span>
              <span><img src={VIA} alt="icon" /><p> 420 <small> VIA$</small></p></span>
            </div>
            <div className="bid-wrap">
              <button className="bid-btn">
                <img src={BidIcon} alt="Icon" />
                Place Bid
              </button>
            </div>
          </div>
          <div className="nft-card-wrapper">
            <div className="nft-img">
              <img src={NFTImg5} alt="nft" />
            </div>
            <div className="nft-aurther-wrap">
              <div className="profile-wrap">
                  <div className="profile-img">
                      <img src={Profile1} alt="profile" />
                  </div>
                  <div className="profile"> 
                    <h4>Emperor August</h4>
                    <p>Created by <span> Geoffrey Marchal </span></p>
                    <div className="profile-social">                     
                  </div>
                </div>
              </div>
            </div>
            <div className="like-price-wrap">
              <span><img src={LikeIcon} alt="icon" />32K</span>
              <span><img src={VIA} alt="icon" /><p> 735 <small> VIA$</small></p></span>
            </div>
            <div className="bid-wrap">
              <button className="bid-btn">
                <img src={BidIcon} alt="Icon" />
                Place Bid
              </button>
            </div>
          </div>
          <div className="nft-card-wrapper">
            <div className="nft-img">
              <img src={NFTImg6} alt="nft" />
            </div>
            <div className="nft-aurther-wrap">
              <div className="profile-wrap">
                  <div className="profile-img">
                      <img src={PopNFT2} alt="profile" />
                  </div>
                  <div className="profile"> 
                    <h4>GT coupe breake</h4>
                    <p>Created by <span> Dennis93 </span></p>
                    <div className="profile-social">                      
                  </div>
                </div>
              </div>
            </div>
            <div className="like-price-wrap">
              <span><img src={LikeIcon} alt="icon" />10K</span>
              <span><img src={VIA} alt="icon" /><p> 4,124 <small> VIA$</small></p></span>
            </div>
            <div className="bid-wrap">
              <button className="bid-btn">
                <img src={BidIcon} alt="Icon" />
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PopularNFT