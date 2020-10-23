import React from "react";
import { Typography, Avatar, makeStyles, Button } from "@material-ui/core";
import ME from "../../assets/me.jpg";
import "./Home.scss";

function HomeSummary() {
  const classes = useStyles();

  return (
    <div className="home-MySummary-wrapper">
      <div className="home-MySummary-div">
        <div className="MySummary-avatar-div">
          <Avatar alt="Me" src={ME} className={classes.large} />
        </div>
        <div className="MySummary-summary-div">
          <div className="MySummary-summary-heading">
            <Typography variant="h4">I AM A SOFTWARE ENGINEER</Typography>
          </div>
          <div className="MySummary-summary-details">
            <Typography variant="subtitle1">
              Graduated from NED University of Engineering and Technology. <br />
              Started my careeer with keen intereast in the web development and front end. <br />
              My Expertise lies in the JavaScript language and React.
            </Typography>
            <div className="home-MySummary-btns-div">
              <Button variant="contained" color="secondary" className="home-MySummary-btns-knowMe">
                Know me more
              </Button>
              <Button variant="contained" className="home-MySummary-btns-projects">
                My Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    boxShadow: "0px 0px 4px 4px rgb(0,0,0,0.5)",
  },
}));

export default HomeSummary;
