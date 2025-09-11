import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { HiViewfinderCircle } from "react-icons/hi2";

const Search: React.FC<{}> = (props) => {
  const searchValue = useRef<HTMLInputElement>(null);
  return (
    <form className="w-[60%] mt-5 m-auto font-Poppins font-extralight">
      <p className="flex items-center space-x-4 border-[#b7b9bb] border rounded-2xl px-4">
        <CiSearch size="1.5rem" color="#b7b9bb" />
        <input
          className="w-full border-0 outline-0 p-2 "
          type="text"
          placeholder="Search or type a command"
        />

        <span
          title="Search"
          className="cursor-pointer p-1 shadow-xl bg-[#fafafa] rounded-2xl border border-[#ececec] duration-300 hover:bg-[#edd9fc] hover:rotate-45">
          <HiViewfinderCircle size="1.2rem" />
        </span>
      </p>
    </form>
  );
};

export default Search;
