import React from 'react';
import './Testmonails.css';
import testimonailsImg from '../../images/review1.png';

const Testmonails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
   <section className='testmonails'>
   <div className="container">
    <div className="row">
        <div className="col-lg-6">
         <h2>What Our Customers are saying</h2>
         <div className='slider'>
            <div>
                <div className="sigle_testimonail">
                 <p className="review_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores, magnam illo iusto libero deserunt. Praesentium sint nobis sit porro explicabo, sunt quasi aut deleniti veritatis quibusdam doloribus enim.
                 </p>
                 <div className="icons">
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
</div>
                 <h3>Salma Awaad</h3>
                 <h4>Backend Developer</h4>
                </div>
            </div>
            <div>
                <div className="sigle_testimonail">
                 <p className="review_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores, magnam illo iusto libero deserunt. Praesentium sint nobis sit porro explicabo, sunt quasi aut deleniti veritatis quibusdam doloribus enim.
                 </p>
                 <div className="icons">
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
</div>
                 <h3>Nour Atef</h3>
                 <h4>Frontend Developer</h4>
                </div>
            </div>
            <div>
                <div className="sigle_testimonail">
                 <p className="review_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores, magnam illo iusto libero deserunt. Praesentium sint nobis sit porro explicabo, sunt quasi aut deleniti veritatis quibusdam doloribus enim.
                 </p>
                 <div className="icons">
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
<i class="fa-solid fa-star s"></i>
</div>
                 <h3>Kareem Hassan</h3>
                 <h4>Web Designer</h4>
                </div>
            </div>
           
            
         </div>
        </div>
            <div className="col-lg-6">
                <img src={testimonailsImg} alt="" className=' i' />
            </div>
    </div>
   </div>
   </section>
  )
}

export default Testmonails