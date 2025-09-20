import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { RecipeList } from "./pages/RecipeList";

export default function App() {
  const handleSearch = (ingredient) => {
    console.log("you entered", ingredient);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList />
    </div>
  );
}
