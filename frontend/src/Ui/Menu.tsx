import BurgerMenu from "./BurgerMenu";
import { useAppSelector } from "../utils/hooks";
const Menu = () => {
  const sideStatus: boolean = useAppSelector(
    (state) => state.sidebarReducer.opened
  );
  let otherTheme = "py-8 text-white font-alkaline font-bold text-4xl ml-4";
  let sideDashboard = "py-8 font-alkaline font-bold text-4xl ml-4";
  let sideDev = "flex justify-around items-center";
  if (sideStatus) {
    sideDashboard = "hidden";
    otherTheme = "hidden";
    sideDev = "flex items-center justify-center py-8";
  }
  return (
    <div className={sideDev}>
      <p className={sideDashboard}>Dashboard.</p> <BurgerMenu />
    </div>
  );
};
export default Menu;
