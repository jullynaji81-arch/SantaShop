import React from 'react'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

function  Header  ()  {
     useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    
  //  تطبيق ScrollReveal على عناصر الهيدر فقط
    
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__content", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".header__tag", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});

  }, []);
  return (
     <header className="header">
      <nav>
        <div className="nav__logo">
          <img src="assets/logo-white.png" alt="logo" />
        </div>
        <div className="nav__actions">
          <Link to="/"> Home</Link>
          <Link to="/shop"> Shop </Link>
          <Link to="/about"> About</Link>
          <Link to="/login"><i className="ri-login-box-line"></i></Link>
          <Link to="/regiser"><i className="ri-user-add-line"></i></Link>
        </div>
      </nav>
      <div className="section__container header__container">
        <img src="assets/header.png" alt="header" />
        <div className="header__content">
          <h4>Begin your<br />festival with...</h4>
          <p>
            This is an easy to install christmas tree which your kids or office
            colleagues will have a lot of fun decorating.
          </p>
        </div>
        <div className="header__tag">
          Buy This Product <span><i className="ri-shopping-basket-line"></i></span>
        </div>
      </div>
    </header>  
  )
}
export default Header