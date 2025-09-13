import Td from "../Ui/TableItems/Td";
import Th from "../Ui/TableItems/Th";
import Tr from "../Ui/TableItems/Tr";
import image from "../images/image.jpg";
const Table: React.FC = () => {
  return (
    <section className="w-full overflow-x-auto">
      <table className="min-w-[1000px] mt-16 font-Poppins border-separate border-spacing-y-5">
        <caption className="text-left font-alkaline text-4xl mb-4">
          Our Lovely Dashboard
        </caption>
        <thead>
          <Tr TRclass="text-left bg-red-50">
            <Th THclass="p-5" THtxt="Product" colSpan={2} />
            <Th THclass="p-5" THtxt="Status" />
            <Th THclass="p-5" THtxt="Stock" />
            <Th THclass="p-5" THtxt="Price" />
            <Th THclass="p-5" THtxt="Total Price" />
          </Tr>
        </thead>
        <tbody className=" bg-[#ffffff]">
          <Tr>
            <Td TDtxt="Product + Image" colSpan={2}>
              <div className="flex items-center space-x-1.5 relative group">
                <img
                  className=" cursor-pointer w-[50px] h-[50px] p-1 rounded-xl border border-[#b7b9bb]"
                  src={image}
                  alt="image"
                />
                <p>This Is my Product Name</p>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition ease-out duration-300 pointer-events-none cursor-pointer">
                  <div className="w-3 h-3 absolute bottom-0 bg-red-400 border border-[#b7b9bb] rotate-45 mx-auto mt-1"></div>
                  <div className="p-2 bg-white border border-[#b7b9bb] rounded-xl shadow-lg">
                    <img
                      className="w-[200px] h-[200px] object-contain"
                      src={image}
                      alt="preview"
                    />
                  </div>
                </div>
              </div>
            </Td>
            <Td>Product</Td>
            <Td> Product</Td>
            <Td> Product</Td>
            <Td>Product </Td>
          </Tr>
        </tbody>
      </table>
    </section>
  );
};
export default Table;
