import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { TabContext, SubRoutesContext } from "../../store/Store";

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const MediaQueryMatches = useMediaQuery("(max-width:640px)");
  const [tab, setTab] = useContext(TabContext);
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);
  const classes = useStyles();

  const handleTabsChange = (val, link, type) => {
    setTab(val);
    val === 0 ? setSubRoutes(false) : setSubRoutes(true);
    props.history.push(link);
    type && handleToggleDrawer();
  };

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="home-headerbar">
      <AppBar
        position="static"
        color="transparent"
        style={{
          boxShadow: !subRoutes && "none",
          backgroundColor: subRoutes && "#424242",
          transition: "0.3s ease-in-out",
          color: subRoutes && "white",
        }}>
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
          <Tabs value={tab} classes={{ indicator: classes.tabindicator }} TabIndicatorProps={{}}>
            <Tab label="Home" onClick={() => handleTabsChange(0, "/")} />
            <Tab label="About Me" onClick={() => handleTabsChange(1, "/about")} />
            <Tab label="Projects" onClick={() => handleTabsChange(2, "/projects")} />
          </Tabs>
        )}
      </AppBar>
      <Drawer anchor="top" open={drawerOpen} onClose={handleToggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText onClick={() => handleTabsChange(0, "/", "d")}>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText onClick={() => handleTabsChange(1, "/about", "d")}>About Me</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText onClick={() => handleTabsChange(2, "/projects", "d")}>Projects</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Contact Me</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tabindicator: {
    height: "3px",
  },
}));

export default Header;
