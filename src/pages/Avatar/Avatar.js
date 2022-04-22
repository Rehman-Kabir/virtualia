import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Accordion from '../../components/FAQ/FAQ'
import Avatar1 from '../../assets/avatar-1.png'
import Avatar2 from '../../assets/avatar-2.png'
import Avatar3 from '../../assets/avatar-4.png'
import Avatar4 from '../../assets/avatar-5.png'
import Avatar5 from '../../assets/avatar-3.png'
import Avatar6 from '../../assets/avatar-6.png'
import Avatar7 from '../../assets/avatar-7.png'
import Avatar8 from '../../assets/avatar-8.png'
import './avatar.css'
import { accordionData } from '../../utils/content'
const Avatar = () => {
  return (
    <>
    <Header/>
    <section className="avatar" id="avatar">
        <div className="avatar-bg-container">
            <div className="container">
                <div className="avatar-content-container">
                    <h1>Select a 3D Model Type</h1>
                    <div className="avatar-content-text">
                        <p>Simple, medium, premium and realistic scanning services are available to any Virtualian depending on the desired output quality. and the option between a head profil or full body avatar. Read our FAQ below for more descriptions. </p>
                    </div>
                </div>
                <div className="avatar-main-container">
                    <div className="avatar-grid">
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar1} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>Full Body Avatar</p>
                            </div>
                        </div>
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar2} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>Simple Head Avatar</p>
                            </div>
                        </div>
                    </div>
                    <div className="avatar-heading">
                        <h1>Non-Fungible Self</h1>
                    </div>
                    <div className="avatar-grid">
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar3} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>Medium Quality Body Avatar</p>
                            </div>
                        </div>
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar4} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>Medium Quality head Avatar</p>
                            </div>
                        </div>
                    </div>
                    <div className="avatar-heading">
                        <h1>Premium Non-Fungible People</h1>
                    </div>
                    <div className="avatar-grid">
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar5} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>Digital Self  Twin</p>
                            </div>
                        </div>
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar6} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>High Quality MetaPeople</p>
                            </div>
                        </div>
                    </div>
                    <div className="avatar-heading">
                        <h1>Realistic NFS</h1>
                    </div>
                    <div className="avatar-grid">
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar7} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>Realistic Full Body Scan</p>
                            </div>
                        </div>
                        <div className="avatar-wrap b-orange">
                            <div className="a-img">
                                <img src={Avatar8} alt="avatar" />
                            </div>
                            <div className="a-text">
                                <p>Realistic Head Scan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="faq" id="faq">
        <div className="container">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion-container">
                <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Avatar