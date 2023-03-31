import "../styles/WeatherInfo.css";
import { WiThermometer, WiThermometerExterior, WiWindy } from "react-icons/wi";
import { TiWaves } from "react-icons/ti";

function WeatherInfo(props) {
  return (
    <div className="weatherInfoContainer">
      <p className="title">Weather Info</p>

      <div className="info">
        <div className="infoContainer">
          <p>
            <WiThermometerExterior className="icon" />
            Min Temp
          </p>
          <span>{props.weatherData.main.temp_min}°C</span>
        </div>
        <div className="infoContainer">
          <p>
            <WiThermometer className="icon" />
            Max Temp
          </p>
          <span>{props.weatherData.main.temp_max}°C</span>
        </div>
        <div className="infoContainer">
          <p>
            <TiWaves className="icon" />
            Feels like
          </p>
          <span>{props.weatherData.main.feels_like}°C</span>
        </div>
        <div className="infoContainer">
          <p>
            <WiWindy className="icon" />
            Humidity
          </p>
          <span>{props.weatherData.main.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
export default WeatherInfo;
