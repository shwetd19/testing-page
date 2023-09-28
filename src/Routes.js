import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Process from "./component/Slider";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="./HomePage" component={HomePage} />
        <Route path="./component/Slider" component={Process} />
      </Switch>
    </Router>
  );
}

export default Routes;
