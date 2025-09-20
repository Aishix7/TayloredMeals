import React from "react";

export const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow p-4 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-orange-400 text-white p-2 rounded-full font-bold"
        >
          X
        </button>

        <img
          src={recipe.strMealThumb + "/medium"}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover border border-black rounded mb-4"
        />

        <h2 className="text-center text-black text-xl font-bold mb-2">
          {recipe.strMeal}
        </h2>

        <h3 className="text-center text-orange-400 text-lg font-semibold mb-2">
          How to Cook
        </h3>

        <p className="text-black mb-4 whitespace-pre-line text-sm">
          {recipe.strInstructions}
        </p>

        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-orange-400 text-white text-center font-bold py-2 rounded w-full"
          >
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
};
