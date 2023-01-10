import React from 'react';
import { useState } from 'react';
import SearchFilter from 'react-filter-search'
import ProductCard from './ProductCard';
import Discount from './discount';

function Home(){
    const [searchInput] = useState(' ')

    
    
const product  = [
  
  {
      id: 6,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/308467/1.jpg?6120",
      name: "Kimono Swatch",
      price: "6500",
      discount: "20% off",
      specs: "Available in Brown, Yellow and red Colors"
  },
  {
      id: 5,
      image: "https://baajoo.com/wp-content/uploads/2022/03/mtp-vd02g-1eudf.jpg",
      name: "Hublot",
      price: "4500",
      discount: "20% off",
      specs: "Available in Brown, Yellow and red Colors"
  },
  {
    id: 3,
    image: "https://baajoo.com/wp-content/uploads/2021/09/ae-1000w-4bvdf.jpg",
    name: "Diamond Cut",
    price: "2100",
    discount: "20% off",
    specs: "Available in Brown, Yellow and red Colors"
},
{
    id: 4,
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/85677/1.jpg?7670",
    name: "Casio",
    price: "1200",
    discount: "20% off",
    specs: "Available in Brown, Yellow and red Colors"
},

]


  return (
    <div>
      <Discount />
      <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
        <h2 style={{ marginBottom: "0.2em", alignItems: "center", }}>Products</h2>
      </div>

         <div className='box-product'>
         <SearchFilter 
         value={searchInput}
         data={product}
              renderResults=
              {items =>(items.map((items, id )=>{
                return(
                <div key = {id} >
                  <ProductCard 
                    data = {items}
                    id = {items.id}
                    img ={items.image}
                   />
                </div> 
              )
            }))}
            />
    </div>
 
    </div>
  );
}

export default Home;
