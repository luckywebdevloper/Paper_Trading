// In App.js in a new project

import React from "react";
import Navigators from "./src/navigators";
import store from "./redux/store";
import { Provider } from "react-redux";

export default () => (
  <Provider store={store}>
    <Navigators />
  </Provider>
);
