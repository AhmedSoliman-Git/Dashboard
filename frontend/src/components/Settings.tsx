import Heading from "../Ui/Dashboard content/Heading";
import Sidebar from "../Ui/Sidebar";
import { useAppSelector } from "../utils/hooks";

const Settings: React.FC = () => {
  const sideStatus: boolean = useAppSelector(
    (state) => state.sidebarReducer.opened
  );
  let content = "ml-22 w-[calc(100%-150px)] ease-in-out duration-300";
  if (!sideStatus) {
    content = "w-[78%] ml-80 ease-in-out duration-300 ";
  }
  return (
    <section>
      <main className="flex gap-x-7">
        <Sidebar />

        <div className="flex w-full flex-col items-center m-auto">
          <main className={`${content} mx-auto`}>
            <Heading text="Settings" />
          </main>
        </div>
      </main>
    </section>
  );
};

export default Settings;
