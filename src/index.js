import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter, Switch } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <App />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
