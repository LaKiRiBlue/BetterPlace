import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import AnimatedIcons from '../AnimatedIcons/AnimatedIcons';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';

const HomePage = () => {
  const sliderImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = (currentImage + 1) % sliderImages.length;
      setCurrentImage(nextImage);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentImage, sliderImages.length]);

  const handleNextImage = () => {
    const nextImage = (currentImage + 1) % sliderImages.length;
    setCurrentImage(nextImage);
  };

  return (
    <>
      <div className="home-box">
        <div className="home-card">
          <h1 className="home-title">Better Place</h1>
          <p>This app is about FOOD.</p>
          <p>Love and share the recipes, keep track on your nutrition intake, learn new skills.</p>
          <p>If you have any concerns about your health, please consult a medical professional.</p>
          <Navbar />
          <div className="home-buttons">
            <Link to="/profile" className="home-button">Profile</Link>
            <Link to="/category" className="home-button">Recipes</Link>
            <Link to="/diary" className="home-button">Diary</Link>
            <Link to="/login" className="home-button">Login</Link>
            <Link to="/register" className="home-button">Register</Link>
          </div>
          <Link to="/cooking-tips" className="profile-button">
            Go to Cooking Tips Page
          </Link>
        </div>
        <AnimatedIcons />
      </div>
      <div className="slider-container">
        <img
          className="slider-image"
          src={sliderImages[currentImage]}
          alt="Slider"
        />
        <button className="slider-button" onClick={handleNextImage}>
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
