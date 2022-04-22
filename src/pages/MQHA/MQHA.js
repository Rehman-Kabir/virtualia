import React from 'react'
import UploadIcon from '../../assets/Upload.svg'
import AvatarG from '../../assets/real 1.png'
import Header from '../../components/Header/Header'
import './mqha.css'
import GetAvatar from '../../components/GetAvatar/GetAvatar'

const MQHA = () => {
  return (
    <>
    <Header/>
    <section className="picture-upload">
        <div className="container">
            <div className="select-file-container">
                <h1>1. &nbsp; Select and Upload Selfies.</h1>
                <div className="file-uploader-grid">
                    <div className="file-wrap">
                        <div className="file-img-wrap">
                            <img src={UploadIcon} alt="" />
                        </div>
                    </div>
                    <div className="file-wrap">
                        <div className="file-img-wrap">
                            <img src={UploadIcon} alt="" />
                        </div>
                    </div>
                    <div className="file-wrap">
                        <div className="file-img-wrap">
                            <img src={UploadIcon} alt="" />
                        </div>
                    </div>
                </div>
               <div className="generate-btn">
                   <button>Generate</button>
               </div>
            </div>
            <GetAvatar FinalAvatar={AvatarG} Heading={2}/>
        </div>
        <div className="avatar-file-btns">
            <button className='btn-grad-green'>Save to Profile</button>
            <button className='btn-grad-orange'>Get NFT</button>
        </div>
    </section>
    </>
  )
}

export default MQHA