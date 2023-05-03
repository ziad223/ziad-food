import React from 'react';
import './slider.css';
import sliderData from '../../assets/fake-data/slider';
import Slider from 'react-slick';
const HeroSlider = () => {
  return (
    <div className='slider'>
       <div className="container">
        <Slider>
         {sliderData.map(item =>{
          <div>
            <div className="slider_wrapper d-flex align-items-center justify-content-between pt-5">

              <div className="slider_content w-50 ps-2">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button className="btn ">Explore Food</button>
              </div>
              <div className="slider_img w-50">
                <img src={item.imgUrl} alt="" className='w-100' />
              </div>
            </div>
          </div>
         })}
        </Slider>
       </div>
    </div>
  )
}

export default HeroSlider