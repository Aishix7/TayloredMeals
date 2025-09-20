import React from "react";

export const RecipeCard = () => {
  return (
    <div className="flex flex-row m-auto">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-64 hover:scale-105 transition-transform duration-300">
        <img
          src=""
          alt="Photo"
          className="w-full h-48 flex items-center justify-center object-cover"
        />
        <div className="p-4">
          <h2 className=" flex items-center justify-center text-lg font-semibold text-gray-800">
            Title
          </h2>
        </div>
      </div>
    </div>
  );
};
