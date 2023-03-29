import '../styles/AirConditions.css'
import { WiStrongWind } from "react-icons/wi";

function AirConditions() {
  return (
    <div className="airConditionContainer">
      <p>Air Conditions</p>

      <div className="conditionContainer">
        <p>
          <WiStrongWind className="icon" />
           Wind
        </p>
        <span>3.07 km/h</span>
      </div>
    </div>
  );
}
export default AirConditions;
