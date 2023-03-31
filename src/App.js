import { useState, useEffect } from "react";

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
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false)
  );
  const [position, setPosition] = useState(
    JSON.parse(localStorage.getItem("position")) || [52.24, 21.0]
  );
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("position", JSON.stringify(position));
  }, [position]);

  const toggleWeather = () => {
    setShowWeather(true);
    setShowMap(false);
  };

  const toggleMap = () => {
    setShowMap(true);
    setShowWeather(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const apiKey = "f8bce471cd12c58b7a69ca1e399e9dec";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, [position]);

  if (!weatherData) {
    return (
      <div className="weatherContainer">
        <h1>Lodaing</h1>
      </div>
    );
  }

  return (
    <div className={`App ${darkMode ? "darkMode" : "lightMode"}`}>
      <Navbar
        onToggleWeather={toggleWeather}
        showWeather={showWeather}
        onToggleMap={toggleMap}
        showMap={showMap}
        onToggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      {/* Weather */}
      {showWeather && (
        <div className="weatherContainer">
          <div className="mainContainer">
            <SearchBar />
            <Weather weatherData={weatherData} />
            <WeatherInfo weatherData={weatherData} />
            <AirConditions weatherData={weatherData} />
          </div>
          <WeekForecast />
        </div>
      )}

      {/* Map */}
      {showMap && <Map position={position} setPosition={setPosition} />}
    </div>
  );
}

export default App;
