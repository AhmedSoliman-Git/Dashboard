const TdImage: React.FC<{
  image: string;
  text: string;
}> = (props) => {
  return (
    <td colSpan={2} className="relative">
      <div className="flex z-20 gap-5 justify-start ml-3 items-center space-x-1.5 group">
        <img
          className="cursor-pointer w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] p-1 rounded-xl border border-[#b7b9bb]"
          src={props.image}
          alt="image"
        />
        <p className="space-x-3 text-sm lg:text-[1rem]">{props.text}</p>

        <div className="z-50 absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition ease-out duration-300 pointer-events-none">
          <div className="w-3 h-3 absolute bottom-0 bg-red-400 border border-[#b7b9bb] rotate-45 mx-auto mt-1"></div>
          <div className="p-2 bg-white border border-[#b7b9bb] rounded-xl shadow-lg">
            <img
              className="w-[200px] h-[200px] object-contain"
              src={props.image}
              alt="preview"
            />
          </div>
        </div>
      </div>
    </td>
  );
};
export default TdImage;
