const Th: React.FC<{ THclass: string; THtxt: string; colSpan?: number }> = (
  props
) => {
  return (
    <th colSpan={props.colSpan} scope="col" className={props.THclass}>
      {props.THtxt}
    </th>
  );
};
export default Th;
