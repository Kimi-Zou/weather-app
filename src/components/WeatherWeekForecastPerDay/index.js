import moment from "moment";
import "./index.css";

const WeatherWeekForecastPerDay = ({ dailyWeather }) => {
  return (
    <div className="weather-week__per-day-wrapper">
      <img className="weather-week__per-day-icon" src={dailyWeather.icon} alt="weather icon"/>
      <div className="weather-week__per-day-text-wrapper">
        <time className="weather-week_per-day-datetime">
          {`
            ${moment(dailyWeather.startTime).format('MM/DD')} 
            ${dailyWeather.isDaytime ? "Day" : "Night"}
          `}
        </time>
        <p className="weather-week__per-day-temp">
          {`${dailyWeather.temperature} ${dailyWeather.temperatureUnit}`}
        </p>
        <p className="weather-week__per-day-description">
          {dailyWeather.shortForecast}
        </p>
      </div>
    </div>
  )
}

export default WeatherWeekForecastPerDay;