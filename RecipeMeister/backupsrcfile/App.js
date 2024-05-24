import React from "react";
import index from "./index.css";
import Inputs from "./components/Inputs";
import Recipe from "./components/Recipe";

import AddRecipe from "./components/AddRecipe";
import { Routes, Route } from "react-router-dom";
//  import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <div className="recipe-meister">
        <h1>Recipe Meister</h1>

        <Routes>
          <Route path="/" exact element={<Inputs />} />
          <Route path="/recipes/add" exact element={<AddRecipe />} />
          <Route path="/recipe/:id" exact element={<Recipe />} />
        </Routes>
      </div>
    </>
  );
}

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import RecipeCard from "./components/RecipeCard";
// import { server } from "./server";

// export default function App() {
//   const [recipe, setRecipe] = useState([]);
//   const [filteredRecipes, setFilteredRecipes] = useState([]);
//   const [filterTitle, setFilterTitle] = useState("");

//   // Fetch initial data from "/api/recipes" using useEffect
//   useEffect(() => {
//     console.log("recipes:", recipe);
//     axios
//       .get("/api/recipes")
//       .then((response) => {
//         setRecipe(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   // Function to filter recipes by title
//   useEffect(() => {
//     console.log(filterTitle);
//     if (filterTitle) {
//       axios
//         .get(`/api/recipe.title/${filterTitle}`)
//         .then((response) => {
//           const recipeTitle = response.data.filter(
//             (recipe) => recipeTitle === filterTitle
//           );
//           if (recipeTitle) {
//             setFilteredRecipes(recipeTitle.name.common);
//           }
//           // setFilteredRecipes(response.data);
//         })
//         .catch((error) => {
//           console.error("Error filtering data by title:", error);
//         });
//     } else {
//       // If filterTitle is empty, reset the filteredRecipes
//       setFilteredRecipes([]);
//     }
//   }, [filterTitle]);

//   return (
//     <>
//       <div className="recipe-meister">
//         <h1>Recipe Meister</h1>
//         <div id="controls">
//           <div className="input-box">
//             <span className="label">
//               <label>FIND RECIPES</label>
//             </span>
//             <input
//               type="text"
//               value={filterTitle}
//               onChange={(e) => setFilterTitle(e.target.value)}
//             />

//             <ul>
//               {(Array.isArray(filteredRecipes) ? filteredRecipes : recipe).map(
//                 (recipe) => (
//                   <li key={recipe.recipeid}>{recipe.recipetitle}</li>
//                 )
//               )}

//               {/* {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map(
//                 (recipes) => (
//                   <li key={recipes.recipeid}>{recipes.recipetitle}</li>
//                 )
//               )} */}

//               {/* {filteredRecipes.length > 0
//                 ? filteredRecipes.map((recipe) => (
//                     <li key={recipe.recipeid}>{recipe.recipetitle}</li>
//                   ))
//                 : recipe.map((recipe) => (
//                     <li key={recipe.recipeid}>{recipe.recipetitle}</li>
//                   ))} */}
//             </ul>
//           </div>
//           <button className="btn btn-black">Add a Recipe</button>
//         </div>
//         <div>
//           <RecipeCard data={recipe} />
//         </div>
//       </div>
//     </>
//   );
// }
