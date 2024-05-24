// // RecipeCard Component
// RecipeCard Component

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecipeCard = (recipe) => {
  // const { id, recipeImg, title, description, keywords } = recipe;
  console.log(recipe);
  const navigate = useNavigate();

  // Function to handle image click and navigate to product details
  const handleImageClick = (id) => {
    console.log(id);
    // Navigate to the product details page with the product's ID
    navigate(`/recipe/${id}`);
  };

  return (
    <>
      <div id="home-view" key={recipe.recipe.id}>
        <div className="recipe-card">
          <img
            src={recipe.recipe.recipeImg}
            alt="Cake img1"
            height={140}
            width={280}
            onClick={() => handleImageClick(recipe.recipe.id)} // Handle image click to navigate
          />
          <div>
            <h2>{recipe.recipe.title}</h2>
            <h6>{recipe.recipe.description}</h6>

            <div className="keywords">
              {recipe.recipe.keywords.map((kwrd) => (
                <div className="keyword">
                  <label>{kwrd.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
