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
    const recipes = [
        {
            
            id: 1,
            title: "Cinnamon-Apple Babka",
            imageSrc: "images/cinnamon-apple-babka.jpg",
            link: "https://www.foodandwine.com/cinnamon-apple-babka-6826382",
        },
        {
            id: 2,
            title: "Tomato and Goat Cheese Tart",
            imageSrc: "images/tomato-goatcheese-tart.jpg",
            link: "https://www.foodandwine.com/recipes/tomato-and-goat-cheese-tart",
        },
        {
            id: 3,
            title: "Cinnamon Roses",
            imageSrc: "images/cinnamon-roses.jpg",
            link: "https://www.foodandwine.com/recipes/cinnamon-roses",
        },
        {
            id: 4,
            title: "Carnitas with Green Mojo",
            imageSrc: "images/carnitas-green-mojo.jpg",
            link: "https://www.foodandwine.com/recipes/turkey-carnitas",
        },
        {
            id: 5,
            title: "Dragon Roll",
            imageSrc: "images/dragon-roll.jpg",
            link: "https://www.foodandwine.com/dragon-roll-7254587",
        },
        {
            id: 6,
            title: "Silky Zucchini Soup",
            imageSrc: "images/silky-zucchini-soup.jpg",
            link: "https://www.foodandwine.com/recipes/silky-zucchini-soup",
        },
        {
            id: 7,
            title: "Piadina (Italian Flatbread)",
            imageSrc: "images/piadina-italian-flatbread.jpg",
            link: "https://www.foodandwine.com/recipes/piadina-italian-flatbread",
        },
        {
            id: 8,
            title: "Carrot Cake Cupcakes",
            imageSrc: "images/carrot-cake-cupcakes.jpg",
            link: "https://www.foodandwine.com/vegan-carrot-cake-cupcakes-7971640",
        },
        {
            id: 9,
            title: "Matcha Mochi",
            imageSrc: "images/matcha-mochi.jpg",
            link: "https://www.foodandwine.com/recipes/matcha-mochi",
        },
        {
            id: 10,
            title: "Caramelized Onion Dip",
            imageSrc: "images/caramelized-onion-dip.jpg",
            link: "https://www.foodandwine.com/recipes/caramelized-onion-dip",
        },
        {
            id: 11,
            title: "Bavarian Pretzels",
            imageSrc: "images/bavarian-pretzels.jpg",
            link: "https://www.foodandwine.com/recipes/bavarian-pretzels",
        },
        {
            id: 12,
            title: "Ligurian Olive Oil Cake",
            imageSrc: "images/ligurian-olive-oil-cake.jpg",
            link: "https://www.foodandwine.com/recipes/ligurian-olive-oil-cake",
        },
        // Add more recipes as needed
    ];

    return (
        <>
          <Navbar />
          <div className="category-box">
            <div className="category-card-container">
              <h1 className="category-title">Top rated recipes</h1>
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
    
              <div className="recipe-cards">
                {recipes.map((recipe) => (
                  <div
                    className={`recipe-card recipe-card-${recipe.id}`}
                    key={recipe.id}
                    style={{ backgroundImage: `url(${recipe.imageSrc})` }}
                  >
                    <h2>{recipe.title}</h2>
                    {/* You can remove the <img> element since background images are being used */}
                    <p>{recipe.description}</p>
                    <a
                      href={recipe.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="recipe-button"
                    >
                      View Recipe
                    </a>
                  </div>
                ))}
              </div>
    
              {/* Link to another route */}
              <Link to="/cooking-tips" className="profile-button">
                Go to Cooking Tips Page
              </Link>
            </div>
          </div>
          <Footer />
        </>
      );
    };
    
    export default CategoryPage;