import { useSelector } from "react-redux";
import "./index.css";
import WeatherTodayForecastPerHour from "../WeatherTodayForecastPerHour";
import { useEffect, useState } from "react";

const WeatherTodayForecastHourly = () => {
  const [loaded, setLoaded] = useState(false);
  const todayForecast = useSelector(state => state.weather.todayForecast);

  useEffect(() => {
    if(todayForecast) setLoaded(true);
  }, [todayForecast])

  if (!loaded) return null;
  return (
    <div className="today-weather__hourly-wrapper">
      {
        todayForecast.map((hourlyWeather) => 
          <WeatherTodayForecastPerHour hourlyWeather={hourlyWeather} />
        )
      }
    </div>
  )
}

export default WeatherTodayForecastHourly;