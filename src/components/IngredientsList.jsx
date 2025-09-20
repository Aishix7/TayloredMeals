// components/IngredientsList.jsx
import React from "react";

export const IngredientsList = ({ recipe, onClose }) => {
  // Some meals have up to 20 ingredients in the API
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 font-bold text-white bg-orange-400 rounded-full"
        >
          X
        </button>
        <img
          src={recipe.strMealThumb + "/medium"}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover rounded-xl border border-black mb-4"
        />
        <h2 className="text-2xl font-bold text-black text-center mb-4">
          {recipe.strMeal}
        </h2>
        <h3 className="text-xl font-semibold text-orange-400 mb-2 text-center">
          Ingredients
        </h3>
        <ul className="list-disc list-inside text-black space-y-1">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
