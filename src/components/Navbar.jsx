// import { AntDesign } from "@expo/vector-icons";
import '../styles/Navbar.css'
import { VscMapFilled } from "react-icons/vsc";
import {
  AiOutlineAntCloud,
  AiFillCloud,
} from "react-icons/ai";
import { WiStrongWind } from "react-icons/wi";
import { GoMarkGithub } from "react-icons/go";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Navbar(props){
  return (
    <nav className="navbar">
      <div className="iconContainer">
        <WiStrongWind className="icon" />
      </div>
      <div className="navButtons">
        <button
          className={props.showWeather ? "active" : ""}
          onClick={props.onToggleWeather}
        >
          <AiOutlineAntCloud />
          <span>Weather</span>
        </button>
        <button
          className={props.showMap ? "active" : ""}
          onClick={props.onToggleMap}
        >
          <VscMapFilled />
          <span>Map</span>
        </button>
        {props.darkMode ? (
          <button onClick={props.onToggleDarkMode}>
            <MdDarkMode />
            <span>Dark Mode</span>
          </button>
        ) : (
          <button onClick={props.onToggleDarkMode}>
            <MdLightMode />
            <span>Light Mode</span>
          </button>
        )}
      </div>
      <div className="githubButton">
        <a href="https://github.com/Yndh/weather-app" target="_blank">
          <button>
            <GoMarkGithub />
            <span>Github</span>
          </button>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
