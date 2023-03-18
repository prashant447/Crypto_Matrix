import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import { useParams } from 'react-router-dom';


import Chart from '../component/Chart';


const CoinDetails = () => {
  const {id} = useParams();

    const [coinDetails, setCoinDetails] = useState({})
   
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    const [currency, setCurrency] = useState('inr')
    const [chart, setChart] = useState([])
    const [days, setDays] = useState('24h')

    const currencyS = currency==="inr" ? "₹" : currency==="eur" ? "€" : "$";

   const btns = ['24h', '7d', '14d', '30d', '60d', '120d', '200d', '1y', 'max']

   const buttonChart = (key) =>{
    
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  
   }
    
            
             
             const getCoinsDetails = async() =>{
              try {
                const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
                const data = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)  
                // console.log(res.data)
                setCoinDetails(res?.data)

                setChart(data?.data?.prices)
               
                setLoading(false)
                
              } catch (error) {
                 setError(true)
                 setLoading(false)
              }
              
            }
 



  useEffect(() => {
      getCoinsDetails();
  }, [id, currency, days])

  if(error){
    return <ErrorComponent message={'Error While fetching Coin Details......'}/>
  }
  

  return (
    <>
             <div className="coinD">

          
               {
                (loading? <Loader/>:
                <>
                     {/* chart */}
                <div className="chart" style={{width:'70%', margin:'auto', padding:'2rem'}}>
    <Chart currency={currencyS} arr={chart} days={days}/>
                </div>


                 {/* button */}

                 <div className="btn">
                 {

                    btns?.map((i) =>(
                      <>

                      <button className='btns' onClick={() =>buttonChart(i)}>{i}</button>
                      </>
                    ))
                  }
                  </div>
               
<div className="radio" style= {{padding:'1rem', margin:'1rem', textAlign:'center'}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <label htmlFor="" style= {{padding:'0.3rem'}}>INR</label>
          <input type="radio" name="currency" id="" value={"inr"} />
            
          <label htmlFor="" style= {{ margin:'0.3rem'}}>EUR</label>
          <input type="radio" name="currency" id="" value={"eur"} />

          <label htmlFor="" style= {{padding:'0.2rem'}}>USD</label>
          <input type="radio" name="currency" id="" value={"usd"} />
          </div>
                
                <div className="coinDetails" style={{textAlign:'center', padding:'1rem', fontSize:'1.3rem'}}>
                   <h3>Last Update On {Date(coinDetails?.market_data?.last_updated).split("G")[0]}</h3>

                   <img src={coinDetails?.image?.large} style={{width:'150px', marginTop:'1rem', borderRadius:'1rem', textAlign:"center",padding:'0.1rem', display:'inline-block'}} alt={coinDetails} />

                   
                
                   
                   <p style={{padding:'0.1rem', margin:'0.5rem'}}>{coinDetails.name} </p>
                   <span>{currencyS}{coinDetails.market_data.current_price[currency]}</span>

                  
                 
                  <span style={{paddingBottom:'1rem' , margin:'0.5rem'}}> { coinDetails?.market_data?.price_change_percentage_24h}%
                      </span>
                
                  
                

             </div>
                </>)
               }


</div>
    </>
  )
}             


          const Item = ({value, title}) =>{

            <>
            
            <h3>{title}</h3>
                <p>{value}</p>
            </>
                
          }


 export function BasicExample() {
  return 
            

}



export default CoinDetails












// import {
//   Badge,
//   Box,
//   Button,
//   Container,
//   HStack,
//   Image,
//   Progress,
//   Radio,
//   RadioGroup,
//   Stat,
//   StatArrow,
//   StatHelpText,
//   StatLabel,
//   StatNumber,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import Chart from "./Chart";
// import ErrorComponent from "./ErrorComponent";
// import Loader from "./Loader";

// const CoinDetails = () => {
//   const params = useParams();
//   const [coin, setCoin] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [currency, setCurrency] = useState("inr");
//   const [days, setDays] = useState("24h");
//   const [chartArray, setChartArray] = useState([]);

//   const currencySymbol =
//     currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

//   const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

//   const switchChartStats = (key) => {
//     switch (key) {
//       case "24h":
//         setDays("24h");
//         setLoading(true);
//         break;
//       case "7d":
//         setDays("7d");
//         setLoading(true);
//         break;
//       case "14d":
//         setDays("14d");
//         setLoading(true);
//         break;
//       case "30d":
//         setDays("30d");
//         setLoading(true);
//         break;
//       case "60d":
//         setDays("60d");
//         setLoading(true);
//         break;
//       case "200d":
//         setDays("200d");
//         setLoading(true);
//         break;
//       case "1y":
//         setDays("365d");
//         setLoading(true);
//         break;
//       case "max":
//         setDays("max");
//         setLoading(true);
//         break;

//       default:
//         setDays("24h");
//         setLoading(true);
//         break;
//     }
//   };

//   useEffect(() => {
//     const fetchCoin = async () => {
//       try {
//         const { data } = await axios.get(`${server}/coins/${params.id}`);

//         const { data: chartData } = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
//         );
//         setCoin(data);
//         setChartArray(chartData.prices);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchCoin();
//   }, [params.id, currency, days]);

//   if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

//   return (
//     <Container maxW={"container.xl"}>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <Box width={"full"} borderWidth={1}>
//             <Chart arr={chartArray} currency={currencySymbol} days={days} />
//           </Box>

//           <HStack p="4" overflowX={"auto"}>
//             {btns.map((i) => (
//               <Button
//                 disabled={days === i}
//                 key={i}
//                 onClick={() => switchChartStats(i)}
//               >
//                 {i}
//               </Button>
//             ))}
//           </HStack>

//           <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
//             <HStack spacing={"4"}>
//               <Radio value={"inr"}>INR</Radio>
//               <Radio value={"usd"}>USD</Radio>
//               <Radio value={"eur"}>EUR</Radio>
//             </HStack>
//           </RadioGroup>

//           <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
//             <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
//               Last Updated On{" "}
//               {Date(coin.market_data.last_updated).split("G")[0]}
//             </Text>

//             <Image
//               src={coin.image.large}
//               w={"16"}
//               h={"16"}
//               objectFit={"contain"}
//             />

//             <Stat>
//               <StatLabel>{coin.name}</StatLabel>
//               <StatNumber>
//                 {currencySymbol}
//                 {coin.market_data.current_price[currency]}
//               </StatNumber>
//               <StatHelpText>
//                 <StatArrow
//                   type={
//                     coin.market_data.price_change_percentage_24h > 0
//                       ? "increase"
//                       : "decrease"
//                   }
//                 />
//                 {coin.market_data.price_change_percentage_24h}%
//               </StatHelpText>
//             </Stat>

//             <Badge
//               fontSize={"2xl"}
//               bgColor={"blackAlpha.800"}
//               color={"white"}
//             >{`#${coin.market_cap_rank}`}</Badge>

//             <CustomBar
//               high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
//               low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
//             />

//             <Box w={"full"} p="4">
//               <Item title={"Max Supply"} value={coin.market_data.max_supply} />
//               <Item
//                 title={"Circulating Supply"}
//                 value={coin.market_data.circulating_supply}
//               />
//               <Item
//                 title={"Market Cap"}
//                 value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
//               />
//               <Item
//                 title={"All Time Low"}
//                 value={`${currencySymbol}${coin.market_data.atl[currency]}`}
//               />
//               <Item
//                 title={"All Time High"}
//                 value={`${currencySymbol}${coin.market_data.ath[currency]}`}
//               />
//             </Box>
//           </VStack>
//         </>
//       )}
//     </Container>
//   );
// };

// const Item = ({ title, value }) => (
//   <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
//     <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
//       {title}
//     </Text>
//     <Text>{value}</Text>
//   </HStack>
// );

// const CustomBar = ({ high, low }) => (
//   <VStack w={"full"}>
//     <Progress value={50} colorScheme={"teal"} w={"full"} />
//     <HStack justifyContent={"space-between"} w={"full"}>
//       <Badge children={low} colorScheme={"red"} />
//       <Text fontSize={"sm"}>24H Range</Text>
//       <Badge children={high} colorScheme={"green"} />
//     </HStack>
//   </VStack>
// );

// export default CoinDetails;