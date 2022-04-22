import React from 'react'
import Header from '../../components/Header/Header'
import './rfbs.css'

const RFBS = () => {
  return (
    <>
    <Header/>
    <section className="request" id="request">
        <div className="container">
            <h1>Request for a Realistic Scan.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="container-request">
            <div className="form-field">
                <span>Name:</span>
                <div className="inp-field">
                    <input type="text" />
                </div>
            </div>
            <div className="form-field">
                <span>Email:</span>
                <div className="inp-field">
                    <input type="email" />
                </div>
            </div>
            <div className="form-field">
                <span>Address:</span>
                <div className="inp-field">
                    <input type="text" />
                </div>
            </div>
            <div className="date-time-wrap">
               <div className="form-field">
                <span>Date:</span>
                <div className="inp-field">
                    <input type="email" />
                </div>
            </div>
            <div className="form-field">
                <span className='form-ml'>Time:</span>
                <div className="inp-field">
                    <input type="text" />
                </div>
            </div> 
            </div>
            <div className="form-btn">
                <button>Request Scan</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default RFBS