import React from 'react';
import '../styles/App.css'
import {useCart} from 'react-use-cart'
import '../styles/cart.css'
import { Link } from 'react-router-dom';



const Cart = ()=>{
 
  const {
    isEmpthy,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()


  if(isEmpthy) 
 return ("Your Cart is Empty")
  return(
    <>
    <div>
        {/* <Link to = '/' className='div-continue' >
          <button className='button-continue' >Continue Shopping </button>
        </Link> */}
      </div>
    <section className='section-main'>
      
      <div  className='section-cart'>
        <div>
          <div className='table-header-div'>
            <h2  className='table-header'>Cart [ {totalUniqueItems} ] total Items: [ {totalItems} ]</h2>
          </div>
          <table>  
            <thead >
              <tr>
                <td>Product</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td></td>
              </tr>
              </thead>
            {items.map((items, id)=>{
              return(
              <>
           
              <tbody key = {id}>
                <tr>
                  <td >
                    <img style={{width:"6em", height: "6em"}}src = {items.image} alt ={items.name}/>
                  </td>
                  <td>
                    <b>{items.name}</b>
                  </td>
                  <td>
                    {items.price}
                  </td>
                  <td>
                     ({items.quantity})
                  </td>
                  <td>
                    <div className='spread-buttons'>
                        <div className='spread-button-between'>
                            <button className='button-add'
                            onClick={()=>updateItemQuantity(items.id, items.quantity - 1)}>-</button>
                          <button className='button-add'
                            onClick={()=>updateItemQuantity(items.id, items.quantity + 1)}>+</button>
                        </div>
                      <button className='button-remove'
                      onClick={()=>removeItem(items.id)}>Remove</button>
                    </div>
                    
                    </td>
                </tr>
              </tbody>
        
              </>
     
              )
            })}
          </table>
        </div>
        <div className='div-left'>
        <div className='flex-button'>
          <button className='button-clear'
            onClick={()=>emptyCart()}>Clear Cart</button>
            <Link to ="/checkout">
              <button className='button-pay'>Pay Now</button>
            </Link>
          
        </div>
        <div>
          <h2 className='total-price'>Total Price: ${cartTotal}</h2>
        </div>
        
        </div>
        
      </div>
    </section>
    </>
    
  )
}

export default Cart;
