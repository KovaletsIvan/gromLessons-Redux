export const INCREMENT = "COUNTER/INCREMENT";
export const DECREMENT = "COUNTER/DECREMENT";
export const RESET = "COUNTER/RESET";

export const incrise = () => {
  return { type: INCREMENT };
};

export const decrise = () => {
  return { type: DECREMENT };
};

export const reset = () => {
  return { type: RESET };
};
