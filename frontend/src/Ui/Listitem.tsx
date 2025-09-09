import type React from "react";

interface MyComponentProps {
  text: string;
  icon: any;
}
const Listitem: React.FC<MyComponentProps> = (props) => {
  return (
    <li className="flex space-x-4 w-[90%] text-[#555b5b] my-2 items-center py-2 rounded-2xl transition-all duration-200  hover:bg-gradient-to-b from-[#ebdce0] to-[#fcc0c3] cursor-pointer hover:text-black ">
      <span className="text-[1.2rem]  ml-2">{props.icon}</span>{" "}
      <span className=" font-semibold text-[0.8rem] my-2 font-Inter">
        {props.text}{" "}
      </span>
    </li>
  );
};

export default Listitem;
