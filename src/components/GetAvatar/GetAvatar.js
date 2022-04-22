import React from 'react'
import './getavatar.css'
const GetAvatar = ({FinalAvatar, Heading}) => {
  return (
    <>
     <div className="avatar-file-container">
        <h1> {Heading}. &nbsp; Get your 3D Avatar.</h1>
        <div className="avatar-file-desc">
            <div className="avatar-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="avatar-img">
                <img src={FinalAvatar} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default GetAvatar