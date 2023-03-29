import "../styles/WeatherInfo.css";
import { WiThermometer, WiThermometerExterior, WiWindy } from "react-icons/wi";
import { TiWaves } from "react-icons/ti";

function WeatherInfo() {
  return (
    <div className="weatherInfoContainer">
      <p className="title">Weather Info</p>

      <div className="info">
        <div className="infoContainer">
          <p>
            <WiThermometerExterior className="icon" />
            Min Temp
          </p>
          <span>-3°C</span>
        </div>
        <div className="infoContainer">
          <p>
            <WiThermometer className="icon" />
            Max Temp
          </p>
          <span>0.98°C</span>
        </div>
        <div className="infoContainer">
          <p>
            <TiWaves className="icon" />
            Feels like
          </p>
          <span>-3°C</span>
        </div>
        <div className="infoContainer">
          <p>
            <WiWindy className="icon" />
            Humidity
          </p>
          <span>64%</span>
        </div>
      </div>
    </div>
  );
}
export default WeatherInfo;
