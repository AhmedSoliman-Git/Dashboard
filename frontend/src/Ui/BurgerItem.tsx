const BurgerItem: React.FC<{ itemClass: string; degree?: string }> = (
  props
) => {
  const ItemClass = props.itemClass;
  return <div className={ItemClass}></div>;
};
export default BurgerItem;
