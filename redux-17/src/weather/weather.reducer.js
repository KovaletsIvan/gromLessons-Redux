import { WEATHER } from "./weather.actions";

const initialState = { citiesList: [] };

export const wheatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER:
      return { ...state, citiesList: action.payload.data };
    default:
      return state;
  }
};
