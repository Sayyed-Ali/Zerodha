import './App.css'
import HomePage from './landing_page/home/HomePage'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './landing_page/signup/Signup'
import SupportPage from './landing_page/suppport/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
