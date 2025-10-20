import React from 'react'

function Footer() {
  return (
  <footer className="section__container footer__container">
      <div className="footer__col">
        <div className="footer__logo">
          <img src="assets/logo-red.png" alt="logo" />
        </div>
        <p className="section__description">
          Santa's Shop is a conceptualised Christmas shopping platform acress
          South Asia and certain parts of America.
        </p>
      </div>
      <div className="footer__col">
        <ul className="footer__links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Franchise</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <ul className="footer__socials">
          <li>
            <a href="#"><i className="ri-facebook-fill"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-instagram-line"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-linkedin-fill"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer