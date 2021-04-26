import { useSelector } from "react-redux";
import './index.css';

const WeatherTodayForecast = () => {
  const todayForecast = useSelector(state => state.weather.todayForecast);
  console.log(todayForecast)
  return (
    <div className="weather-today__wrapper">
      { 
        todayForecast &&  
        <img 
          className="weather-today__current-weather-icon" 
          src={todayForecast[0].icon} 
          alt="weather icon"
        />
      }
    </div>
  )
}

export default WeatherTodayForecast;