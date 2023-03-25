import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";

import HTMLIcon from "../../assets/Technologies-Icons/Html-icon.png";
import ETHIcon from "../../assets/Technologies-Icons/Ethereum-logo.png";
import CSSIcon from "../../assets/Technologies-Icons/Css-icon.png";
import FirebaseIcon from "../../assets/Technologies-Icons/Firebase-icon.png";
import JSIcon from "../../assets/Technologies-Icons/Javascript-icon.png";
import ReactIcon from "../../assets/Technologies-Icons/react-icon.jpg";
import VueIcon from "../../assets/Technologies-Icons/Vue-icon.png";
import ArduinoIcon from "../../assets/Technologies-Icons/arduinoicon.png";
import MaterialIcon from "../../assets/Technologies-Icons/materialicon.png";
import NodeJSIcon from "../../assets/Technologies-Icons/nodeJsIcon.png";
import ReduxIcon from "../../assets/Technologies-Icons/reduxicon.png";
import ShopifyIcon from "../../assets/Technologies-Icons/shopifyicon.png";
import CIcon from "../../assets/Technologies-Icons/cicon.png";
import TSIcon from "../../assets/Technologies-Icons/Typescript-icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Who I am</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            25 years old Software Engineer who graduated from NED, Now Working
            at Xord to disrupt through web3.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>My Expertise</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="About-technologies-div">
            <img src={ReactIcon} alt="technologyIcon" />
            <img src={TSIcon} alt="technologyIcon" />
            <img src={JSIcon} alt="technologyIcon" />
            <img src={NodeJSIcon} alt="technologyIcon" />
            <img src={HTMLIcon} alt="technologyIcon" />
            <img src={CSSIcon} alt="technologyIcon" />
            <img src={ETHIcon} alt="technologyIcon" />
            <img src={MaterialIcon} alt="technologyIcon" />
            <img src={ReduxIcon} alt="technologyIcon" />
            <img src={FirebaseIcon} alt="technologyIcon" />
            <img src={CIcon} alt="technologyIcon" />
            <img src={VueIcon} alt="technologyIcon" />
            <img src={ArduinoIcon} alt="technologyIcon" />
            <img src={ShopifyIcon} alt="technologyIcon" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            My Academic Journey
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                First Interaction with Programming language GW BASIC in class 8
              </li>
              <li>Choose computer science in Matriculation</li>
              <li>
                Got <span style={{ fontWeight: "bold" }}>94.5%</span> in
                Matriculation
              </li>
              <li>
                Got <span style={{ fontWeight: "bold" }}>85.45%</span> in
                Intermediate
              </li>
              <li>Choose Software Enginnering in NED Unversity in 2016</li>
              <li>Graduated as a Software Engineer in 2020</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            University Achievements
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li style={{ fontWeight: "bold" }}>
                Winner of the Best Final Year Project 2020 in Software
                Engineering at NED
              </li>
              <li>
                Winner of the Best C project at tech exhibition 2017 at NED
              </li>
              <li>
                Runner up in Techera startup project for Home Automation System
              </li>
              <li>
                Certificate of Excellence for exceptional performance at NED
                Academy as Web Developer
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
