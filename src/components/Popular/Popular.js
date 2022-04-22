import React from 'react'
import RocketIcon from '../../assets/RocketLaunch.svg'
import PopImg1 from '../../assets/Saly-39.png'
import PopImg2 from '../../assets/bag-nft.png'
import PopImg3 from '../../assets/bag2-nft.png'
import PopImg4 from '../../assets/popnft-3.png'
import PopImg5 from '../../assets/nftcar-1.png'
import PopImg6 from '../../assets/nftcar-2.png'
import PopImg7 from '../../assets/nftcar-3.png'
import PopImg8 from '../../assets/nftcar-4.png'
import PopImg9 from '../../assets/spacenft-1.png'
import PopImg10 from '../../assets/spacenft-2.png'
import PopImg11 from '../../assets/spacenft-3.png'
import PopImg12 from '../../assets/spacenft-4.png'
import Profile1 from '../../assets/Avatar.png'
import Profile2 from '../../assets/profile-avatar-2.png'
import Profile3 from '../../assets/profile-avatar-3.png'
import LikeIcon from '../../assets/Heart.png'
import LikeIconPink from '../../assets/HeartPink.png'
import SocialIcon from '../../assets/Capitalia compatible.png'
import SocialIcon2 from '../../assets/Futuria compatible.png'
import SocialIcon3 from '../../assets/Mysteria.png'
import SocialIcon4 from '../../assets/Enigma.png'
import SocialIcon5 from '../../assets/MarsColonia.png'
import './popular.css'
import { Link } from 'react-router-dom'

const Popular = () => {
  return (
    <>
    <section className="popular" id='popular'>
      <div className="container">
        <div className="popular-con-head">
          <h1>Popular 3D Collections</h1>
          <Link to='/3davatar'><img src={RocketIcon} alt="icon" />Explore All</Link>
        </div>
        <div className="popular-grid">
          <div className="popular-content-container">
            <div className="popular-img-container">
              <div className="popular-img-wrap">
                <div className="popular-img">
                  <img src={PopImg2} alt="popular" className='popular-border-1' />
                </div>
                <div className="popular-img">
                  <img src={PopImg3} alt="popular" className='popular-border-2'/>
                </div>
                <div className="popular-img">
                  <img src={PopImg1} alt="popular" className='popular-border-3'/>
                </div>
                <div className="popular-img">
                  <img src={PopImg4} alt="popular" className='popular-border-4'/>
                </div>
              </div>
            </div>
            <div className="popular-profile-container">
              <div className="profile-wrap">
                <div className="profile-img">
                    <img src={Profile1} alt="profile" />
                </div>
                <div className="profile"> 
                  <h4>Shopping Set #21</h4>
                  <p>Created by <span> Justin William </span></p>
                  <div className="profile-social">
                    <a href="/"><img src={SocialIcon} alt="icon" /></a>
                    <a href="/"><img src={SocialIcon2} alt="icon" /></a>
                  </div>
                </div>
              </div>
              <div className="popular-likes">
                <div className="like-img">
                  <img src={LikeIcon} alt="Icon" />
                </div>
                <span>372</span>
              </div>
            </div>
          </div>
          <div className="popular-content-container">
            <div className="popular-img-container">
              <div className="popular-img-wrap">
                <div className="popular-img">
                  <img src={PopImg5} alt="popular" className='popular-border-1' />
                </div>
                <div className="popular-img">
                  <img src={PopImg6} alt="popular" className='popular-border-2'/>
                </div>
                <div className="popular-img">
                  <img src={PopImg7} alt="popular" className='popular-border-3'/>
                </div>
                <div className="popular-img">
                  <img src={PopImg8} alt="popular" className='popular-border-4'/>
                </div>
              </div>
            </div>
            <div className="popular-profile-container">
              <div className="profile-wrap">
                <div className="profile-img">
                    <img src={Profile2} alt="profile" />
                </div>
                <div className="profile"> 
                  <h4>GT cars Vol. 3</h4>
                  <p>Created by <span> Dennis93 </span></p>
                  <div className="profile-social">
                    <a href="/"><img src={SocialIcon3} alt="icon" /></a>
                    <a href="/"><img src={SocialIcon4} alt="icon" /></a>
                  </div>
                </div>
              </div>
              <div className="popular-likes">
                <div className="like-img">
                  <img src={LikeIconPink} alt="Icon" style={{marginTop:'8px'}} />
                </div>
                <span>221</span>
              </div>
            </div>
          </div>
          <div className="popular-content-container">
            <div className="popular-img-container">
              <div className="popular-img-wrap">
                <div className="popular-img">
                  <img src={PopImg9} alt="popular" className='popular-border-1' />
                </div>
                <div className="popular-img">
                  <img src={PopImg10} alt="popular" className='popular-border-2'/>
                </div>
                <div className="popular-img">
                  <img src={PopImg11} alt="popular" className='popular-border-3'/>
                </div>
                <div className="popular-img">
                  <img src={PopImg12} alt="popular" className='popular-border-4'/>
                </div>
              </div>
            </div>
            <div className="popular-profile-container">
              <div className="profile-wrap">
                <div className="profile-img">
                    <img src={Profile3} alt="profile" />
                </div>
                <div className="profile"> 
                  <h4>Mars Settlement</h4>
                  <p>Created by <span> GrafxMars </span></p>
                  <div className="profile-social">
                    <a href="/"><img src={SocialIcon5} alt="icon" /></a>
                    {/* <a href="/"><img src={SocialIcon2} alt="icon" /></a> */}
                  </div>
                </div>
              </div>
              <div className="popular-likes">
                <div className="like-img">
                  <img src={LikeIcon} alt="Icon" />
                </div>
                <span>409</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Popular