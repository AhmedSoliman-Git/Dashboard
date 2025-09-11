import { sidebarActions } from "../Store/sidebarSlice";
import { useAppDispatch } from "../utils/hooks";
import BurgerItem from "./BurgerItem";
const BurgerMenu: React.FC = () => {

  const dispatch = useAppDispatch();
  function changeSideStatus(): void {
    dispatch(sidebarActions.openSideBar());
  }

  return (
    <div>
      <button className="relative group" onClick={changeSideStatus}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all  ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
            <BurgerItem itemClass="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150" />
            <BurgerItem itemClass="bg-black h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-10" />
            <BurgerItem itemClass="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150" />
          </div>
        </div>
      </button>
    </div>
  );
};
export default BurgerMenu;
