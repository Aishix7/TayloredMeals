import React from "react";
import { SearchIcon } from "lucide-react";
import { getMeal } from "../api/PostApi";
export const SearchBar = () => {
  return (
    <>
      <div>
        <div className="p-10 m-auto flex items-center justify-center space-x-4">
          <input
            className="p-4 border border-[#939393] rounded-lg"
            type="text"
            placeholder="Enter an ingredient"
          />
          <button
            type="submit"
            className=" border border-white rounded-lg p-2 bg-black"
          >
            <SearchIcon className="text-white w-10 h-10 bg-black" />
          </button>
        </div>
      </div>
    </>
  );
};
