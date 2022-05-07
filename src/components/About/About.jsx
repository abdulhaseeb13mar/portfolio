/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import MeInFrame from "../../assets/Aboutus/MeInFrame.png";
import Zoom from "react-reveal/Zoom";
import Accordian from "./Accordian";
import MyName from "../../assets/Aboutus/name.png";
import {
  ShowHeaderContext,
  TabContext,
  SubRoutesContext,
} from "../../store/Store";
import "./About.scss";

function About() {
  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  const [tab, setTab] = useContext(TabContext);
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);
  useEffect(() => {
    makeTrue();
  }, []);

  const makeTrue = () => {
    setTimeout(() => {
      setShowHeader(true);
      setTab(1);
      setSubRoutes(true);
    }, 100);
  };

  return (
    <Grid container className="AboutMe-Wrapper">
      <Grid item xs={12} sm={6} className="About-left-Grid">
        <Zoom right>
          <div className="About-Image-Div">
            <img src={MeInFrame} alt="me" />
          </div>
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={5} className="About-Right-Grid">
        <Zoom right>
          <div>
            <img src={MyName} alt="name" className="About-Myname" />
          </div>
          <Accordian />
        </Zoom>
      </Grid>
    </Grid>
  );
}

export default About;
