import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import AirConditions from "./components/AirConditions";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <SearchBar/>
        <Weather />
        <WeatherInfo/>
        <AirConditions/>
      </div>
    </div>
  );
}

export default App;
