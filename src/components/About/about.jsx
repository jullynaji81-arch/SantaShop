import React from 'react'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
function   About  ()  {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    
    // تطبيق ScrollReveal على عناصر الهيدر فقط
    
ScrollReveal().reveal(".festive__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".festive__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".festive__content .festive__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
  }, []);


  return (
    <section className="section__container festive__container">
      <div className="festive__image">
        <div className="bg"></div>
        <img src="assets/festive.png" alt="festive" />
      </div>
      <div className="festive__content">
        <h2 className="section__header">Explore our range of festive collection</h2>
        <p className="section__description">
          HO HO HO! Merriest time of year is here. Decorate your home or office
          with our range of Christmas utility collection. If you want to make
          this more fun please explore our range of commodities.
        </p>
        <div className="festive__btn">
          <button className="btn">Explore The Range</button>
        </div>
      </div>
    </section>
  )
}
export default About