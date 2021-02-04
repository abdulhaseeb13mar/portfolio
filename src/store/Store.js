import React, { useState, createContext } from "react";

export const TabContext = createContext("TabContext");
export const SubRoutesContext = createContext("SubRoutesContext");
export const ShowHeaderContext = createContext("ShowHeaderContext");

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
