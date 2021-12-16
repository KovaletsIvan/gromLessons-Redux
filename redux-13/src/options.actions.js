export const TOOGLE_OPTIONS = "OPTIONS/TOOGLE_OPTIONS";

export const toogleOption = (optionsId) => {
  return {
    type: TOOGLE_OPTIONS,
    payload: { optionsId },
  };
};
