import type { ReactNode } from "react";

const Tr: React.FC<{
  TRclass?: string;
  TRtxt?: string;
  children: ReactNode;
}> = (props) => {
  return <tr className={props.TRclass}>{props.children}</tr>;
};
export default Tr;
