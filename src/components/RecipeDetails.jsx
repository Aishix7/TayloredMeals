import React from "react";

export const RecipeDetails = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full relative">
        <button className="absolute top-2 right-2 p-2 font-bold text-white bg-orange-400 rounded-full">
          X
        </button>

        <div className="w-full h-48 overflow-hidden rounded-xl border border-black mb-4">
          <img
            src="https://via.placeholder.com/400x200.png?text=Dish+Image"
            alt="Recipe"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-black text-center mb-4">
          Recipe Name
        </h2>

        <h3 className="text-xl font-semibold text-orange-400 mb-2 text-center">
          How to Cook
        </h3>

        <p className="text-black mb-4">instructions</p>

        <button className="block text-center bg-orange-400 text-white font-bold py-2 rounded-xl w-full">
          YouTube
        </button>
      </div>
    </div>
  );
};
