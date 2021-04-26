const TODAY_FORECAST = "weather/todayForecast";
const WEEK_FORECAST = "weather/weekForecast"

export const setTodayForecast = (todayForecast) => ({
  type: TODAY_FORECAST,
  payload: todayForecast
});

export const setWeekForecast = (weekForecast) => ({
  type: WEEK_FORECAST,
  payload: weekForecast
});

export const getTodayForecast = (apiEndpoint) => async dispatch => {
  const res = await fetch(`${apiEndpoint}/hourly`);
  const data = await res.json();
  dispatch(setTodayForecast(data.properties.periods.slice(0, 24)));
}

export const getWeekForecast = (apiEndpoint) => async dispatch => {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  dispatch(setWeekForecast(data.properties.periods))
}

const weatherReducer = (state={}, action) => {
  switch (action.type) {
    case TODAY_FORECAST:
      return {
        ...state,
        todayForecast: action.payload
      };
    case WEEK_FORECAST:
      return {
        ...state,
        weekForecast: action.payload
      }
    default:
      return state;
  }
}

export default weatherReducer;