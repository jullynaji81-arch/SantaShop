import React from 'react'
import { Link } from 'react-router-dom';

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
          <li>  <Link to="/"> Home</Link></li>
          <li>  <Link to="/about"> About</Link></li>
          <li><Link to="/shop"> Shop </Link></li>
   
        </ul>
          
      </div>
    </footer>
  )
}
export default Footer