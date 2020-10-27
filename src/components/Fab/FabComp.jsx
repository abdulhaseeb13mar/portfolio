/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Fab, makeStyles, Menu, MenuItem, ListItemText } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AddIcon from "@material-ui/icons/Add";

function FabComp() {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (link) => {
    link === "git"
      ? window.open("https://github.com/abdulhaseeb13mar", "_blank")
      : link === "link"
      ? window.open("https://www.linkedin.com/in/AbdulHaseebSE050", "_blank")
      : null;
  };

  return (
    <>
      <Fab color="secondary" aria-label="add" className={classes.fab} onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Menu
        classes={{ paper: classes.menuPaper }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem className={classes.Menu} onClick={() => handleNavigate("git")}>
          <GitHubIcon fontSize="small" style={{ color: "black", marginRight: 10 }} />
          <ListItemText primary="Github" className={classes.menuText} />
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("link")}>
          <LinkedInIcon fontSize="small" style={{ color: "#0077b7", marginRight: 10 }} />
          <ListItemText primary="LinkedIn" className={classes.menuText} />
        </MenuItem>
      </Menu>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  menuText: {
    color: "white",
  },
  menuPaper: {
    backgroundColor: "#424242",
  },
  fab: {
    position: "fixed",
    bottom: 30,
    right: 30,
  },
}));

export default FabComp;
