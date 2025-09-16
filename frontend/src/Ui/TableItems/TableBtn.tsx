import { Link } from "react-router";

const TableBtn: React.FC<{
  colors: string;
  text: string;
  link: string;
  func?: () => void;
}> = (props) => {
  return (
    <Link to ={props.link} onClick={props.func} className={"cursor-pointer px-2 rounded-2xl" + props.colors}>
      {props.text}
    </Link>
  );
};
export default TableBtn;
