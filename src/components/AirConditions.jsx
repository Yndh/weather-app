import '../styles/AirConditions.css'
import { WiStrongWind } from "react-icons/wi";

function AirConditions(props) {
  return (
    <div className="airConditionContainer">
      <p>Air Conditions</p>

      <div className="conditionContainer">
        <p>
          <WiStrongWind className="icon" />
           Wind
        </p>
        <span>{props.weatherData.wind.speed} km/h</span>
      </div>
    </div>
  );
}
export default AirConditions;
