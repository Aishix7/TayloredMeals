import "./App.css";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { RecipeList } from "./pages/RecipeList";
import { getMeal } from "./api/PostApi";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredient) => {
    console.log("You entered:", ingredient);
    try {
      const response = await getMeal(ingredient);
      console.log("API Response:", response.data);
      if (response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        alert("Sorry Taylor! No meal with your specified ingredient");
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
