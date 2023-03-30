import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import AirConditions from "./components/AirConditions";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/SearchBar";
import WeekForecast from "./components/WeekForecast";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Weather */}
      <div className="weatherContainer" style={{display: 'none'}}>
        <div className="mainContainer">
          <SearchBar />
          <Weather />
          <WeatherInfo />
          <AirConditions />
        </div>
        <WeekForecast />
      </div>

    {/* Map */}
    <Map/>
    </div>
  );
}

export default App;
