const TablePaginationBtn: React.FC<{
  disabledBtn: boolean;
  text: string;
  func: () => void;
}> = (props) => {
  let pagClass =
    " hover:bg-gray-400 hover:text-white px-3 py-1 font-Clash bg-gray-200 rounded disabled:opacity-50";
  return (
    <button
      disabled={props.disabledBtn}
      onClick={props.func}
      className={
        props.disabledBtn
          ? pagClass + " cursor-not-allowed"
          : pagClass + " cursor-pointer"
      }>
      {props.text}
    </button>
  );
};

export default TablePaginationBtn;
