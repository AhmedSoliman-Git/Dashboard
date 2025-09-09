import BurgerMenu from "./BurgerMenu";

const Menu = () => {
  return (
    <div className="flex justify-around items-center">
      <p className="py-8 font-alkaline font-bold text-4xl ml-4">Dashboard.</p>{" "}
      <BurgerMenu />
    </div>
  );
};
export default Menu;
