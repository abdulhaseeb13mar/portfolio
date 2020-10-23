import React, { useContext } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { ShowHeaderContext, SubRoutesContext } from "./store/Store";
import Fade from "react-reveal/Fade";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import FabComp from "./components/Fab/FabComp";
import Header from "./components/Header/Header";

function Routes(props) {
  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);
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
          <Redirect to="/" />
        </Switch>
      </main>
      <FabComp />
    </>
  );
}

export default withRouter(Routes);
// style={{ backgroundColor: subRoutes && "#212121", height: "100vh" }}
