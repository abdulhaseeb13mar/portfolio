import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
import DialogComp from "./Dialog";
import Zoom from "react-reveal/Zoom";
import "./Projects.scss";

function Projects() {
  const [dialogPhotos, setDialogPhotos] = useState(null);
  const [dialog, setDialog] = useState(false);

  const openDialog = (photos) => {
    setDialogPhotos(photos);
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
    setDialogPhotos(null);
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
