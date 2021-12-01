export const ADDUSER = 'USERS/ADDUSER';
export const DELETEUSER = 'USERS/DELETEUSER';

export const addUser = (obj) => {
  return {
    type: ADDUSER,
    payload: obj
  
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    payload: id,
  };
};
