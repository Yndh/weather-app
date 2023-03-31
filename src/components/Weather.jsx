import "../styles/Weather.css";
import { useState, useEffect } from "react";
import clear from "../icons/clear.svg";
import cloud from "../icons/cloud.svg";
import haze from "../icons/haze.svg";
import rain from "../icons/rain.svg";
import snow from "../icons/snow.svg";
import storm from "../icons/storm.svg";
import CountryList from "./CountryList.jsx";

function Weather(props) {
  const [icon, setIcon] = useState(cloud)

  useEffect(() => {
    if (props.weatherData.weather[0].id == 800) {
      setIcon(clear);
    } else if (props.weatherData.weather[0].id >= 200 && props.weatherData.weather[0].id <= 232) {
      setIcon(storm);
    } else if (props.weatherData.weather[0].id >= 600 && props.weatherData.weather[0].id <= 622) {
      setIcon(snow);
    } else if (props.weatherData.weather[0].id >= 701 && props.weatherData.weather[0].id <= 781) {
      setIcon(haze);
    } else if (props.weatherData.weather[0].id >= 801 && props.weatherData.weather[0].id <= 804) {
      setIcon(cloud);
    } else if (
      (props.weatherData.weather[0].id >= 500 && props.weatherData.weather[0].id <= 531) ||
      (props.weatherData.weather[0].id >= 300 && props.weatherData.weather[0].id <= 321)
    ) {
      setIcon(rain);
    }
  }, [props.weatherData.weather[0].id]);

  return (
    <div className="forecastContainer">
      <div className="forecastInfo">
        <h1 className="cityName">
          {props.weatherData.name ? props.weatherData.name : "No city name"}
        </h1>
        <span className="countryName">
          {CountryList[props.weatherData.sys.country]}
        </span>

        <h1 className="temperature">{props.weatherData.main.temp}°C</h1>
      </div>
      <div className="iconContainer">
        <img src={icon} alt={props.weatherData.weather[0].main} />
      </div>
    </div>
  );
}
export default Weather;
