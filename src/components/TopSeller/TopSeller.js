import React from 'react'
import Profile from '../../assets/Avatar.png'
import Profile1 from '../../assets/Avatar (1).png'
import Profile2 from '../../assets/Avatar (2).png'
import Profile3 from '../../assets/Avatar (3).png'
import Profile4 from '../../assets/Avatar (4).png'
import Profile5 from '../../assets/Avatar (5).png'
import Profile6 from '../../assets/Avatar (6).png'
import Profile7 from '../../assets/Avatar (7).png'

import './topseller.css'

const TopSeller = () => {
  return (
    <>
    <section className="top-seller" id="top-seller">
      <div className="container">
        <div className="container-header">
          <h1>Top Sellers</h1>
          <span>1 VIA = 10,000 VIA$</span>
        </div>
        <div className="ts-profile-container">
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile1} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>Patrick R.</h4>
            <p>VIA$ 242K</p>
            </div>
          </div>
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile2} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>Matrix888</h4>
            <p>VIA$ 202K</p>
            </div>
          </div>
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile3} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>Dennis93</h4>
            <p>VIA$ 128K</p>
            </div>
          </div>
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>Justin W.</h4>
            <p>VIA$ 102K</p>
            </div>
          </div>
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile4} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>Sarah P.</h4>
            <p>VIA$ 89,212</p>
            </div>
          </div>
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile5} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>Jena K.</h4>
            <p>VIA$ 78,293</p>
            </div>
          </div>
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile6} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>Riven90</h4>
            <p>VIA$ 72,930</p>
            </div>
          </div>
          <div className="ts-profile-wrap">
            <div className="profile-img">
              <img src={Profile7} alt="profile 1" />
            </div>
            <div className="ts-data">
            <h4>GoldenStar</h4>
            <p>VIA$ 68,029</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TopSeller