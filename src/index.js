import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { rrfProps } from "../src/redux/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
