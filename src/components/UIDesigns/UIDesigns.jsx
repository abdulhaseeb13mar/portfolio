/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import Designs from "../../assets/Designs";
import { Typography } from "@material-ui/core";
import "./UIDesigns.scss";
import {
  ShowHeaderContext,
  TabContext,
  SubRoutesContext,
} from "../../store/Store";
import Zoom from "react-reveal/Zoom";

function UIDesigns(props) {
  useEffect(() => {
    makeTrue();
  }, []);

  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  const [tab, setTab] = useContext(TabContext);
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);

  const makeTrue = () => {
    setTimeout(() => {
      setShowHeader(true);
      setTab(4);
      setSubRoutes(true);
    }, 100);
  };
  return (
    <div className="All-Cards-Wrapper">
      {Designs.map((item, index) => (
        <Zoom right key={index}>
          <div
            className="Font-Card-div"
            onClick={() =>
              props.history.push({
                pathname: "/single-design",
                state: item,
              })
            }
          >
            <img className="Font-Card-Img" src={item.splash} alt="asd" />
            <Typography className="Font-Card-Txt" variant="h5">
              {item.name}
            </Typography>
          </div>
        </Zoom>
      ))}
    </div>
  );
}

export default UIDesigns;
