import { fetchWheatherData } from "./wheather.gateway";

export const WEATHER = "WHEATHER";

export const recivedWheatherData = (data) => {
  return {
    type: WEATHER,
    payload: { data },
  };
};

export const getWeathetData = () => {
  return function (dispatch) {
    fetchWheatherData().then((resp) => dispatch(recivedWheatherData(resp)));
  };
};
