import React from "react";

export const RecipeCard = ({ title, image }) => {
  const FastImage = image + "/medium";
  return (
    <div className="flex flex-row p-8 m-auto">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-64 hover:scale-105 transition-transform duration-300">
        <img
          src={FastImage}
          //   src={image}
          alt={title}
          className="w-full h-48 flex items-center justify-center object-cover"
        />
        <div className="p-4">
          <h2 className=" flex items-center justify-center text-lg font-semibold text-gray-800">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
