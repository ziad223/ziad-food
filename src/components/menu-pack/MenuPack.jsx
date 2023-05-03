import React from 'react';
import './menu-pack.css';
import { fastFoodProducts , riceMenuProducts , pizzaProducts , dessertProducts , coffeeProducts } from '../../Product';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import { useEffect } from 'react';

const MenuPack = () => {
    const [filter , setFilter] = useState("fast-food");
    const [products , setProducts] = useState(fastFoodProducts);
   useEffect(()=>{
    if(filter === "fast-food"){
      setProducts(fastFoodProducts);
    }
    if(filter === "rice"){
        setProducts(riceMenuProducts);
      }
      if(filter === "pizaa"){
        setProducts(pizzaProducts);
      }
      if(filter === "desert-food"){
        setProducts(dessertProducts);
      }
      if(filter === "coffe"){
        setProducts(coffeeProducts);
      }

    }, [filter])
  return (
    <section className='menu-pack'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mb-4" ><h3>Our Menu Pack</h3></div>
                <div className="col-lg-12 text-center mb-4">
                    <button className= {`filter-button ${filter === 'fast-food' ? 'active-btn' : ''}`} onClick={()=> setFilter("fast-food")}>Fast Food</button>
                    <button className= {`filter-button ${filter === 'rice' ? 'active-btn' : ''}`}  onClick={()=> setFilter("rice")}>Rice Menu</button> 
                    <button className= {`filter-button ${filter === 'pizaa' ? 'active-btn' : ''}`} onClick={()=> setFilter("pizaa")}>Pizza</button> 
                    <button className= {`filter-button ${filter === 'desert-food' ? 'active-btn' : ''}`} onClick={()=> setFilter("desert-food")}>Desserts</button> 
                    <button className= {`filter-button ${filter === 'coffe' ? 'active-btn' : ''}`} onClick={()=> setFilter("coffe")}>Coffee</button> 
                    </div>
                    {products.map(item=>{
                      return  <div className="col-lg-3 mb-2 ca" >
                            <ProductCard item = {item} key={item.id}/>
                        </div>
                    })}
            </div>
        </div>
    </section>
  )
}

export default MenuPack