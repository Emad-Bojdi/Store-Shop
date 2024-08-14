import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

export const BasketSidebar = ({ state, clickHandler }) => {
  return (
    <div className="w-full border-2 border-dashed border-red-500 rounded-2xl flex justify-center items-center">
      <div className="w-4/5 p-4 flex flex-col gap-y-4">
        <div className="w-full flex flex-row justify-start items-center text-red-500 gap-x-1">
          <TbChecklist  className="text-xl"/>
          <p className="">Total:</p>
          <span className="text-black">{state.total} $</span>
        </div>
        <div className="w-full flex flex-row justify-start items-center text-red-500 gap-x-1">
          <FaHashtag className="text-xl"/>
          <p className="">Quantity:</p>
          <span className="text-black">{state.itemsCounter}</span>
        </div>
        <div className="w-full flex flex-row justify-start items-center text-red-500 gap-x-1">
          <BsPatchCheck className="text-xl"/>
          <p className="">Status:</p>
          <span className="text-black">{!state.status && "pending..."}</span>
        </div>
        <button className="w-full h-8 mt-10 bg-red-500 text-white rounded-xl font-bold" onClick={() => clickHandler("CHECKOUT")}>
          Checkout
        </button>
      </div>
    </div>
  );
};
