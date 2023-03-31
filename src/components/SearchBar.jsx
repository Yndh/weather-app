import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar(props) {
  const inputHandler = (e) => {
    props.setCityName(e.target.value);
    console.log(e.target.value);
    props.setApiMethod('name')
  }

  return (
    <div className="searchBarContainer">
      <FaSearch />
      <input placeholder="Search for city" onChange={inputHandler} />
    </div>
  );
}
export default SearchBar;
