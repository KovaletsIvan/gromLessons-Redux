const ADDUSER = 'USERS/ADDUSER';
const DELETEUSER = 'USERS/DELETEUSER';

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
    payload: { id: id },
  };
};
