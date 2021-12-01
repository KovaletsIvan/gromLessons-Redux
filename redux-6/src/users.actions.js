export const ADDUSER = 'USERS/ADDUSER';
export const DELETEUSER = 'USERS/DELETEUSER';
export const UPDATEUSER = 'USERS/UPDATEUSER';

export const addUser = (obj) => {
  return {
    type: ADDUSER,
    payload: { obj },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    payload: { id },
  };
};

export const updateUser = (id, data) => {
  return {
    type: UPDATEUSER,
    payload: { id, data },
  };
};
