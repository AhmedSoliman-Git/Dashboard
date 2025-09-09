import Listitem from "./Listitem";
import { RxDashboard } from "react-icons/rx";
import Menu from "./Menu";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

const Sidebar: React.FC = () => {

  return (
    <div className="h-[100vh] overflow-hidden w-[300px] py-1.5 bg-linear-to-b from-[#ffffff] to-[#fbe7e2] border-r-1 border-[#f5f5f5] shadow-lg flex flex-col justify-between">
      <div>
        <Menu />
        <div>
          <ul className="flex flex-col justify-center items-center">
            <Listitem icon={<RxDashboard />} text="Dashboard" />
            <Listitem icon={<FiBarChart2 />} text="Statistics" />
            <Listitem icon={<IoSettingsOutline />} text="Setting" />
          </ul>
        </div>
      </div>
      <p className="flex flex-col justify-center items-center">
        <Listitem icon={<BiSupport />} text="help" />
        <Listitem icon={<IoIosLogOut />} text="Logout" />
      </p>
    </div>
  );
};

export default Sidebar;
