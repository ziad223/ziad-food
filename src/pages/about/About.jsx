import React from 'react';
import './about.css';
import img1 from '../../images/res1.jpg';
import img2 from '../../images/res2.jfif';
import img3 from '../../images/res3.jfif';
import img4 from '../../images/res4.jfif';
import img5 from '../../images/res5.avif';
import img6 from '../../images/res6.jpg';

const About = () => {
  return (
    <div className='about'>
        <div className="about-img">
        <img src={img1} alt="photo" />
        <img src={img2} alt="photo" />
        <img src={img3} alt="photo" />
        <img src={img4} alt="photo" />
        <img src={img5} alt="photo" />
        <img src={img6} alt="photo" />
        </div>
        <div className="about-details">
        Hello to You! You will find food, harmony, and laughter here.”<br />
“Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.”<br />
“We welcome your appetite. Let our food satisfy your stomach.”<br />
Let Food Be Thy Medicine, And Let Thy Medicine Be Food. Hippocrates<br />
“Let’s Eat Together! ”<br />
“Welcome to our place. You will find happiness and food here. ”<br />
Food Is Our Common Ground, A Universal Experience.<br />
Love And Food It Is All About Spice.<br />
You Don’t Need A Silver Fork To Eat Good Food. Paul Prudhomme<br />
Health Requires Healthy Food.<br />
        </div>
    </div>
  )
}

export default About