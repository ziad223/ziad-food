import React from 'react';
import HeroSlier from '../../hero-slider/HeroSlider';
import PopularMenu from '../../components/popular-menu/PopularMenu';
import MenuPack from '../../components/menu-pack/MenuPack';
import ChooseUs from '../../components/chooseUs/ChooseUs';
import Testimonails from '../../components/Testimonails/Testmonails';

const Home = () => {
  return (
    <div>
    <HeroSlier/>
    <PopularMenu/>
    <MenuPack/>
    <ChooseUs/>
    <Testimonails/>

    </div>
  )
}

export default Home