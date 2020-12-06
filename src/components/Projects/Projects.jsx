import React, { useState, useEffect, useContext } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
import DialogComp from "./Dialog";
import Zoom from "react-reveal/Zoom";
import { ShowHeaderContext, TabContext, SubRoutesContext } from "../../store/Store";
import "./Projects.scss";

function Projects() {
  useEffect(() => {
    makeTrue();
  }, []);
  const [dialogPhotos, setDialogPhotos] = useState(null);
  const [dialog, setDialog] = useState(false);
  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useContext(TabContext);
  // eslint-disable-next-line no-unused-vars
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);

  const openDialog = (photos) => {
    setDialogPhotos(photos);
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
    setDialogPhotos(null);
  };

  const makeTrue = () => {
    setTimeout(() => {
      setShowHeader(true);
      setTab(2);
      setSubRoutes(true);
    }, 100);
  };

  return (
    <>
      <div className="Projects-main-wrapper">
        {ProjectsData.map((project) => {
          return (
            <Zoom right>
              <ProjectCard project={project} openDialog={openDialog} />
            </Zoom>
          );
        })}
      </div>
      <DialogComp open={dialog} dialogPhotos={dialogPhotos} close={handleDialogClose} />
    </>
  );
}

export default Projects;
