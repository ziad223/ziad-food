import React from 'react';
import './productCard.css';


const ProductCard = (props) => {
  return (
      <div className="cardss ">
    <div className="card bg-dark d" style={{width: '18rem'}}>
<img className="card-img-top" src={props.item.imgUrl} alt="Card image cap" />
<div className="icons">
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>





<div className="card-body">
<h5 className="card-title">{props.item.title}</h5>
<div className="cart-price">
<p className="card-text">Prise is : <b>${props.item.price}</b> </p>
<i class="fa-solid fa-cart-shopping"></i>
</div>
</div>
</div>

   </div>
  )
}

export default ProductCard