import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";

function Projects() {
  return (
    <div>
      {ProjectsData.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Projects;
