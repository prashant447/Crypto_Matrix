import React from 'react'
import btc from '../assets/btc-min.png'

const Home = () => {
  return (
    <>
    <div className="container-home">


      <div className="home">
          

           <div className="right">
               <h1 className='right-h'>Cryptocurrency just got even better</h1>
               <p className='right-p'>Transforming transactions with cryptocurrency's <br/>digital currency revolution</p>
               <button>Invest Now</button>
           </div>

           <div className="left">
           <img src={btc} alt=""/>
           </div>
      </div>
    </div>
    </>
  )
}

export default Home
