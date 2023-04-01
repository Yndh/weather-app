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
    JSON.parse(localStorage.getItem("position")) || [31.99, -102.07]
  );
  const [cityName, setCityName] = useState("Midland");
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  const [apiMethod, setApiMethod] = useState("cords");

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
    console.log(apiMethod);
    fetch(
      apiMethod === "cords"
        ? `https://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&units=metric&appid=${apiKey}`
        : `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod == 200) {
          setWeatherData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });

    fetch(
      apiMethod === "cords"
        ? `https://api.openweathermap.org/data/2.5/forecast?lat=${position[0]}&lon=${position[1]}&cnt=40&appid=${apiKey}`
        : `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=40&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod == 200) {
          setFiveDayForecast(data);
          // console.log("--------------");
          // console.log(fiveDayForecast);
          if (apiMethod == "name") {
            console.log(Object.values(data.coord).reverse());
            setPosition(Object.values(data.coord).reverse());
            setApiMethod("cords");
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, [position, cityName]);

  if (!weatherData || !fiveDayForecast) {
    return (
      <div className={`App ${darkMode ? "darkMode" : "lightMode"}`}>
        <div className="loaderContainer">
          <span>{"{"}</span>
          <span>{"}"}</span>
        </div>
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
            <SearchBar setCityName={setCityName} setApiMethod={setApiMethod} />
            {weatherData.cod === 200 ? (
              <>
                <Weather weatherData={weatherData} />
                <WeatherInfo weatherData={weatherData} />
                <AirConditions weatherData={weatherData} />
              </>
            ) : (
              <p>Error fetching weather data</p>
            )}
          </div>
          <WeekForecast fiveDayForecast={fiveDayForecast} />
        </div>
      )}

      {/* Map */}
      {showMap && (
        <Map
          position={position}
          setPosition={setPosition}
          setApiMethod={setApiMethod}
        />
      )}
    </div>
  );
}

export default App;
