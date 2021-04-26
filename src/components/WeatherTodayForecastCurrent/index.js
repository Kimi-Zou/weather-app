import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./index.css";

const WeatherTodayForecastCurrent = () => {
  const [loaded, setLoaded] = useState(false);
  const [lowTemp, setLowTemp] = useState(null);
  const [highTemp, setHighTemp] = useState(null);

  const todayForecast = useSelector(state => state.weather.todayForecast);

  useEffect(() => {
    if (todayForecast) {
      const sortedForecast = [...todayForecast];
      sortedForecast.sort((a, b) => a.temperature - b.temperature);
      setLowTemp(sortedForecast[0].temperature);
      setHighTemp(sortedForecast[sortedForecast.length-1].temperature);
      setLoaded(true);
    }
  }, [todayForecast])

  if(!loaded) return null;
  return (
    <section className="weather-today__current-wrapper">
      <div className="current__left-column">
        <img 
          className="weather-today__current-weather-icon" 
          src={todayForecast[0].icon} 
          alt="weather icon"
        />
      </div>
      <div className="current__right-column">
        <time dateTime={todayForecast.startTime}>
          {`${moment(todayForecast.startTime).format("dddd")} - ${todayForecast[0].shortForecast}`}
        </time>
        <p className="current__temperature">
          {`${todayForecast[0].temperature} ${todayForecast[0].temperatureUnit}`}
        </p>
        <p>
          {`H: ${highTemp} F | L: ${lowTemp} F`}
        </p>
      </div>
    </section>
  )
}

export default WeatherTodayForecastCurrent;