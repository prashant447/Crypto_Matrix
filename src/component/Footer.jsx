import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/crypt-removebg-preview.png'
const Footer = () => {
  return (
    <>
      
      <div className="container-footer">
      
        <div className="footer">
          <Link to='/'> <img src={assets} alt="" /></Link>
         

           <p className='footer-para'>About us: Crypto Matrix collected key data points from 28 cryptocurrency exchanges across several key categories, including security, fees, features, and more.</p>
       
        </div>
      </div>
    </>
  )
}

export default Footer
