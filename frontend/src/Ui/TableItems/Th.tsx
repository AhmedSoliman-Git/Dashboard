const Th: React.FC<{ THclass: string; THtxt: string; colSpan?: number }> = (
  props
) => {
  return (
    <th
      colSpan={props.colSpan}
      scope="col"
      className={props.THclass + " text-sm lg:text-[1rem] text-[#9d9d9b] "}>
      {props.THtxt}
    </th>
  );
};
export default Th;
