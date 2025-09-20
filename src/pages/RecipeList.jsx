import React, { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { IngredientsList } from "../components/IngredientsList";

export const RecipeList = (props) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {props.recipes?.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          onShowIngredients={() => setSelectedRecipe(recipe)}
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
