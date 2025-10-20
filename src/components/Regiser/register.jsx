import React from 'react'
import { Link } from 'react-router-dom';

function Register  ()  {
  return (
 <div className="containerdoz">
      <div className="containerdoz__content">
        <h2>Santa</h2>
        <h3>Welcome back!</h3>
        <h1>Register</h1>
        <form action="/">
          <label for="name">Name</label>
          <div className="input__row">
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <label for="email">Email</label>
          <div className="input__row">
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="input__header">
            <label for="password">Password</label>
           <Link to="/">Forgot Password?</Link>
          </div>
          <div className="input__row">
            <input type="password" id="password" placeholder="Password" />
            <span id="password-eye"><i className="ri-eye-off-line"></i></span>
          </div>
          <button>Register</button>
        </form>
        <h6>or continue with</h6>
        <div className="logins">
         <Link to="/"><img src="assets/search.png" alt="google" /></Link>
         <Link to="/"><img src="assets/github.png" alt="github" /></Link>
          <Link to="/"><img src="assets/facebook.png" alt="facebook" /></Link>
        </div>
        <p>I  have an account !  <Link to="/login">Sign in </Link></p>
      </div>
      <div className="containerdoz__image">
        <img src="assets/headerlogin.png" alt="header" />
      </div>
    </div>
  )
}
export default Register