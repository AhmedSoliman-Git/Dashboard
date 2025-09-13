import Search from "../Ui/Dashboard content/Search";
import Statistics from "../Ui/Dashboard content/Statistics";
import Table from "./Table";
import { useAppSelector } from "../utils/hooks";
const DashboardContent: React.FC = () => {
  const sideStatus: boolean = useAppSelector(
    (state) => state.sidebarReducer.opened
  );
  let content = "ml-22 w-[80%] ease-in-out duration-300";
  if (!sideStatus) {
    content = "w-[80%]  ml-80 ease-in-out duration-300 ";
  }
  return (
    <div className="flex w-[80%] flex-col items-center m-auto">
      <main className={`${content} mx-auto`}>
        <Search />
        <Statistics />
        <Table />
      </main>
    </div>
  );
};

export default DashboardContent;
