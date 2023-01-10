import React from "react"
import { Link } from "react-router-dom"
import '../styles/checkout.css'





function PaymentOptions ({ }){

   

    return( 
        <div className="checkout-container">
         
                <h2>Payment Options</h2>
                    <div className="checkout-container-inside"> 
                        <h4 className="checkout-container-font-black">Delivery</h4><span className="span-this-black"></span>
                        <h4 className="checkout-container-font-this">Options</h4><span className="span-this"></span>
                        <h4 className="checkout-container-font">Payment</h4>
                    </div>
                    <div className="boxed">
                       <div className="radio-box">
                        <div>
                            <input type= "radio"  />
                        </div>
                        <div>
                            <h2 className="pay-with">Pay With Debit/Credit Card</h2>
                            <p className="pay-with-p">You'll be Charged 100NGN Fixed transaction fee</p>
                        </div>      
                    </div>
                    <div className="radio-box">
                        <div>
                            <input type= "radio" />
                        </div>
                        <div>
                            <h2 className="pay-with">Pay Cash</h2>
                            <p className="pay-with-p">You'll be Charged 100NGN Fixed transaction fee</p>
                        </div> 
                    </div> 
                    </div>
                   
            <Link to = "/payment"> <button  className="button-span">Next</button></Link>
                
        </div> 
       
    )}

export default PaymentOptions