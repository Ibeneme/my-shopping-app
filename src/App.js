import React from 'react';
import './styles/App.css'
import NavBar from './components/Navbar';
import { Routes, Route} from "react-router-dom"
import Home from './components/home';
import Cart from './components/cart';
import Checkout from './components/Checkout';
import PaymentOptions from './components/PaymentOptions';
import Payment from './components/Payment';
import Success from './components/success';
import Items from './components/first';

function App() {
  return (
    <div className="App">
      <NavBar style={{position:"absolute", top:0, alignSelf:'stretch', flex: 1, right:0, left:0 }}/>
  
      
        <Routes>
            <Route path = "/" element={<Items />} />
            <Route path ="/home" element = {<Home />} />
            <Route path = "cart" element={<Cart />} />
            <Route path = "/checkout" element={<Checkout />} />
            <Route path = "/checkout/summary" element = {<PaymentOptions />}/>
            <Route path ="/payment" element = {<Payment />} />
            <Route path = "/success" element = {<Success />} />
        </Routes>
  
      
      
        
    </div>
  );
}

export default App;
