export const ADDUSER = 'USERS/ADDUSER';
export const DELETEUSER = 'USERS/DELETEUSER';

export const addUser = (id, name) => {
  return {
    type: ADDUSER,
    payload: {
      id: id,
      name: name,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    payload: id,
  };
};
