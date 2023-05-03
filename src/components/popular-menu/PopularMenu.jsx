import React from 'react';
import popularMenuFood from '../../Product';
import './popularMenu.css';

const PopularMenu = () => {
  return (
    <section className='popular z'>
      <div className="container">
      <h2>Popular Food Menu</h2>
    
        
           {popularMenuFood.map(item=>{
         return  <div className="cards ">
          <div className="card bg-dark" style={{width: '18rem'}}>
  <img className="card-img-top" src={item.imgUrl} alt="Card image cap" />
<div className="icons">
<i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div>


   


  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
 <div className="cart-price">
 <p className="card-text">Prise is : <b>${item.price}</b> </p>
 <i class="fa-solid fa-cart-shopping"></i>
 </div>
  </div>
</div>

         </div>


           })}
          </div>
     
    </section>
  )
}

export default PopularMenu