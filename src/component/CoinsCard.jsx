import React from 'react'
import { Link } from 'react-router-dom'

const CoinsCard = ({image, price, name, symbol, id, currencySymbol='₹'}) => {
    
  return (
    <>
       <div className="exchangeCard" key={id}>
        <Link to = {`/coin/${id}`} target = "_blank">
           
           <img src={image} alt={name} />
           <p>{symbol}</p>
           <h2>{name}</h2>
           <h2>{price ? `${currencySymbol}${price}`:"NA"}</h2>

            


        </Link>

       </div>
      
    </>
  )
}

export default CoinsCard
