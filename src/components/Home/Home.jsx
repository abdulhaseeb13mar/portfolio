import React, { useState, useEffect } from "react";
import { Grid, Avatar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "react-reveal/Zoom";
import ME from "../../assets/me.jpg";
import "./Home.scss";

function Home() {
  useEffect(() => {
    makeTrue();
  }, []);
  const [show, setShow] = useState(false);
  const classes = useStyles();

  const makeTrue = () => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  };
  return (
    <Grid className="main-home-wrapper" container>
      <Zoom right cascade when={show}>
        <div className="home-centered-div" onClick={() => setShow(false)}>
          <Avatar alt="Me" src={ME} className={classes.large} />
          <Typography variant="h3" className="home-text1">
            Hey! <br /> I am Abdul Haseeb
          </Typography>
        </div>
      </Zoom>
    </Grid>
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
