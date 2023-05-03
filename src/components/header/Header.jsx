import React from 'react';
import { useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuRef = useRef();
    const menuToggle =() =>{
        menuRef.current.classList.toggle("active_menu");
    }
  return (
    <header className="header">
        <div className="container">
            <div className="navigation">

                <div className="logo">
                    <h2>
                        <span><i className="fa-solid fa-utensils"></i></span> Ziad Food
                        </h2>
                </div>
                <div className="nav_menu" onClick={menuToggle}  ref={menuRef}>
                <div className="nav_list_wrapper d-flex align-items-center justify-content-between">

                 <ul className="nav_list">
                  <Link style={{textDecoration : 'none'}} to='/' className="nav_item"> <a href="#">Home</a> </Link>
                  <Link style={{textDecoration : 'none'}} to='/about' className="nav_item"> <a href="#">About Us</a> </Link>
                  <Link style={{textDecoration : 'none'}} to='/contact' className="nav_item"> <a href="#">Contact Us</a> </Link>
                  <Link style={{textDecoration : 'none'}} to='/resturants' className="nav_item"> <a href="#">Restaurants </a> </Link>
                  <Link style={{textDecoration : 'none'}} to='/partner' className="nav_item"> <a href="#">Become a partner</a> </Link>
                 </ul>
                
                 </div>
                </div>
                <div>
                </div>
           
                <div className="mobile_menu">
                    <span><i className="fa-solid fa-bars" style={{cursor : 'pointer'}} onClick={menuToggle}></i></span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header