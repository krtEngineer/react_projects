import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const ToggleBtn = () => {
  const { toggleSideBar } = useGlobalContext();
  return (
    <div className="sidebar-toggle">
      <button type="button" className="side-toggle" onClick={toggleSideBar}>
        <FaBars />
      </button>
    </div>
  );
};
export default ToggleBtn;
