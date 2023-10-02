import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedIcons from './components/AnimatedIcons/AnimatedIcons';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import DiaryPage from './components/DiaryPage/DiaryPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CookingTipsPage from './components/CookingTipsPage/CookingTipsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/" element={<AnimatedIcons />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Footer />} />
        <Route path="/cooking-tips" element={<CookingTipsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
