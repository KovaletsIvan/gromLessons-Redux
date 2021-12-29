import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Weather from "./weather/Wheather";

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
