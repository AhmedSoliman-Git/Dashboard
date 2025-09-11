import Search from "../Ui/Dashboard content/Search";
import Statistics from "../Ui/Dashboard content/Statistics";

const DashboardContent: React.FC = () => {
  return (
    <main className="w-full">
      <Search />
      <Statistics />
    </main>
  );
};

export default DashboardContent;
