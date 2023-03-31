import "../styles/WeekForecast.css";
import clear from "../icons/clear.svg";
import cloud from "../icons/cloud.svg";
import rain from "../icons/rain.svg";
import snow from "../icons/snow.svg";
import storm from "../icons/storm.svg";
import haze from "../icons/haze.svg";
import { useState, useEffect } from "react";

function WeekForecast(props) {
  const [icon, setIcon] = useState(cloud);

  const list = props.fiveDayForecast.list.filter(
    (_, index) => (index + 1) % 8 === 0
  );

  const getIcon = (id) => {
    if (id == 800) {
      return clear;
    } else if (id >= 200 && id <= 232) {
      return storm;
    } else if (id >= 600 && id <= 622) {
      return snow;
    } else if (id >= 701 && id <= 781) {
      return haze;
    } else if (id >= 801 && id <= 804) {
      return cloud;
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      return rain;
    }
  };

  const days = list.map((item) => {
    const date = new Date(item.dt_txt);
    const dayName = date.toLocaleString("en-US", { weekday: "long" });
    const icon = getIcon(item.weather[0].id);

    return (
      <div className="dayForecastContainer" key={item.dt}>
        <p className="day">{dayName}</p>
        <p className="weather">
          <img src={icon} alt={item.weather[0].description} />
          {item.weather[0].description}
        </p>
        <p className="dayNum">
          <span>{date.getDate()}</span>
          <span>{date.getMonth() + 1}</span>
        </p>
      </div>
    );
  });

  return (
    <div className="weekForecastContainer">
      <div className="titleContainer">
        <p className="title">5-DAY FORECAST</p>
      </div>
      <div className="daysForecastContainer">{days}</div>
    </div>
  );
}

export default WeekForecast;
