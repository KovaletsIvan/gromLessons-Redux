const initialStateLanguage = 'en';

export const languageReducer = (state = initialStateLanguage, action) => {
  switch (action.type.length) {
    case 2:
      return (state = action.type);
    default:
      return state;
  }
};
