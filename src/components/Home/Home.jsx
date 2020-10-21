import React, { useState, useEffect } from "react";
import {
  Grid,
  Avatar,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
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
  };

  const handleTabsChange = (e, val) => {
    setTabIndex(val);
  };

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <Grid className="main-home-wrapper" container>
        <Fade bottom when={showHeader}>
          <div className="home-headerbar">
            <AppBar position="static" color="transparent">
              {MediaQueryMatches ? (
                <Toolbar>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleToggleDrawer}>
                    <MenuIcon style={{ color: "white" }} />
                  </IconButton>
                </Toolbar>
              ) : (
                <Tabs value={tabIndex} onChange={handleTabsChange} style={{ color: "white" }}>
                  <Tab label="Home" />
                  <Tab label="About Me" />
                  <Tab label="Projects" />
                  <Tab label="Contact Me" />
                </Tabs>
              )}
            </AppBar>
          </div>
        </Fade>
        <Zoom right cascade when={showStarter}>
          <div className="home-centered-div" onClick={handleToggleShow}>
            <Avatar alt="Me" src={ME} className={classes.large} />
            <Typography variant="h3" className="home-text1">
              Hey! <br /> I am Abdul Haseeb
            </Typography>
          </div>
        </Zoom>
      </Grid>
      <Drawer anchor="top" open={drawerOpen} onClose={handleToggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText>Home</ListItemText>
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
