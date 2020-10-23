import React, { useState, useEffect, useContext } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { ShowHeaderContext } from "../../store/Store";
import HomeSummary from "./HomeSummary";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import ME from "../../assets/me.jpg";
import "./Home.scss";

function Home(props) {
  useEffect(() => {
    makeTrue();
  }, []);

  const [showStarter, setShowStarter] = useState(false);
  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  const classes = useStyles();

  const makeTrue = () => {
    setTimeout(() => {
      setShowStarter(true);
    }, 200);
  };

  const handleToggleShow = () => {
    setShowStarter(false);
    setShowHeader(true);
    setTimeout(() => {
      document.getElementsByClassName("home-centered-div")[0].style.display = "none";
      document.getElementsByClassName("home-MySummary-div")[0].style.display = "flex";
    }, 300);
  };

  return (
    <>
      <Grid className="main-home-wrapper" container style={{ opacity: showHeader ? 0.7 : 1 }}></Grid>
      <Fade left when={showHeader} collapse>
        <HomeSummary />
      </Fade>
      <Zoom right cascade when={showStarter} collapse>
        <div className="home-centered-div" onClick={handleToggleShow}>
          <Avatar alt="Me" src={ME} className={classes.large} />
          <Typography variant="h3" className="home-text1">
            Hey! I am <br /> Abdul Haseeb
          </Typography>
        </div>
      </Zoom>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    boxShadow: "0px 0px 18px 8px black",
    transition: "0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      width: theme.spacing(35),
      height: theme.spacing(35),
    },
  },
}));

export default Home;
