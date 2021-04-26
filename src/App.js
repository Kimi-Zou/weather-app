import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import CurrentLocation from "./components/CurrentLocation";
import WeekForecast from "./components/WeatherWeekForecast";
import TodayForecast from "./components/WeatherTodayForecast";
import WeatherNav from "./components/WeatherNav";

function App() {
  const [showToday, setShowToday] = useState(true);

  return (
    <div className="app__wrapper">
      <section className="location">
        <Search />
        <CurrentLocation />
      </section>
      <section className="weather">
        <WeatherNav showToday={showToday} setShowToday={setShowToday} />
        {
          showToday ?
          <TodayForecast /> :
          <WeekForecast />
        }
      </section>
    </div>
  );
}

export default App;
