import React, {useState} from 'react'
import { Link, NavLink, useLocation} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import MenuIcon from '../../assets/menu.svg'
import './header.css'
const Header = () => {
  const [menuActive, setmenuActive] = useState(false)
  const menuHandler = () =>{
    setmenuActive(!menuActive)
  }
  const path = useLocation();
	const navActive = path.pathname;
  return (
    <>
    <header className={navActive === '/' ? ' ' : 'header-bg'}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={menuActive ? 'navigation nav-active' : 'navigation'} onClick={menuHandler}>
          <li><NavLink to="/" activeclassname="active">Discover</NavLink></li>
          <li><NavLink to="/marketplace" activeclassname="active">Marketplace</NavLink></li>
          <li><NavLink to="/avatar" activeclassname="active">Avatar</NavLink></li>
          <li><NavLink to="/community" activeclassname="active">Community</NavLink></li>
          <li><NavLink to="/wallet" activeclassname="active" className="wallet-btn mob-hide">Connect Wallet</NavLink></li>
        </ul>
        <ul className='desk-hide'>
          <li><NavLink to="/wallet" activeclassname="active" className="wallet-btn">Connect Wallet</NavLink></li>
          <li><img src={MenuIcon} alt="icon" onClick={menuHandler}/></li>
        </ul>
      </div>
    </header>
    </>
  )
}

export default Header