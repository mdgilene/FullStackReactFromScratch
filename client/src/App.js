import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "layouts/Home";
import Login from "layouts/Login";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={() => <Redirect to="/" />} />
        <Route exact path="/login" component={Login} />
        <Route component={() => <div>404</div>} />
      </Switch>
    );
  }
}

export default App;
