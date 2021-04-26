const CURRENT_LOCATION = "location/currentLocation";
const CURRENT_PLACE_ID = "location/currentPlaceId";
const FAV_LOCATIONS = "location/favLocations";

export const setCurrentLocation = (location) => ({
  type: CURRENT_LOCATION,
  payload: location
});

export const setCurrentPlaceId = (id) => ({
  type: CURRENT_PLACE_ID,
  payload: id
})

export const setFavLocations = (locations) => ({
  type: FAV_LOCATIONS,
  payload: locations
})

const locationReducer = (state={}, action) => {
  switch (action.type) {
    case CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };
    case CURRENT_PLACE_ID:
      return {
        ...state,
        currentPlaceId: action.payload
      };
    case FAV_LOCATIONS:
      return {
        ...state,
        favLocations: action.payload
      }
    default:
      return state;
  }
}

export default locationReducer;