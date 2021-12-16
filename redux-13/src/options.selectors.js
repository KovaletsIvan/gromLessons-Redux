import { createSelector } from "reselect";

export const optionListSelector = (state) => {
  return state.options.optionsList;
};
export const selectedListSelector = (state) => {
  return state.options.selected;
};

export const avaliableOptionsSelector = createSelector(
  [optionListSelector, selectedListSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter((option) => !selectedIds.includes(option.id));
  }
);

export const selectedOptionsSelector = createSelector(
  [optionListSelector, selectedListSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter((option) => selectedIds.includes(option.id));
  }
);

