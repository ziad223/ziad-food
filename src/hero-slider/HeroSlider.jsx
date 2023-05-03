import React from 'react';
import {sliderData} from '../SliderData';
import Slider from 'react-slick';
import './HeroSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsChevronLeft , BsChevronRight} from 'react-icons/bs';


const HeroSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='slider'>
        <BsChevronLeft/>
       <div className="container">
        <Slider {...settings}>
         {sliderData.map(item =>{
          return (
            <div className='slider'>
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
          )
         })}
        </Slider>
       </div>
       <BsChevronRight/>
    </div>
  )
}

export default HeroSlider