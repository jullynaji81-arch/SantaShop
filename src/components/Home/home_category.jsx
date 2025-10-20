import React from 'react'

function Categories() {
  return (
    <section className="category">
      <div className="section__container category__container">
        <img src="assets/bg-png.png" alt="bg" className="category__bg" />
        <h2 className="section__header">
          Shop by our <span>festive</span> Categories
        </h2>
        <p className="section__description">
          Our wide range of categories are created using the best materials to
          create an amazing white christmas effect.
        </p>
        <div className="category__flex">
          <div className="category__card">
            <img src="assets/category-1.png" alt="category" />
            <h4>Toys</h4>
          </div>
          <div className="category__card">
            <img src="assets/category-2.png" alt="category" />
            <h4>Gifts</h4>
          </div>
          <div className="category__card">
            <img src="assets/category-3.png" alt="category" />
            <h4>Decors</h4>
          </div>
          <div className="category__card">
            <img src="assets/category-4.png" alt="category" />
            <h4>Snacks</h4>
          </div>
          <div className="category__card">
            <img src="assets/category-5.png" alt="category" />
            <h4>Cloths</h4>
          </div>
          <div className="category__card">
            <img src="assets/category-6.png" alt="category" />
            <h4>Sweets</h4>
          </div>
          <div className="category__card">
            <img src="assets/category-7.png" alt="category" />
            <h4>Claus</h4>
          </div>
          <div className="category__card">
            <img src="assets/category-8.png" alt="category" />
            <h4>More</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Categories