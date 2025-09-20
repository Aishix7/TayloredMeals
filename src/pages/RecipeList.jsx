import React, { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { IngredientsList } from "../components/IngredientsList";
import { getMealDetails } from "../api/PostApi";

export const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleShowIngredients = async (idMeal) => {
    try {
      const response = await getMealDetails(idMeal);
      if (response.data.meals) {
        setSelectedRecipe(response.data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {recipes?.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          onShowIngredients={() => handleShowIngredients(recipe.idMeal)}
        />
      ))}

      {selectedRecipe && (
        <IngredientsList
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};
