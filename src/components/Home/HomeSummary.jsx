import React, { useContext } from "react";
import { TabContext, SubRoutesContext } from "../../store/Store";
import { Typography, Avatar, makeStyles, Button } from "@material-ui/core";
import ME from "../../assets/me.jpg";
import "./Home.scss";

function HomeSummary(props) {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useContext(TabContext);
  // eslint-disable-next-line no-unused-vars
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);

  const goToAboutPage = () => {
    setTab(1);
    setSubRoutes(true);
    props.history.push("/about");
  };

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
              <Button
                variant="contained"
                color="secondary"
                className="home-MySummary-btns-knowMe"
                onClick={goToAboutPage}>
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
