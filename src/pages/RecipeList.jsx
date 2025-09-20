import React, { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { IngredientsList } from "../components/IngredientsList";
import { RecipeDetails } from "../components/RecipeDetails";
import { getMealDetails } from "../api/PostApi";

export const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowIngredients = async (idMeal) => {
    try {
      const response = await getMealDetails(idMeal);
      if (response.data.meals) {
        setSelectedRecipe(response.data.meals[0]);
        setShowDetails(false);
      }
    } catch (error) {
      console.log("Error fetching meal details");
    }
  };

  const handleShowDetails = async (idMeal) => {
    try {
      const response = await getMealDetails(idMeal);
      if (response.data.meals) {
        setSelectedRecipe(response.data.meals[0]);
        setShowDetails(true);
      }
    } catch (error) {
      console.log("Error fetching meal details");
    }
  };

  const closePopup = () => {
    setSelectedRecipe(null);
    setShowDetails(false);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {recipes?.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          onShowIngredients={() => handleShowIngredients(recipe.idMeal)}
          onShowDetails={() => handleShowDetails(recipe.idMeal)}
        />
      ))}

      {selectedRecipe && !showDetails && (
        <IngredientsList recipe={selectedRecipe} onClose={closePopup} />
      )}

      {selectedRecipe && showDetails && (
        <RecipeDetails recipe={selectedRecipe} onClose={closePopup} />
      )}
    </div>
  );
};
