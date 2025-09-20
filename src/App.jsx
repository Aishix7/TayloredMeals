import "./App.css";
import { SearchBar } from "./components/SearchBar";

export default function App() {
  const handleSearch = (ingredient) => {
    console.log("you entered", ingredient);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
