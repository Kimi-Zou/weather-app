import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { setCurrentLocation, setCurrentPlaceId } from "../../store/location";
import { getTodayForecast, getWeekForecast } from "../../store/weather";
import "./index.css";

const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value) {
      dispatch(setCurrentLocation(value.label));
      dispatch(setCurrentPlaceId(value.value.place_id));
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${value.value.place_id}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(res => res.json())
      .then(data => fetch(`https://api.weather.gov/points/${data.results[0].geometry.location.lat.toFixed(4)},${data.results[0].geometry.location.lng.toFixed(4)}`))
      .then(res => res.json())
      .then(data => {
        dispatch(getTodayForecast(data.properties.forecast));
        dispatch(getWeekForecast(data.properties.forecast));
      })
    } 
  }, [dispatch, value])

  return (
    <GooglePlacesAutocomplete
      className="search"
      apiKey={process.env.REACT_APP_GOOGLE_API}
      autocompletionRequest={{
        country: ["us"]
      }}
      selectProps={{
        value,
        onChange: setValue,
        placeholder: "Enter your location...",
        className: "search--input",
        components: {
          DropdownIndicator:() => null, 
          IndicatorSeparator:() => null 
        }
      }}
    />
  )
} 

export default Search;