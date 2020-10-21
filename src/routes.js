import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Redirect to="/" />
    </Switch>
  );
}

export default withRouter(Routes);
