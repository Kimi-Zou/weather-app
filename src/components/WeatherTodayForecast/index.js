import './index.css';
import WeatherTodayForecastCurrent from '../WeatherTodayForecastCurrent';
import WeatherTodayForecastHourly from '../WeatherTodayForecastHourly';

const WeatherTodayForecast = () => {
  return (
    <div className="weather-today__wrapper">
      <WeatherTodayForecastCurrent />
      <WeatherTodayForecastHourly />
    </div>
  )
}

export default WeatherTodayForecast;