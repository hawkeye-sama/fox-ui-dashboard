import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js"
// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import Home from "./layouts/Home.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        {/* <Redirect from="/" to="/admin/dashboard" /> */}

        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
