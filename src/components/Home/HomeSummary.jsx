import React, { useContext } from "react";
import { TabContext, SubRoutesContext } from "../../store/Store";
import { Typography, Avatar, makeStyles, Button } from "@material-ui/core";
import ME from "../../assets/me.png";
import "./Home.scss";

function HomeSummary(props) {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useContext(TabContext);
  // eslint-disable-next-line no-unused-vars
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);

  const goToPage = (link, tab) => {
    setTab(tab);
    setSubRoutes(true);
    props.history.push(link);
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
              Graduated from NED University of Engineering and Technology.{" "}
              <br />
              Now working as a Web3 Engineer at Xord. <br />
              Started my career with keen interest in the web development and
              front end. <br />
              My Expertise lies in React and Blockchain. <br />
            </Typography>
            <div className="home-MySummary-btns-div">
              <Button
                variant="contained"
                color="secondary"
                className="home-MySummary-btns-knowMe"
                onClick={() => goToPage("./about", 1)}
              >
                Know me more
              </Button>
              <Button
                variant="contained"
                className="home-MySummary-btns-projects"
                onClick={() => goToPage("./projects", 2)}
              >
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
