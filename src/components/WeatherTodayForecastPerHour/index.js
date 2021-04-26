import moment from "moment";
import "./index.css";

const WeatherTodayForecastPerHour = ({ hourlyWeather }) => {
  return (
    <div className="weather-today__per-hour-wrapper">
      <time dateTime={hourlyWeather.startTime}>{moment(hourlyWeather.startTime).format("h a")}</time>
      <img 
        className="weather-today__per-hour-icon" 
        src={hourlyWeather.icon} 
        alt="weather icon"
      />
      <p className="weather-today__per-hour-temperature">
        {`${hourlyWeather.temperature} ${hourlyWeather.temperatureUnit}`}
      </p>
    </div>
  )
}

export default WeatherTodayForecastPerHour;