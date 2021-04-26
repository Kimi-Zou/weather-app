import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLocation, setCurrentPlaceId } from "../../store/location";
import { getTodayForecast, getWeekForecast } from "../../store/weather";
import { setFavLocations } from "../../store/location";

const FavoriteLocation = () => {
  const dispatch = useDispatch();
  const favLocations = useSelector(state => state.location.favLocations);

  // Get weather from fav location
  const getWeather = (location, placeId) => {
    dispatch(setCurrentLocation(location));
    dispatch(setCurrentPlaceId(placeId));
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(res => res.json())
      .then(data => fetch(`https://api.weather.gov/points/${data.results[0].geometry.location.lat.toFixed(4)},${data.results[0].geometry.location.lng.toFixed(4)}`))
      .then(res => res.json())
      .then(data => {
        dispatch(getTodayForecast(data.properties.forecast));
        dispatch(getWeekForecast(data.properties.forecast));
      })
  }

  // Remove fav location from local storage
  const removeFavLocation = (idx) => {
    const updatedFavLocations = [...favLocations];
    updatedFavLocations.splice(idx, 1);
    localStorage.setItem("favLocations", JSON.stringify(updatedFavLocations));
    dispatch(setFavLocations(updatedFavLocations));
  }

  return (
    <section className="fav-locations__wrapper">
      <h1 className="fav-locations__label">Favorite Location</h1>
      <ul className="fav-locations__list">
        {
          favLocations && favLocations.map((location, idx) => (
            <li className="fav-location__wrapper">
              <div 
                className="fav-location" 
                onClick={() => {
                  getWeather(location[0], location[1]);
                }}
              >
                {location[0]}
              </div>
              <i 
                className="far fa-trash-alt fav-location__remove-btn"
                onClick={() => {removeFavLocation(idx)}} 
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default FavoriteLocation;