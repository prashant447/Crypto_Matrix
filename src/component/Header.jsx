import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/crypt-removebg-preview.png'
const Header = () => {
  return (
    <>

    <div className="header">
      <Link to='/'>

        <img src={assets} alt="" />
      </Link>
        <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/exchange'>Exhanges</Link>
            <Link to = '/coins'>Coins</Link>
        </nav>
    </div>
      
    </>
  )
}

export default Header
