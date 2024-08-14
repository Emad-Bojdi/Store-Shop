import { MdDeleteOutline } from "react-icons/md";
import { shortenText } from "../helpers/helper";

export const BasketCard = ({ data, clickHandler }) => {
  const { title, image, quantity } = data;
  return (
    <div className="w-full border border-dashed border-stone-400 rounded-xl flex flex-row justify-start items-center p-5">
      <img src={image} alt={title} className="w-10 h-10 bg-inherit" />
      <div className="w-full flex justify-center">
        <p className="">{shortenText(title)}</p>
      </div>
      <div className="w-1/5 flex flex-row justify-center items-center gap-x-2">
        {quantity === 1 && (
          <button
            className="bg-red-500 w-6 h-6 rounded-md text-white text-xl relative"
            onClick={() => clickHandler("REMOVE_ITEM", data)}
          >
            <MdDeleteOutline className="absolute left-[2px] top-[2px]"/>
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => clickHandler("DECREASE", data)}
            className="bg-red-500 w-6 h-6 rounded-md text-white text-xl relative"
          >
            {" "}
            <span className="absolute top-[-4px] right-[8px]"> - </span>{" "}
          </button>
        )}
        <span>{quantity}</span>
        <button className="bg-red-500 w-6 h-6 rounded-md text-white text-xl relative" onClick={() => clickHandler("INCREASE", data)}>
          <span className="absolute top-[-5px] right-[5px]"> + </span>
        </button>
      </div>
    </div>
  );
};
