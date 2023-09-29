import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import image from './Coleen.JPG';
import WeatherWidget from './WeatherWidget';
import RandomQuote from '../RandomQuote/RandomQuote';

const ProfilePage = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data from an API (e.g., OpenWeatherMap)
    // You'll need to replace 'YOUR_API_KEY' and 'YOUR_LOCATION' with actual values
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=55cf49048b08f439e8199fa0d44d812c`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, []);



  return (
    <>
      <Navbar />
      <div className="profile-box">
        
        
        <div className="container-profile">
        
          <div className="profile-card">
            
            <div className="profile-picture">
              <img src={image} alt="" />
            </div>
            <div className="profile-details">
              <div className="profile-header">
                <h1>Welcome</h1>
              </div>
              <div className="profile-info">
                <div className="profile-name">Harley Quinn</div>
                <div className="profile-username">Property of Puddin'</div>
                <div className="profile-bio">"I'm Rubber, You're Glue, Whatever You Say Bounces Off Me And Makes A Six-Inch-Diameter Exit Wound In You."</div>
              </div>
            </div>
            <div className="profile-stats">
              <div className="profile-followers">
                <span>Lives in: </span>
                <span>Gotham, USA</span>
              </div>
              <div className="profile-following">
                <span>Recipes: </span>
                <span>25</span>
              </div>
              <div className="profile-repos">
                <span>Favorite: </span>
                <span>20</span>
              </div>
            </div>
            <Link to="/cooking-tips" className="profile-button">
              Go to Cooking Tips Page
            </Link>
          </div>
          <div className='widgets'>
            <RandomQuote />
            <WeatherWidget weatherData={weatherData} /> {/* Pass weatherData as a prop */}

          </div>
        </div>
      </div>

      
      <Footer />
    </>
  );
};

export default ProfilePage;
