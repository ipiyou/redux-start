import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootsaga, thunk } from "./module";
import App from "./App";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, sagaMiddleware)
);

sagaMiddleware.run(rootsaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
