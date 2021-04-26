import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { setFavLocations } from "./store/location";
import Search from "./components/Search";
import CurrentLocation from "./components/CurrentLocation";
import WeekForecast from "./components/WeatherWeekForecast";
import TodayForecast from "./components/WeatherTodayForecast";
import WeatherNav from "./components/WeatherNav";
import FavoriteLocation from "./components/FavoriteLocation";

function App() {
  const dispatch = useDispatch();
  const [showToday, setShowToday] = useState(true);

  // Get fav locations from local storage
  useEffect(() => {
    const favLocations = JSON.parse(localStorage.getItem("favLocations"));
    dispatch(setFavLocations(favLocations));
  }, [dispatch])

  return (
    <div className="app__wrapper">
      <section className="location">
        <Search />
        <CurrentLocation />
        <FavoriteLocation />
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
