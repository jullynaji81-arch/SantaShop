import React from 'react'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
function AboutContact  ()  {
     useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    
  ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1000,
});


  }, []);
  return (
   <section className="coupon">
      <div className="section__container coupon__container">
        <h2 className="section__header">
          Join now and win some <span>amazing</span> coupons
        </h2>
        <form action="/" className="coupon__form">
          <input type="text" placeholder="Enter Your Email" />
          <button className="btn"><i className="ri-arrow-right-line"></i></button>
        </form>
      </div>
    </section> 
     )
}
export default AboutContact