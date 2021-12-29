import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Wheather from "./weather/Wheather";

const App = () => {
  return (
    <Provider store={store}>
      <Wheather />
    </Provider>
  );
};

export default App;
