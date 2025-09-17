import { Link } from "react-router";

const TableBtn: React.FC<{
  colors: string;
  text: string;
  link: string;
  isLink: boolean;
  func?: () => void;
}> = (props) => {
  let content = (
    <Link
      to={props.link}
      onClick={props.func}
      className={"cursor-pointer px-2 rounded-2xl" + props.colors}>
      {props.text}
    </Link>
  );
  if (props.isLink == false) {
    content = (
      <button
        onClick={props.func}
        className={"cursor-pointer px-2 rounded-2xl" + props.colors}>
        {props.text}
      </button>
    );
  }

  return content;
};
export default TableBtn;
