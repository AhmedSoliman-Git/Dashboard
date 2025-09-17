const Td: React.FC<{
  TDclass?: string;
  TDtxt?: string;
  colSpan?: number;
  children: React.ReactNode;
}> = (props) => {
  return (
    <td
      colSpan={props.colSpan}
      scope="row"
      className={props.TDclass + " text-sm lg:text-[1rem] text-center p-5"}>
      {props.children}
    </td>
  );
};
export default Td;
