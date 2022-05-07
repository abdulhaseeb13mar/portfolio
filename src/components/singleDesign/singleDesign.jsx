/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import "./singleDesign.scss";
import { Carousel } from "react-responsive-carousel";
import DialogComp from "../Projects/Dialog";
import {
  ShowHeaderContext,
  TabContext,
  SubRoutesContext,
} from "../../store/Store";

function SingleDesign(props) {
  useEffect(() => {
    makeTrue();
  }, []);

  const [dialogPhotos, setDialogPhotos] = useState(null);
  const [dialog, setDialog] = useState(false);
  const [images, setImages] = useState(props.history.location.state.images);
  const MediaQueryMatches = useMediaQuery("(max-width:640px)");
  // eslint-disable-next-line no-unused-vars
  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useContext(TabContext);
  // eslint-disable-next-line no-unused-vars
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);

  const handleDialogClose = () => {
    setDialog(false);
    setDialogPhotos(null);
  };

  const makeTrue = () => {
    setTimeout(() => {
      setShowHeader(true);
      setTab(3);
      setSubRoutes(true);
    }, 100);
  };

  const openDialog = (photo) => {
    setDialogPhotos([photo]);
    setDialog(true);
  };

  return (
    <>
      <Grid
        container
        alignItems="stretch"
        justify="space-evenly"
        className="singleDesign-Wrapper"
        style={{ marginTop: 20 }}
      >
        <Grid item xs={12} sm={6} className="singleDesign-left-Grid">
          <Zoom top>
            <div className="singleDesign-Image-Div">
              <div className="circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
              </div>
              <Carousel
                showThumbs={false}
                showArrows={true}
                // autoPlay
                interval={3000}
                infiniteLoop
                stopOnHover
                showStatus={false}
              >
                {images.map((photo) => {
                  return (
                    <img
                      id="singleDesign-Image-Id"
                      src={photo}
                      alt="me"
                      style={{ width: MediaQueryMatches ? "50%" : "36%" }}
                    />
                  );
                })}
              </Carousel>
            </div>
          </Zoom>
        </Grid>
        <Grid item xs={12} sm={5} className="singleDesign-Right-Grid">
          <Typography variant="h4" className="singleDesign-TitleText">
            {props.history.location.state.name}
          </Typography>
          <div className="singleDesign-MoreSS-Wrapper">
            {images.map((item, index) => {
              return (
                <div
                  onClick={() => openDialog(item)}
                  key={index}
                  className="singleDesign-MoreSS-image"
                  style={{
                    backgroundImage: `url(${item})`,
                    width: "21%",
                    height: 270,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    filter: "drop-shadow(5px 4px 3px black)",
                    margin: "0px 10px",
                    minWidth: "118px",
                  }}
                />
              );
            })}
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <div
          style={{
            width: "80%",
            height: "70vh",
            paddingBottom: 20,
            paddingTop: 40,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={props.history.location.state.embed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Grid>
      <DialogComp
        open={dialog}
        dialogPhotos={dialogPhotos}
        close={handleDialogClose}
      />
    </>
  );
}

export default SingleDesign;
