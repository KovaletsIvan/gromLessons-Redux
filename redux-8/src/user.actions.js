export const ADD_USER = 'USERS/ADD_USER';
export const REMOVE_USER = 'USERS/REMOVE_USER';

export const setUser = (userData) => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
