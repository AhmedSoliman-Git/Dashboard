import Listitem from "./Listitem";
import { RxDashboard } from "react-icons/rx";
import Menu from "./Menu";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { DeleteToken, useAppSelector } from "../utils/hooks";
import { useNavigate } from "react-router";

const Sidebar: React.FC = () => {
 

  const sideStatus: boolean = useAppSelector(
    (state) => state.sidebarReducer.opened
  );
  const navigate = useNavigate();
  function handleLogout() {
    DeleteToken();
    navigate("/");
  }

  let SideClass =
    "fixed w-full z-100 ease-in-out duration-300 h-[100vh] overflow-hidden md:w-[300px] py-1.5 bg-linear-to-b from-[#ffffff] to-[#fbe7e2] border-r-1 border-[#f5f5f5] shadow-lg flex flex-col justify-between";
  if (sideStatus)
    SideClass =
      "fixed z-100 ease-in-out duration-300 h-[100vh] overflow-hidden w-[40px] py-1.5 bg-linear-to-b from-[#ffffff] to-[#fbe7e2] border-r-1 border-[#f5f5f5] shadow-lg flex flex-col justify-between";

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
        <button
          className="flex space-x-4 w-[90%] text-[#555b5b] my-2 items-center py-2 rounded-2xl transition-all duration-200 hover:bg-linear-to-l from-[#e6ddf7] to-[#ebdae4] cursor-pointer hover:text-black "
          onClick={handleLogout}>
          <span className="text-[1.2rem]  ml-2">
            {" "}
            <IoIosLogOut />
          </span>{" "}
          <span className=" font-semibold text-[0.8rem] my-2 font-Inter">
            Logout
          </span>
        </button>
      </p>
    </div>
  );
};

export default Sidebar;
