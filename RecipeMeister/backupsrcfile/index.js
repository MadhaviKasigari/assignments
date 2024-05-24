import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { server } from "./server";

// import { Server, Model } from "miragejs";

if (process.env.NODE_ENV === "development") {
  server();
}

ReactDOM.render(
  // <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);
