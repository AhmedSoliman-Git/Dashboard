import Search from "../Ui/Dashboard content/Search";
import Statistics from "../Ui/Dashboard content/Statistics";
import Table from "./Table";
import { useAppSelector } from "../utils/hooks";
const DashboardContent: React.FC = () => {
  const sideStatus: boolean = useAppSelector(
    (state) => state.sidebarReducer.opened
  );
  let content = "ml-22 w-[calc(100%-150px)] ease-in-out duration-300";
  if (!sideStatus) {
    content = "w-[68%] lg:ml-80 ease-in-out duration-300 ";
  }
  return (
    <div className="flex w-full flex-col items-center m-auto">
      <main className={`${content} mx-auto`}>
        <Search />
        <Statistics />
        <Table />
      </main>
    </div>
  );
};

export default DashboardContent;
