import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router-dom";

function Inputs() {
  const [recipe, setRecipe] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();
  // Fetch initial data from "/api/recipes" using useEffect
  useEffect(() => {
    axios
      .get("/api/recipes")
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = recipe.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(recipe);
    }
  };
  const handleAddClick = () => {
    navigate("/recipes/add");
  };
  return (
    <>
      {/* {console.log(recipe)} */}
      <div id="controls">
        <div className="input-box">
          <span className="label">
            <label>FIND RECIPES</label>
          </span>
          <input
            icon="search"
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
          />

          <ul>
            {searchInput.length > 1
              ? filteredResults.map((item) => (
                  <RecipeCard key={item.id} recipe={item} />
                ))
              : recipe.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
          </ul>
        </div>
        <button class="btn btn-black" onClick={() => handleAddClick(recipe.id)}>
          Add a Recipe
        </button>
      </div>
    </>
  );
}

export default Inputs;
