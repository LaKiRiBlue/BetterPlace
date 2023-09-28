import React from "react";
import "./CategoryPage.css";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export const CategoryPage = () => {
    
    
    const categories = [
        {
            id: 1,
            title: "Salads ",
            description: "Top 10 best salads ",
            youtubeLink: "https://www.youtube.com/watch?v=y4ZwUr5srCM",
            imageSrc: "image1.jpg",
        },
        {
            id: 2,
            title: "Chicken",
            description: "25 chicken recipes",
            youtubeLink: "https://www.youtube.com/watch?v=jPOxWOE-3Xk",
            imageSrc: "image2.jpg",
        },
        {
            id: 3,
            title: "Fish",
            description: "Top 10 fish recipes 1",
            youtubeLink: "https://www.youtube.com/watch?v=IMqSu8wVWy4",
            imageSrc: "image1.jpg",
        },
        {
            id: 4,
            title: "Tofu",
            description: "5 tofu recipes I'm obsessed with",
            youtubeLink: "https://www.youtube.com/watch?v=Zpqa1nRteBk",
            imageSrc: "image2.jpg",
        },
        {
            id: 5,
            title: "Eggs",
            description: "9 egg recipes for breakfast",
            youtubeLink: "https://www.youtube.com/watch?v=5rBZ9S0b2Tc",
            imageSrc: "image1.jpg",
        },
        {
            id: 6,
            title: "Vegan",
            description: "Best 10 vegan recipes 2",
            youtubeLink: "https://www.youtube.com/watch?v=fUS-vCSqrCY",
            imageSrc: "image2.jpg",
        },
        {
            id: 7,
            title: "Gluten free",
            description: "Top 10 gluten free recipes",
            youtubeLink: "https://www.youtube.com/watch?v=F4lrltBvchk",
            imageSrc: "image1.jpg",
        },
        {
            id: 8,
            title: "One pot",
            description: "31 best one pot recipes",
            youtubeLink: "https://www.youtube.com/watch?v=M61viP3prdQ",
            imageSrc: "image2.jpg",

        },
        {
            id: 9,
            title: "Potatoes",
            description: "10 Mouthwatering Recipes For Potato Lovers ",
            youtubeLink: "https://www.youtube.com/watch?v=fLNWeEen35Y",
            imageSrc: "image1.jpg",
        },
        {
            id: 10,
            title: "For Kids",
            description: "30 Easy Recipes Kids Will Love",
            youtubeLink: "https://www.youtube.com/watch?v=LmBI4aMi1ck",
            imageSrc: "image2.jpg",

        },
        {
            id: 11,
            title: "Snacks",
            description: "Top 10 Late Night Snack Recipes",
            youtubeLink: "https://www.youtube.com/watch?v=YO3y2M8AMsc",
            imageSrc: "image1.jpg",
        },
        {
            id: 12,
            title: "Healthy snacks",
            description: "7 Healthy Recipes For Guilt-Free Snacking",
            youtubeLink: "https://www.youtube.com/watch?v=TkYwqeOApzU",
            imageSrc: "image2.jpg",
        },
    ];

    return (
        
        <>
        <Navbar />
            <div className="category-box">
            
            <div className="category-card-container">
                <h1 className="category-title">Top rated videos</h1>
                <p>"You don't need a silver fork to eat good food." Paul Prudhomme</p>
                <div className="category-cards">
                    {categories.map((category) => (
                        <div className="category-card" key={category.id}>
                            
                            <h2>{category.title}</h2>
                            <p>{category.description}</p>
                            <a
                                href={category.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="category-button"
                            >
                                Watch on YouTube
                            </a>
                        </div>
                    ))}
                </div>
                {/* Link to another route */}
                <Link to="/cooking-tips" className="profile-button">
            Go to Cooking Tips Page
          </Link>
                
            </div>
        <Footer />
            
        </div>
        </>
    );
};

export default CategoryPage;
