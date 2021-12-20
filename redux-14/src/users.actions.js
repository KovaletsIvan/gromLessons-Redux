export const CHANGE_TEXT = "USERS/CHANGE_TEXT ";

export const choiceUsers = (text) => {
  return {
    type: CHANGE_TEXT,
    payload: { text },
  };
};
