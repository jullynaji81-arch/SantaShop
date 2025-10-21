import React from 'react'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
function HomeShopping  ()  {
      useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    
    // تطبيق ScrollReveal على عناصر الهيدر فقط
    
 ScrollReveal().reveal(".shopping__card", {
  ...scrollRevealOption,
  interval: 500,
});
  }, []);
  return (
  <section className="shopping__container">
      <div className="shopping__header">
        <h2 className="section__header">
          Finish your <span>shopping</span> checklist
        </h2>
        <p className="section__description">
          It's easy to forget all the extra bits and pieces you'll need
          throughout Christmas, so to save any last-minute dashes, here's our
          checklist.
        </p>
        <div className="shopping__grid">
          <div className="shopping__card">
            <h3>$10.75</h3>
            <img src="assets/shopping-1.jpg" alt="shopping" />
            <h4>Drum Deooocors</h4>
          </div>
          <div className="shopping__card">
            <h3>$75.50</h3>
            <img src="assets/shopping-2.jpg" alt="shopping" />
            <h4>Bell Decors</h4>
          </div>
          <div className="shopping__card">
            <h3>$20.00</h3>
            <img src="assets/festive.png" alt="shopping" />
            <h4>Santa Cap Pack</h4>
          </div>
          <div className="shopping__card">
            <h3>$112.00</h3>
            <img src="assets/shopping-4.jpg" alt="shopping" />
            <h4>Gift Decors</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeShopping