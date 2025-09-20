import React from "react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeList = (props) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {props.recipes?.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
        />
      ))}
    </div>
  );
};
