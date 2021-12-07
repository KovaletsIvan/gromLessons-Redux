export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = () => {
  return {
    type: ADD_USER,
    payload: {
      user: { name: 'User', id: Math.round(Math.random() * 1000000) },
    },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: { userId },
  };
};
