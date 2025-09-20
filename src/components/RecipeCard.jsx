import React from "react";

export const RecipeCard = ({ title, image, onShowIngredients }) => {
  const FastImage = image + "/medium";
  return (
    <div className="flex flex-row p-8 m-auto">
      <div className="bg-white shadow-lg rounded-2xl border border-black overflow-hidden w-64 hover:scale-105 transition-transform duration-300">
        <img
          src={FastImage}
          //   src={image}
          alt={title}
          className="w-full h-48 flex border border-black items-center justify-center object-cover"
        />
        <div className="p-4">
          <h2 className=" flex items-center justify-center text-lg font-bold text-gray-800">
            {title}
          </h2>
          <div className="flex items-center justify-center space-x-4 p-4">
            <button
              onClick={onShowIngredients}
              className="p-2 font-semibold border border-black shadow-lg rounded-xl bg-orange-400 w-full"
            >
              Ingredients
            </button>
            <button className="p-2 font-semibold border border-black rounded-xl shadow-lg bg-orange-400 w-full">
              How-to
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
