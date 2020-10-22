import React, { useState, useEffect } from "react";
import {
  Grid,
  Avatar,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import HomeSummary from "./HomeSummary";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import ME from "../../assets/me.jpg";
import "./Home.scss";

function Home() {
  useEffect(() => {
    makeTrue();
  }, []);
  const [showStarter, setShowStarter] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const MediaQueryMatches = useMediaQuery("(max-width:640px)");
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

  const handleTabsChange = (e, val) => {
    setTabIndex(val);
  };

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <Grid className="main-home-wrapper" container style={{ opacity: showHeader ? 0.7 : 1 }}></Grid>
      <Fade bottom when={showHeader} collapse>
        <div className="home-headerbar">
          <AppBar position="static" color="transparent" style={{ boxShadow: "none" }}>
            {MediaQueryMatches ? (
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleToggleDrawer}>
                  <MenuIcon style={{ color: "black" }} />
                </IconButton>
              </Toolbar>
            ) : (
              <Tabs value={tabIndex} onChange={handleTabsChange}>
                <Tab label="Home" />
                <Tab label="About Me" />
                <Tab label="Projects" />
                <Tab label="Contact Me" />
              </Tabs>
            )}
          </AppBar>
        </div>
      </Fade>
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
      <Drawer anchor="top" open={drawerOpen} onClose={handleToggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>About Me</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Projects</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Contact Me</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
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
