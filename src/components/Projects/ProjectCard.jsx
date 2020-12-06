import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { GitHub, Tv, PhotoLibrary } from "@material-ui/icons";

function ProjectCard(props) {
  const classes = useStyles();
  const { project } = props;

  const handleGithubLink = () => {
    window.open(project.github);
  };

  const handleDemoLink = () => {
    window.open(project.demo);
  };

  const handlePhotosLink = () => {
    props.openDialog(project.photos);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Card className={classes.root} onClick={handlePhotosLink}>
        <CardActionArea>
          <CardMedia className={classes.media} image={project.cardPhoto} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography variant="body2" gutterBottom component="p">
              {project.description}
            </Typography>
            <div>
              {Object.keys(project.technologies).map((tech) => {
                return (
                  <img
                    aria-label={tech}
                    src={project.technologies[tech]}
                    alt="logo"
                    style={{ width: 20, marginLeft: 5, marginRight: 5 }}
                  />
                );
              })}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {project.github && (
            <Button size="small" color="secondary" onClick={handleGithubLink}>
              <GitHub style={{ color: "black" }} />
            </Button>
          )}
          {project.demo && (
            <Button size="small" onClick={handleDemoLink}>
              <Tv style={{ color: "white" }} />
            </Button>
          )}
          {project.photos && (
            <Button size="small" onClick={handlePhotosLink}>
              <PhotoLibrary color="secondary" />
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#424242",
    color: "white",
  },
  media: {
    height: 140,
  },
});

export default ProjectCard;
