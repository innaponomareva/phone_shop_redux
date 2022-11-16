import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import AppReducer from "./store/AppReducer";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "material-design-icons/iconfont/material-icons.css";

const store = createStore(AppReducer);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
