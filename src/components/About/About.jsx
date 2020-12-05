import React from "react";
import { Grid } from "@material-ui/core";
import MeInFrame from "../../assets/Aboutus/MeInFrame.png";
import "./About.scss";
import Accordian from "./Accordian";
import MyName from "../../assets/Aboutus/name.png";

function About() {
  return (
    <Grid container className="AboutMe-Wrapper">
      <Grid item xs={12} sm={6} className="About-left-Grid">
        <div className="About-Image-Div">
          <img src={MeInFrame} alt="me" />
        </div>
      </Grid>
      <Grid item xs={12} sm={5} className="About-Right-Grid">
        <div>
          <img src={MyName} alt="name" className="About-Myname" />
        </div>
        <Accordian />
      </Grid>
    </Grid>
  );
}

export default About;
