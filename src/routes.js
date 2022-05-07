/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { ShowHeaderContext } from "./store/Store";
import Fade from "react-reveal/Fade";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import FabComp from "./components/Fab/FabComp";
import Header from "./components/Header/Header";
import SingleDesign from "./components/singleDesign/singleDesign";
import UIDesigns from "./components/UIDesigns/UIDesigns";

function Routes(props) {
  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  return (
    <>
      <Fade bottom when={showHeader} collapse>
        <Header history={props.history} />
      </Fade>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/ui-designs" component={UIDesigns} />
          <Route path="/single-design" component={SingleDesign} />
          <Redirect to="/" />
        </Switch>
      </main>
      {props.history.location.pathname !== "/single-design" && <FabComp />}
    </>
  );
}

export default withRouter(Routes);
// style={{ backgroundColor: subRoutes && "#212121", height: "100vh" }}
