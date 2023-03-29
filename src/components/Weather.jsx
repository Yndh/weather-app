import "../styles/Weather.css";
import cloud from "../icons/cloud.svg";

function Weather() {
  return (
    <div className="forecastContainer">
      <div className="forecastInfo">
        <h1 className="cityName">Olsztyn</h1>
        <span className="countryName">Polska</span>

        <h1 className="temperature">0°C</h1>
      </div>
      <div className="iconContainer">
        <img src={cloud} />
      </div>
    </div>
  );
}
export default Weather;
