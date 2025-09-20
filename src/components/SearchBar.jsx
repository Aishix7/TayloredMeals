import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
export const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient.trim() !== "") {
      onSearch(ingredient);
    } else {
      alert("Enter some ingredient Taylor!");
    }
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="p-10 m-auto flex items-center justify-center space-x-4"
        >
          <input
            className="p-4 border border-[#939393] rounded-lg"
            type="text"
            placeholder="Enter an ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button
            type="submit"
            className=" border border-white rounded-lg p-2 bg-black"
          >
            <SearchIcon className="text-white w-10 h-10 bg-black" />
          </button>
        </form>
      </div>
    </>
  );
};
