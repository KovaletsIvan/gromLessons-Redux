export const SHOW_SPINNER = "USERS/SHOW_SPINNER";
export const USER_DATA_RECIVED = "USERS/USER_DATA_RECIVED";
import { fetchData } from "./users.gateway";

export const showSpinner = () => {
  return { type: SHOW_SPINNER };
};

export const userDataRecived = (userData) => {
  return {
    type: USER_DATA_RECIVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = (userName) => {
  return function (dispatch) {
    dispatch(showSpinner());
    fetchData(userName).then((userData) => {
      dispatch(userDataRecived(userData));
    });
  };
};
