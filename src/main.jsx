import { initStore } from "./store";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

var store = initStore({
  initialState: {},
});

render(
  <Provider {...{ store }}>
    <App />
  </Provider>,
  document.getElementById("root")
);
