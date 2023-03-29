// import { AntDesign } from "@expo/vector-icons";
import '../styles/Navbar.css'
import { VscMapFilled } from "react-icons/vsc";
import { AiOutlineAntCloud, AiFillCloud, AiFillSetting } from "react-icons/ai";
import { WiStrongWind } from "react-icons/wi";

function Navbar(){
  return (
    <nav className="navbar">
      <div className="iconContainer">
          <WiStrongWind className='icon'/>
      </div>
      <div className="navButtons">
        <button>
          <AiOutlineAntCloud />
          <span>Weather</span>
        </button>
        <button>
          <VscMapFilled />
          <span>Map</span>
        </button>
        <button>
          <AiFillSetting />
          <span>Settings</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
