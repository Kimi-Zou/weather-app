import { useSelector } from "react-redux";
import WeatherWeekForecastPerDay from "../WeatherWeekForecastPerDay";
import "./index.css";

const WeatherWeekForecast = () => {
  const weekForecast = useSelector(state => state.weather.weekForecast);

  return (
    <div className="weather-week__wrapper">
      {weekForecast.map(dailyWeather => 
        <WeatherWeekForecastPerDay dailyWeather={dailyWeather} />
      )}
    </div>
  )
}

export default WeatherWeekForecast;