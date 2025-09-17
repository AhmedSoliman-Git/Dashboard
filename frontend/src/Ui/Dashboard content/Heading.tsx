import type React from "react";
import classes from "./Statistics.module.css";
const Heading: React.FC<{ text: string;}> = (props) => {
  return (
    <div className=" max-w-fit mt-3.5 text-3xl font-Clash relative cursor-pointer">
      <h1 className={classes.text}>{props.text}</h1>
    </div>
  );
};
export default Heading;
