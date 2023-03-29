import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="searchBarContainer">
      <FaSearch />
      <input placeholder="Search for city" />
    </div>
  );
}
export default SearchBar;
