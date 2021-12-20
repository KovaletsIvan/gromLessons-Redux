import { createSelector } from "reselect";

export const getUsersList = (state) => {
  return state.users.usersList;
};

export const getFilterText = (state) => {
  return state.users.filterText;
};

export const usersListToshow = createSelector(
  [getUsersList, getFilterText],
  (usersList, filterText) => {
    return usersList.filter((user) =>
      user.name.toLowerCase().includes(filterText)
    );
  }
);
