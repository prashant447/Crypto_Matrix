import React from 'react'
import { Link } from 'react-router-dom'

const ExchangeCard = ({image, url, name, rank, id}) => {
    
  return (
    <>
       <div className="exchangeCard" key={id}>
        <Link to = {url} target = "blank">
           
           <img src={image} alt={name} />
           <p>{rank}</p>
           <h2>{name}</h2>
            


        </Link>

       </div>
      
    </>
  )
}

export default ExchangeCard
