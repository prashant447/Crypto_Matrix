import React from 'react'
import './styles/App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Coins from './component/Coins'
import Exchange from './component/Exchange'
import CoinDetails from './component/CoinDetails'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/coins' element = {<Coins/>}/>
        <Route path='/exchange' element = {<Exchange/>}/>
        <Route path='/coin/:id' element = {<CoinDetails/>}/>
      </Routes>
          <Footer/>



    </Router>
  
    </>
  )
}

export default App

