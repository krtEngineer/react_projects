import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    // setIsSideBarOpen(!isSideBarOpen);
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hide-sidebar");
  };
  return (
    <AppContext.Provider value={{ toggleSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
