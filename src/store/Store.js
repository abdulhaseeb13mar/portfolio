import React, { useState } from "react";

export const TabContext = React.createContext("TabContext");
export const SubRoutesContext = React.createContext("SubRoutesContext");
export const ShowHeaderContext = React.createContext("ShowHeaderContext");

const Store = ({ children }) => {
  const [tab, setTab] = useState(0);
  const [subRoutes, setSubRoutes] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  return (
    <ShowHeaderContext.Provider value={[showHeader, setShowHeader]}>
      <SubRoutesContext.Provider value={[subRoutes, setSubRoutes]}>
        <TabContext.Provider value={[tab, setTab]}>{children}</TabContext.Provider>
      </SubRoutesContext.Provider>
    </ShowHeaderContext.Provider>
  );
};
export default Store;
