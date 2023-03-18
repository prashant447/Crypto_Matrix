import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ExchangeCard from './ExchangeCard'
import ErrorComponent from './ErrorComponent'
import Loader from './Loader'



const Exchange = () => {

  const [exchange, setExchange] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)




          const fetchExchanges = async() =>{
            try {
              const res = await axios.get('https://api.coingecko.com/api/v3/exchanges')
              // console.log(res.data)
              setExchange(res.data)
              setLoading(false)
              
            } catch (error) {
               setError(true)
               setLoading(false)
            }
            
          }

  
  useEffect(() => {
      fetchExchanges()
  }, [])

  if(error)
  return (
     <ErrorComponent message={'Error While fetching Exchanges......'}/>
  )  
  
  return (

    <>
      
      <div className="exchange">
        {loading ? <Loader/>:
          <>
          <div className="cards">
           {
            exchange.map((item) =>{
                 const {image, url, name, trust_score_rank, id} = item
                   
                 return(
                  <ExchangeCard key={id} image={image} url = {url} name={name} rank={trust_score_rank} />
                 )
            })
           }
          </div>
          </>  
        
        
        
      }
      </div>
    </>
  )
}

export default Exchange
