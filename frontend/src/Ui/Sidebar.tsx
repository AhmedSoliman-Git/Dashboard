import Listitem from "./Listitem";
import { RxDashboard } from "react-icons/rx";
import Menu from "./Menu";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { useAppSelector } from "../utils/hooks";

const Sidebar: React.FC = () => {
  let otherTheme =
    "relative ease-in-out duration-300 h-[100vh] overflow-hidden w-[300px] py-1.5 bg-black border-r-1 border-[#f5f5f5] shadow-lg flex flex-col justify-between";

  const sideStatus: boolean = useAppSelector(
    (state) => state.sidebarReducer.opened
  );

  let SideClass =
    "fixed w-full md:fixed z-100 ease-in-out duration-300 h-[100vh] overflow-hidden md:w-[300px] py-1.5 bg-linear-to-b from-[#ffffff] to-[#fbe7e2] border-r-1 border-[#f5f5f5] shadow-lg flex flex-col justify-between";
  if (sideStatus)
    SideClass =
      "fixed md:fixed z-100 ease-in-out duration-300 h-[100vh] overflow-hidden w-[40px] py-1.5 bg-linear-to-b from-[#ffffff] to-[#fbe7e2] border-r-1 border-[#f5f5f5] shadow-lg flex flex-col justify-between";
  return (
    <div className={SideClass}>
      <div>
        <Menu />
        <div>
          <ul className="flex flex-col justify-center items-center">
            <Listitem
              itemLink="/dashboard"
              title="Dashboard"
              ariaLabel="Dashboard"
              icon={<RxDashboard />}
              text="Dashboard"
              end
            />
            <Listitem
              itemLink="/Statistics"
              ariaLabel="Statistics"
              icon={<FiBarChart2 />}
              text="Statistics"
              title="Statistics"
            />
            <Listitem
              itemLink="/settings"
              ariaLabel="Settings"
              icon={<IoSettingsOutline />}
              text="Setting"
              title="Setting"
            />
          </ul>
        </div>
      </div>

      <p className="flex flex-col justify-center items-center">
        <Listitem
          itemLink="/help"
          ariaLabel="Help"
          icon={<BiSupport />}
          text="help"
          title="Help"
        />
        <Listitem
          itemLink="/logout"
          ariaLabel="Logout"
          icon={<IoIosLogOut />}
          text="Logout"
          title="Logout"
        />
      </p>
    </div>
  );
};

export default Sidebar;
