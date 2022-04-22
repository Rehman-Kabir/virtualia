import React from 'react'
import Header from '../../components/Header/Header'
import Caret from '../../assets/CaretDown.png'
import TdAvatar from '../../assets/td-1.png'
import TdAvatar2 from '../../assets/td-2.png'
import AvatarFBA from '../../assets/final.png'
import base1 from '../../assets/base-1.png'
import base2 from '../../assets/base-2.png'
import base3 from '../../assets/base-3.png'
import base4 from '../../assets/base-4.png'
import base5 from '../../assets/base-5.png'
import base6 from '../../assets/base-6.png'
import base7 from '../../assets/base-7.png'
import base8 from '../../assets/base-8.png'
import eyes1 from '../../assets/eyes-1.png'
import eyes2 from '../../assets/eyes-2.png'
import eyes3 from '../../assets/eyes-3.png'
import hair1 from '../../assets/hair-1.png'
import hair2 from '../../assets/hair-2.png'
import hair3 from '../../assets/hair-3.png'
import hair4 from '../../assets/hair-4.png'
import wardrobe1 from '../../assets/Wardrobe.png'
import wardrobe2 from '../../assets/Wardrobe 2.png'
import AvatarFull from '../../assets/full-avatar.png'
import './fba.css'
import GetAvatar from '../../components/GetAvatar/GetAvatar'
const FBA = () => {
  return (
    <>
    <Header/>
    <section className="t-d-avator" id='3d-avatar'>
        <div className="container">
            <div className="t-d-avatar-container">
                <div className="t-d-avatar-sec-head">
                    <h1>1. &nbsp;  Select a 3D Avatar.</h1>
                    <div className="btn-wrap">
                        <button>Female <img src={Caret} alt="icon" /></button>
                        <button>Sorted By <img src={Caret} alt="icon" /></button>
                    </div>
                </div>
                <div className="t-d-avatar-grid">
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar2} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar2} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar2} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar2} alt="avatar" />
                        </div>
                    </div>
                    <div className="t-d-avatar-wrap">
                        <div className="t-d-img">
                            <img src={TdAvatar} alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modify-container">
                <h1> 2. &nbsp;  Modify your 3D Avatar.</h1>
                <div className="modify-grid">
                    <div className="modify-assets-wrap">
                        <div className="modify-wrap">
                            <h3>Base</h3>
                            <div className="assets-img-wrap base">
                                <div><img src={base1} alt="icon" /></div>                            
                                <div><img src={base2} alt="icon" /></div>                            
                                <div><img src={base3} alt="icon" /></div>                            
                                <div><img src={base4} alt="icon" /></div>                            
                                <div><img src={base5} alt="icon" /></div>                            
                                <div><img src={base6} alt="icon" /></div>                            
                                <div><img src={base7} alt="icon" /></div>                            
                                <div><img src={base8} alt="icon" /></div>                            
                            </div>
                        </div>
                        <div className="modify-wrap">
                            <h3>Eyes</h3>
                            <div className="assets-img-wrap eyes">
                                <div><img src={eyes1} alt="icon" /></div>                            
                                <div><img src={eyes2} alt="icon" /></div>                            
                                <div><img src={eyes3} alt="icon" /></div>                                                        
                                <div><img src={eyes3} alt="icon" /></div>                                                        
                            </div>
                        </div>
                        <div className="modify-wrap">
                            <h3>Clothes</h3>
                            <div className="assets-img-wrap wardrobe">
                                <div><img src={wardrobe1} alt="icon" /></div>                            
                                <div><img src={wardrobe2} alt="icon" /></div>                            
                                                                                       
                            </div>
                        </div>
                        <div className="modify-wrap">
                            <h3>Hairs</h3>
                            <div className="assets-img-wrap hair">
                                <div><img src={hair1} alt="icon" /></div>                            
                                <div><img src={hair2} alt="icon" /></div>                            
                                <div><img src={hair3} alt="icon" /></div>                                                        
                                <div><img src={hair4} alt="icon" /></div>                                                        
                            </div>
                        </div>
                    </div>
                    <div className="avatar-full-img">
                        <img src={AvatarFull} alt="full avatar" />
                    </div>
                </div>
            </div>
            <GetAvatar FinalAvatar={AvatarFBA} Heading={3}/>
        </div>
        <div className="avatar-file-btns">
            <button className='btn-grad-green'>Save to Profile</button>
            <button className='btn-grad-orange'>Get NFT</button>
        </div>
    </section>
    </>
  )
}

export default FBA