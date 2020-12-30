import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Dialog, AppBar, Toolbar, IconButton, makeStyles, Slide } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function DialogComp(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.close();
  };

  return (
    <>
      <Dialog
        fullScreen
        open={props.open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{ style: { backgroundColor: "#212121" } }}>
        <AppBar color="secondary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </IconButton>
            {/* <Typography>Family Wins Web App</Typography> */}
          </Toolbar>
        </AppBar>
        {props.dialogPhotos && (
          <Carousel showThumbs={false} showArrows={true}>
            {props.dialogPhotos.map((photo) => {
              return (
                <div>
                  <img src={photo} alt="img" />
                </div>
              );
            })}
          </Carousel>
        )}
      </Dialog>
    </>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default DialogComp;
