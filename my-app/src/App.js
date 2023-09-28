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
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} /> {/* Updated syntax */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Updated syntax */}
        <Route path="/category" element={<CategoryPage />} /> {/* Updated syntax */}
        <Route path="/diary" element={<DiaryPage />} /> {/* Updated syntax */}
        <Route path="/" element={<AnimatedIcons />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Footer />} />
        <Route path="/cooking-tips" element={<CookingTipsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
