// Recipe Component
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import PropTypes from "prop-types";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useeffect");
    fetch(`/api/recipe.id/${id}`)
      .then((res) => res.json())
      .then(({ recipe }) => {
        setRecipeData(recipe);
        console.log("hello", recipe);

        console.log("hello-1:", recipeData);
      });
  }, []);
  const handleImageClick = () => {
    navigate(`/`);
  };
  console.log("recipeData", recipeData);
  if (recipeData)
    return (
      <>
        <div className="recipe-detail" key={recipeData.id}>
          <button className="btn small-btn" onClick={() => handleImageClick()}>
            X
          </button>
          <h2>LET'S COOK</h2>
          <div>
            {
              <img
                src={recipeData.recipeImg}
                alt="Cake img1"
                height={140}
                width={280}
              />
            }
            <div className="recipe-details">
              <div className="recipe-title">
                <h2>{recipeData.title}</h2>
              </div>
              <div className="icon">
                <Icon type={recipeData.dishType} />
              </div>
            </div>
            <h3>{recipeData.description}</h3>
            {recipeData.keywords &&
              recipeData.keywords?.map((kwrd, label) => (
                <div className="keywords">
                  <div className="keyword">
                    <label>{kwrd.label}</label>
                  </div>
                </div>
              ))}
            <h2>Ingredients</h2>
            <ul>
              {recipeData.ingredients &&
                recipeData.ingredients?.map((id, label) => (
                  <div className="ingredients">
                    <li>
                      <label>{id.label}</label>
                    </li>
                  </div>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ul>
              <p>
                <div className="instructions">{recipeData.instructions}\n</div>
              </p>
            </ul>
          </div>
        </div>
      </>
    );
  else return <>Loading</>;
};

{
  /* Recipe.prototype = {
  recipeId: PropTypes.string.isRequired,
  onExit: PropTypes.func,
}; */
}
export default Recipe;
