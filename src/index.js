import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./HomepageLayout.css";
import * as serviceWorker from "./serviceWorker";
import HomepageLayout from "./HomepageLayout";

ReactDOM.render(
  <React.StrictMode>
    <HomepageLayout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
