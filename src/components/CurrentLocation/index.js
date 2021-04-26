import { useSelector } from "react-redux";
import "./index.css";

const CurrentLocation = () => {
  const currentLocation = useSelector(state => state.location.currentLocation);

  return (
    <div className="current-location">
      <h2 className="current-location--label">Current Location</h2>
      <p className="current-location--content">{currentLocation || "No location selected"}</p>
    </div>
  )
}

export default CurrentLocation;