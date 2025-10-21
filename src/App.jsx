import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // 1. استيراد مكونات الـ Router
 // 1. استيراد مكونات الـ Router


import './index.css'
import  HomePage  from './pages/Home'
import  ShopPage  from './pages/Shop'
import  Aboutpage  from './pages/About'
import  Loginpage  from './pages/Login'
import  Registerpage  from './pages/Register'

function App() {
  return (
  <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} /> 
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/regiser" element={<Registerpage />} />

     
      </Routes>
   </HashRouter>
  )
}

export default App
