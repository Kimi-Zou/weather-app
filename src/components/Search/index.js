import { Component, useEffect, useState } from 'react';
import GooglePlacesAutocomplete, {geocodeByPlaceId} from 'react-google-places-autocomplete';
import './index.css';

const Search = () => {
  const [value, setValue] = useState(null);
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);

  useEffect(() => {
    if (value) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${value.value.place_id}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(res => res.json())
      .then(data => fetch(`https://api.weather.gov/points/${data.results[0].geometry.location.lat.toFixed(4)},${data.results[0].geometry.location.lng.toFixed(4)}`))
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }, [value])

  return (
    <div>
      <GooglePlacesAutocomplete
        className='search'
        apiKey='***REMOVED***'
        autocompletionRequest={{
          country: ['us']
        }}
        selectProps={{
          value,
          onChange: setValue,
          placeholder: 'Enter your location...',
          className: 'search--input',
          components: {
            DropdownIndicator:() => null, 
            IndicatorSeparator:() => null 
          }
        }}
      />
    </div>
  )
} 

export default Search;