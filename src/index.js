import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// STEP I - Add/Import middleware libraries, pass those into
// the "applyMiddleware" function
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

import NASAPhoto from "./components/NASAPhoto";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <NASAPhoto />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
