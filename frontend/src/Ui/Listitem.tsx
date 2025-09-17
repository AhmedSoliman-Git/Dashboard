import type React from "react";
import { NavLink } from "react-router-dom";

interface MyComponentProps {
  text: string;
  icon: any;
  ariaLabel: string;
  title: string;
  itemLink: string;
  end?: boolean;
  fun ?: any;
}

const Listitem: React.FC<MyComponentProps> = (props) => {
  let firstTheme =
    "flex space-x-4 w-[90%] text-[#555b5b] my-2 items-center py-2 rounded-2xl transition-all duration-200 hover:bg-linear-to-l from-[#e6ddf7] to-[#ebdae4] cursor-pointer hover:text-black ";

  let otherTheme =
    "flex space-x-4 w-[90%] text-white my-2 items-center py-2 rounded-2xl transition-all duration-200  hover:bg-[#a8ff01] cursor-pointer hover:text-black";

  let active =
    "flex space-x-4 w-[90%] text-[#555b5b] my-2 items-center py-2 rounded-2xl transition-all duration-200 bg-linear-to-l from-[#e6ddf7] to-[#ebdae4] cursor-pointer text-black";
    
  return (
    <NavLink
      to={props.itemLink}
      title={props.title}
      aria-label={props.ariaLabel}
      className={({ isActive }) => (isActive ? active : firstTheme)}
      onClick={props.fun}
      end>
      <span className="text-[1.2rem]  ml-2">{props.icon}</span>{" "}
      <span className=" font-semibold text-[0.8rem] my-2 font-Inter">
        {props.text}{" "}
      </span>
    </NavLink>
  );
};

export default Listitem;
