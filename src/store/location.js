const CURRENT_LOCATION = 'location/currentLocation';

export const setCurrentLocation = (location) => ({
  type: CURRENT_LOCATION,
  payload: location
});

const locationReducer = (state={}, action) => {
  switch (action.type) {
    case CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };
    default:
      return state;
  }
}

export default locationReducer;