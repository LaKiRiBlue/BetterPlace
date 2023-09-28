import React from "react";
import "./DiaryPage.css";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DiaryPage = () => {
  return (
    <>
      <div className="diary-box">
        <div className="diary-page">
          <Navbar />
          <h1>Food Diary</h1>
          <p>Please enter the food you have eaten today:</p>
          <form className="meal-form">
            {/* Breakfast */}
            <div className="meal">
              <label htmlFor="breakfast">Breakfast:</label>
              <input type="text" id="breakfast" name="breakfast" placeholder="E.g., Scrambled Eggs" />
            </div>

            {/* Lunch */}
            <div className="meal">
              <label htmlFor="lunch">Lunch:</label>
              <input type="text" id="lunch" name="lunch" placeholder="E.g., Grilled Chicken Salad" />
            </div>

            {/* Dinner */}
            <div className="meal">
              <label htmlFor="dinner">Dinner:</label>
              <input type="text" id="dinner" name="dinner" placeholder="E.g., Spaghetti Bolognese" />
            </div>

            {/* Snacks */}
            <div className="meal">
              <label htmlFor="snacks">Snacks:</label>
              <input type="text" id="snacks" name="snacks" placeholder="E.g., Apple, Almonds" />
            </div>

            {/* Submit Button */}
            <button type="submit">Submit</button>
          </form>
          <Link to="/cooking-tips" className="profile-button">
            Go to Cooking Tips Page
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiaryPage;
