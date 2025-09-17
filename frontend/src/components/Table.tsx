import TableBtn from "../Ui/TableItems/TableBtn";
import Td from "../Ui/TableItems/Td";
import TdImage from "../Ui/TableItems/TdImage";
import Th from "../Ui/TableItems/Th";
import Tr from "../Ui/TableItems/Tr";
import classes from "../Ui/TableItems/table.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  Link,
  redirect,
  useLoaderData,
  useSubmit,
  type ActionFunctionArgs,
} from "react-router";
import { getToken, useAppSelector } from "../utils/hooks";
import { useState } from "react";
import TablePaginationBtn from "../Ui/TableItems/TablePaginationBtn";
import { toast } from "react-toastify";

const Table: React.FC = () => {
  type Item = {
    id: string;
    title: string;
    image: string;
    status: string;
    stock: number;
    price: number;
  };

  const events: Item[] = useLoaderData();
  const submit = useSubmit();
  const searchQuery = useAppSelector((state) => state.searchReducer.query);

  const filteredEvents = events.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price.toString().includes(searchQuery) ||
      item.stock.toString().includes(searchQuery)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  function startDeleteHandler(id: string) {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      toast.info(" Item Is Deleted ⌛...");

      submit(null, { method: "delete", action: `/dashboard/${id}` });
    }
  }

  return (
    <>
      <div className="md:flex sm:space-x-3 md:justify-between items-center">
        <h1 className="text-left text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-alkaline my-10">
          Our Lovely Dashboard
        </h1>
        <div className="w-fit my-3 px-3 py-1 text-sm md:text-[0.8rem] lg:text-[1rem] flex space-x-3 items-center md:px-5 md:py-2 bg-black font-Poppins cursor-pointer rounded-2xl text-white">
          <IoIosAddCircleOutline size="1.1rem" />
          <Link to="new" className="cursor-pointer ">
            Add Product
          </Link>
        </div>
      </div>

      <section className=" m-auto sm:w-[540px] lg:w-full overflow-x-auto ">
        <table className="w-[1000px] lg:w-full font-Poppins border-collapse border-spacing-0 border border-[#e8fbeb] shadow-xl ">
          <thead>
            <Tr TRclass=" text-center bg-[#ffffff]">
              <Th THclass="p-5" THtxt="Product" colSpan={2} />
              <Th THclass="p-5" THtxt="Status" />
              <Th THclass="p-5" THtxt="Stock" />
              <Th THclass="p-5" THtxt="Price" />
              <Th
                THclass="p-5 tracking-wider"
                colSpan={2}
                THtxt="Total Price"
              />
            </Tr>
          </thead>

          <tbody className={classes.borders + " bg-[#ffffff]"}>
            {currentItems.map((item: Item, itemIndex: number) => {
              let TDclass = "px-3 py-2 text-[#43b47a] bg-[#e8fbeb]";
              if (item.status === "Scoping") {
                TDclass = "px-3 py-2 bg-[#dcfaff] text-[#2a52ab]";
              } else if (item.status === "Production") {
                TDclass = "px-3 py-2 bg-[#fff8bc] text-[#e8bb56]";
              }

              let stockClass = "";
              if (item.stock === 0) stockClass = "text-red-500";

              return (
                <Tr key={itemIndex}>
                  <TdImage image={item.image} text={item.title} />
                  <Td TDclass={TDclass}>{item.status}</Td>
                  <Td TDclass={stockClass}>{item.stock}</Td>
                  <Td>{item.price}</Td>
                  <Td TDclass=" relative flex" colSpan={2}>
                    <p>{item.stock * item.price}</p>
                    <div className="absolute top-0 right-0 p-5 items-end flex space-x-1.5 text-[0.8rem]">
                      <TableBtn
                        isLink
                        colors=" bg-[#fff8bc] text-[#e8bb56]"
                        text="Edit"
                        link={`${item.id}/Edit`}
                      />
                      <TableBtn
                        isLink={false}
                        colors=" text-red-600 rounded-2xl bg-red-300"
                        text="Delete"
                        link={""}
                        func={() => startDeleteHandler(item.id)}
                      />
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
      </section>
      <div className="flex justify-center items-center space-x-3 my-5">
        <TablePaginationBtn
          disabledBtn={currentPage === 1}
          func={() => setCurrentPage((p) => p - 1)}
          text="Prev"
        />

        <p className="font-Poppins">
          Page{" "}
          <span className=" text-sm md:text-[0.8rem] p-2 bg-red-100 rounded-lg">
            {currentPage}
          </span>{" "}
          of{" "}
          <span className=" text-sm md:text-[0.8rem] p-2 bg-red-100 rounded-lg">
            {totalPages}
          </span>
        </p>

        <TablePaginationBtn
          disabledBtn={currentPage === totalPages}
          func={() => setCurrentPage((p) => p + 1)}
          text="Next"
        />
      </div>
    </>
  );
};
export default Table;

export async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  const token = getToken();
  if (!token) return redirect("/");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch Items." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function action({ params, request }: ActionFunctionArgs) {
  const eventId = params.id;
  console.log("Deleting...", params.id);

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not Delete Item." }), {
      status: 500,
    });
  }
  return redirect("/dashboard");
}
