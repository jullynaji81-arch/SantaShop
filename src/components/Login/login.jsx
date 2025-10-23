import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Login  ()  {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    // هنا ممكن تضيف أي عملية تسجيل فعلية قبل الانتقال
    navigate("/"); // يذهب إلى صفحة Home
  };
  return (
 <div className="containerdoz">
      <div className="containerdoz__content">
        <h2>Santa</h2>
        <h3>Welcome back!</h3>
        <h1>Log In</h1>
        <form action="/"  onSubmit={handleRegister}>
          <label for="email">Email</label>
          <div className="input__row">
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="input__header">
            <label for="password">Password</label>
           <Link to="/login">Forgot Password?</Link>
          </div>
          <div className="input__row">
            <input type="password" id="password" placeholder="Password" />
            <span id="password-eye"><i className="ri-eye-off-line"></i></span>
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <h6>or continue with</h6>
        <div className="logins">
         <Link to="/"><img src="assets/search.png" alt="google" /></Link>
         <Link to="/"><img src="assets/github.png" alt="github" /></Link>
          <Link to="/"><img src="assets/facebook.png" alt="facebook" /></Link>
        </div>
        <p>Don't have an account yet?  <Link to="/sinup">Sign up for free</Link></p>
      </div>
      <div className="containerdoz__image">
        <img src="assets/headerlogin.png" alt="header" />
      </div>
    </div>
  )
}
export default Login