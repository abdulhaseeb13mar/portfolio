import React, { useContext, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import ArticleCard from "./ArticleCard";
import {
  ShowHeaderContext,
  TabContext,
  SubRoutesContext,
} from "../../store/Store";

function Articles() {
  useEffect(() => {
    makeTrue();
  }, []);

  const [showHeader, setShowHeader] = useContext(ShowHeaderContext);
  const [tab, setTab] = useContext(TabContext);
  const [subRoutes, setSubRoutes] = useContext(SubRoutesContext);

  const makeTrue = () => {
    setTimeout(() => {
      setShowHeader(true);
      setTab(3);
      setSubRoutes(true);
    }, 100);
  };
  return (
    <div className="Projects-main-wrapper">
      {/* <Zoom right> */}
      <ArticleCard />
      {/* </Zoom> */}
    </div>
  );
}

export default Articles;
