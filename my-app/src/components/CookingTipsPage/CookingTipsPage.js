import React from 'react';
import './CookingTipsPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CookingTipsPage = () => {
  return (
    <>
      <div className="your-page-container">
        <Navbar />
        <h1>Cooking Tips and Techniques</h1>
        <p>Here are some valuable cooking tips and techniques to improve your culinary skills.</p>

        <div className="tips-container">
          <div className="tips-card">
            <h2>1. Use a sharp knife</h2>
            <p>There’s nothing worse than a dull knife when it comes to cutting and chopping. A dull knife can slip off of foods and cut you, or it can slip off of foods and not cut them. Either way, it’s a recipe for disaster. Keep your knives sharp and your fingers safe by sharpening your knives regularly.</p>
          </div>
          <div className="tips-card">
            <h2>2. Salt your pasta water</h2>
            <p>When you’re cooking pasta, don’t forget to salt the water. This is your only chance to season the pasta itself. If you don’t salt the water, you’ll end up with bland pasta. And who wants that?</p>
          </div>
          <div className="tips-card">
            <h2>3. Taste as you go</h2>
            <p>Don’t wait until the end of the cooking process to taste your food. Taste as you go. This will allow you to adjust the seasoning as you cook, and it will also allow you to make sure that the food is cooking properly.</p>
          </div>
          <div className="tips-card">
            <h2>4. Use fresh herbs</h2>
            <p>When it comes to cooking, fresh herbs are always better than dried herbs. Fresh herbs have a more vibrant flavor, and they also have a more vibrant color. If you don’t have fresh herbs on hand, you can always use dried herbs, but you’ll have to use more of them to get the same flavor.</p>
          </div>
          <div className="tips-card">
            <h2>5. Use a meat thermometer</h2>
            <p>When it comes to cooking meat, it’s important to use a meat thermometer. This will allow you to make sure that the meat is cooked to the proper temperature, which will help you avoid foodborne illness.</p>
          </div>
          <div className="tips-card">
            <h2>6. Use a timer</h2>
            <p>When it comes to cooking, it’s important to use a timer. This will allow you to make sure that you don’t overcook or undercook your food.</p>
          </div>
          <div className="tips-card">
            <h2>7. Use a scale</h2>
            <p>When it comes to cooking, it’s important to use a scale. This will allow you to make sure that you’re using the proper amount of ingredients.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookingTipsPage;
