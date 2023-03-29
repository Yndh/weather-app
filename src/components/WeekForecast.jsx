import "../styles/WeekForecast.css";
import clear from '../icons/clear.svg';
import cloud from '../icons/cloud.svg';
import rain from '../icons/rain.svg';
import snow from '../icons/snow.svg';
import storm from '../icons/storm.svg'

function WeekForecast(){
    return (
      <div className="weekForecastContainer">
        <p className="title">7-DAY FORECAST</p>

        <div className="dayForecastContainer">
          <p className="day">Today</p>
          <p className="weather">
            <img src={clear} />
            Sunny
          </p>
          <p className="dayNum">
            <span>29</span>
            <span>03</span>
          </p>
        </div>

        <div className="dayForecastContainer">
          <p className="day">Thursday</p>
          <p className="weather">
            <img src={cloud} />
            Cloud
          </p>
          <p className="dayNum">
            <span>30</span>
            <span>03</span>
          </p>
        </div>

        <div className="dayForecastContainer">
          <p className="day">Friday</p>
          <p className="weather">
            <img src={rain} />
            Rain
          </p>
          <p className="dayNum">
            <span>31</span>
            <span>03</span>
          </p>
        </div>

        <div className="dayForecastContainer">
          <p className="day">Saturday</p>
          <p className="weather">
            <img src={snow} />
            Snow
          </p>
          <p className="dayNum">
            <span>01</span>
            <span>04</span>
          </p>
        </div>

        <div className="dayForecastContainer">
          <p className="day">Sunday</p>
          <p className="weather">
            <img src={clear} />
            Sunny
          </p>
          <p className="dayNum">
            <span>02</span>
            <span>04</span>
          </p>
        </div>

        <div className="dayForecastContainer">
          <p className="day">Monday</p>
          <p className="weather">
            <img src={storm} />
            Storm
          </p>
          <p className="dayNum">
            <span>03</span>
            <span>04</span>
          </p>
        </div>

        <div className="dayForecastContainer">
          <p className="day">Tuesday</p>
          <p className="weather">
            <img src={clear} />
            Sunny
          </p>
          <p className="dayNum">
            <span>05</span>
            <span>06</span>
          </p>
        </div>
      </div>
    );
}
export default WeekForecast;