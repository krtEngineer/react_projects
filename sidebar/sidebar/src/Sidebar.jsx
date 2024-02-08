import { FaTimes } from "react-icons/fa";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  return (
    <div className="sidebar hide-sidebar">
      <SideBarHeader />
      <SideBarContent />
    </div>
  );
};

const SideBarHeader = () => {
  return (
    <div className="sidebar-header">
      <SideBarTitle />
      <SideBarCloseBtn />
    </div>
  );
};

const SideBarTitle = () => {
  return (
    <h2>
      kushagra <span>tiwari</span>
    </h2>
  );
};

const SideBarCloseBtn = () => {
  const { toggleSideBar } = useGlobalContext();
  return (
    <button type="button" className="close-btn" onClick={toggleSideBar}>
      <FaTimes />
    </button>
  );
};

const SideBarContent = () => {
  return (
    <div className="sidebar-content">
      <Links />
      <SocialLinks />
    </div>
  );
};

export default Sidebar;
