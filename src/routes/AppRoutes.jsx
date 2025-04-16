// AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroPage from '../pages/HeroPage';
import PlacePage from '../pages/PlacePage';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/places" element={<PlacePage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;
