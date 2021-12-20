export const CHANGE_TEXT = "USERS/CHNGE_TEXT ";

export const choiceUsers = (text) => {
  return {
    type: CHANGE_TEXT,
    payload: { text },
  };
};
