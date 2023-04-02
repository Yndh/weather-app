import '../styles/AirConditions.css'
import '../styles/Component.css'
import { WiStrongWind } from "react-icons/wi";

function AirConditions(props) {
  return (
    <div className="componentContainer airConditions">
      <p className="title">Air Conditions</p>
      <div className="info">
        <div className="infoContainer">
          <p>
            <WiStrongWind className="icon" />
            Wind
          </p>
          <span>{props.weatherData.wind.speed} km/h</span>
        </div>
      </div>
    </div>
  );
}
export default AirConditions;
