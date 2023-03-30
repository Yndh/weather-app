import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import AirConditions from "./components/AirConditions";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/SearchBar";
import WeekForecast from "./components/WeekForecast";
import Map from "./components/Map";

function App() {
  const [showWeather, setShowWeather] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleWeather = () => {
    setShowWeather(true);
    setShowMap(false);
    setShowSettings(false);
  };

  const toggleMap = () => {
    setShowMap(true);
    setShowWeather(false);
    setShowSettings(false);
  };

  const toggleSettings = () => {
    setShowSettings(true);
    setShowWeather(false);
    setShowMap(false);
  };

  return (
    <div className="App">
      <Navbar
        onToggleWeather={toggleWeather}
        showWeather={showWeather}
        onToggleMap={toggleMap}
        showMap={showMap}
      />

      {/* Weather */}
      {showWeather && (
        <div className="weatherContainer">
          <div className="mainContainer">
            <SearchBar />
            <Weather />
            <WeatherInfo />
            <AirConditions />
          </div>
          <WeekForecast />
        </div>
      )}

      {/* Map */}
      {showMap && <Map />}
    </div>
  );
}

export default App;
