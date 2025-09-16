import TableBtn from "../Ui/TableItems/TableBtn";
import Td from "../Ui/TableItems/Td";
import TdImage from "../Ui/TableItems/TdImage";
import Th from "../Ui/TableItems/Th";
import Tr from "../Ui/TableItems/Tr";
import classes from "../Ui/TableItems/table.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const Table: React.FC = () => {
  type Item = {
    id: string;
    title: string;
    image: string;
    status: string;
    stock: number;
    price: number;
  };
  const events = useLoaderData();
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-left font-alkaline text-4xl my-10">
          {" "}
          Our Lovely Dashboard
        </h1>
        <div className="flex space-x-3 items-center px-5 py-2 bg-black font-Poppins cursor-pointer rounded-2xl text-white">
          <IoIosAddCircleOutline size="1.5rem" />
          <Link to="new" className="cursor-pointer">
            Add Product
          </Link>
        </div>
      </div>

      <section className="w-full  h-[100vh] my ">
        <table className="w-full min-w-[1000px] font-Poppins border-collapse border-spacing-0 border border-[#e8fbeb] shadow-xl ">
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
            {events.map((item: Item, itemIndex: number) => {
              let TDclass = "px-3 py-2 text-[#43b47a] bg-[#e8fbeb]";
              if (item.status == "Scoping") {
                TDclass = "px-3 py-2 bg-[#dcfaff] text-[#2a52ab]";
              } else if (item.status == "Production") {
                TDclass = "px-3 py-2 bg-[#fff8bc] text-[#e8bb56]";
              }
              let stockClass = "";
              if (item.stock == 0) stockClass = "text-red-500";
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
                        colors=" bg-[#fff8bc]  text-[#e8bb56]"
                        text="Edit"
                        link={`${item.id}/Edit`}
                      />
                      <TableBtn
                        colors=" text-red-600 rounded-2xl bg-red-300"
                        text="Delete"
                        link=""
                      />
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Table;

export async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
