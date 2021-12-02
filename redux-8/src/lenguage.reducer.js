const initialStateLenguage = 'en';

export const lenguageReducer = (state = initialStateLenguage, action) => {
  switch (action.type.length) {
    case 2:
      return (state = action.type);
    default:
      return state;
  }
};
