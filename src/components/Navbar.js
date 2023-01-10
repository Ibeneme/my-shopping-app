
import { HiShoppingCart} from 'react-icons/hi'
import "../styles/App.css"
import { useCart } from "react-use-cart"
import {Link} from "react-router-dom"
import {FaHome }from 'react-icons/fa'

function NavBar(){
    const {
        isEmpty,
        totalItems}
        = useCart()
    
    return ( 
        <div>
            <header>
                <Link to = '/home' style={{ color:"white",
                    textDecoration: "none" 
                    }}>
                    <h4>Shoppermans.com <FaHome /></h4>
                </Link>
                <Link to ="cart">
                    <h2 style={{ fontSize:"1em", color:"white",
                    textDecoration: "none", 
                    justifyContent:"baseline"}} >Cart <HiShoppingCart style={{fontSize:"1em"}} />
                    {!isEmpty && <span style={{borderRadius: "23em", fontSize:"0.8em", padding: "0.9em",marginLeft:"0.4em", backgroundColor: "red", color: "white"}}>{totalItems}</span>}</h2>
                </Link>
            </header>
        </div>
     )}
  
  export default NavBar;
  