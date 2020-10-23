import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { GitHub, Tv, PhotoLibrary } from "@material-ui/icons";
import me from "../../assets/companions2.png";
import ReactIcon from "../../assets/React-icon.png";

function ProjectCard({ project }) {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "20px" }}>
      <Card className={classes.root}>
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
                return <img src={project.technologies[tech]} alt="logo" style={{ width: 30 }} />;
              })}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {project.github && (
            <Button size="small" color="secondary">
              <GitHub style={{ color: "black" }} />
            </Button>
          )}
          {project.demo && (
            <Button size="small">
              <Tv style={{ color: "white" }} />
            </Button>
          )}
          {project.photos && (
            <Button size="small">
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
