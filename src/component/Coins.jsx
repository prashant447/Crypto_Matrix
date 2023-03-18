import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CoinsCard from '../component/CoinsCard'
import ErrorComponent from './ErrorComponent'
import Loader from './Loader'





const Coins = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState('inr')
  
 

  const changePage = (page) =>{
      setPage(page)
      
       setLoading(true)
  }
  
    const btns = new Array(110).fill(1);
    const currencyS = currency==="inr" ? "₹" : currency==="eur" ? "€" : "$";

          const fetchCoins = async() =>{
            try {
              const res = await axios?.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
             
              // console.log(res.data)
              setCoins(res?.data)
              setLoading(false)
              
            } catch (error) {
               setError(true)
               setLoading(false)
            }
            
          }

  
  useEffect(() => {
    fetchCoins()
  }, [ currency, page]
  )

  if(error)
  return (
     <ErrorComponent message={'Error While fetching Coins......'}/>
  )  
  
  return (

    <>
      
      <div className="exchange">
          
 
        {loading ? <Loader/>:
          <>
          
          <div className="radio" style= {{padding:'1rem', margin:'1rem', textAlign:'center'}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <label htmlFor="" style= {{padding:'0.3rem'}}>INR</label>
          <input type="radio" name="currency" id="" value={"inr"} />
            
          <label htmlFor="" style= {{ margin:'0.3rem'}}>EUR</label>
          <input type="radio" name="currency" id="" value={"eur"} />

          <label htmlFor="" style= {{padding:'0.2rem'}}>USD</label>
          <input type="radio" name="currency" id="" value={"usd"} />
          </div>



         
          <div className="cards">
         
           {
            coins?.map((item) =>{
                 const {image, current_price, name, symbol, id, currencySymbol} = item
                   
                 return(
                  <CoinsCard key={id} id = {id} image={image} price= {current_price} name={name} symbol={symbol} currencySymbol={currencyS} />
                 )
            })
           }
          </div>
          </>  
        
        
        
      }
      </div>
      
      <div className="button">
        {
          btns?.map((item, index) =>{
            return(
              <div key={item}>
              
              <button onClick={() => changePage(index+1)}>{index+1}</button>
              </div>
      
            )
          })
        }
        </div>
        
    </>
    
  )
}
        

export default Coins

