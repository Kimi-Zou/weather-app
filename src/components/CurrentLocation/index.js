import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavLocations } from "../../store/location";
import "./index.css";

const CurrentLocation = () => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const currentLocation = useSelector(state => state.location.currentLocation);
  const currentPlaceId = useSelector(state => state.location.currentPlaceId);
  const favLocations = useSelector(state => state.location.favLocations);

  // Check if current location is fav
  useEffect(() => {
    if (favLocations) {
      setIsFav(false);
      for (let i = 0; i < favLocations.length; i++) {
        if (favLocations[i][0] === currentLocation) {
          setIsFav(true);
        }
      }
    }
  }, [currentLocation, favLocations])

  // Add current location to fav
  const favLocation = () => {
    let updatedFavLocations;
    if (favLocations) {
      updatedFavLocations = [...favLocations, [currentLocation, currentPlaceId]];
    } else {
      updatedFavLocations = [[currentLocation, currentPlaceId]];
    }
    localStorage.setItem("favLocations", JSON.stringify(updatedFavLocations));
    dispatch(setFavLocations(JSON.parse(localStorage.getItem("favLocations"))));
  }

  return (
    <div className="current-location">
      <h1 className="current-location__label">Current Location</h1>
      <div className="current-location__content-wrapper">
        <p className="current-location__content">
          {currentLocation || "No location selected"}
        </p>
        {
          isFav ?
          <i className="fas fa-heart current-location__fav-icon--fav" /> :
          <i 
            className="far fa-heart current-location__fav-icon--unfav" 
            onClick={favLocation}
          />
        }
      </div>
    </div>
  )
}

export default CurrentLocation;