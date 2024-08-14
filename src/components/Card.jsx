/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { productQuantity, shortenText } from "../helpers/helper";

import { useCart } from "../context/CartContext";

export const Card = ({ data }) => {
  const { title, id, price, image } = data;

  const { state, dispatch } = useCart();
  const quantity = productQuantity(state, id);
  console.log(quantity);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
    console.log({ type, data });
  };
  console.log(state);
  return (
    <div className="w-1/5 flex flex-col border border-dashed rounded-2xl border-stone-400 bg-white pt-10 pb-6 ">
      <div className="flex flex-col justify-center items-baseline">
        <div className="w-full flex flex-row justify-center ">
          <img src={image} alt={title} className="w-40 h-40" />
        </div>
        <h2 className="pt-8 pb-4 pl-4 text-xl font-bold text-red-500">
          {shortenText(title)}
        </h2>
        <p className="pl-4 font-bold ">{price} $</p>
      </div>
      <div className="w-full flex flex-row justify-start items-center pt-8 pl-4">
        <Link to={`/products/${id}`} className="text-red-500 text-3xl">
          {" "}
          <TbListDetails />{" "}
        </Link>
        <div className="w-full flex flex-row justify-end pr-4">
        {quantity === 1 && (
            <button
              className="bg-red-500 w-8 h-8 rounded-md text-white text-3xl "
              onClick={() => {
                clickHandler("REMOVE_ITEM");
              }}
            >
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button
              className="bg-red-500 w-8 h-8 rounded-md text-white text-3xl relative"
              onClick={() => {
                clickHandler("DECREASE");
              }}
            >
              <span className="absolute top-[-4px] right-[10px]"> - </span>
            </button>
          )}
          {!!quantity && <span className="mx-2">{quantity}</span>}
          {quantity === 0 ? (
            <button
              className="bg-red-500 w-8 h-8 rounded-md text-white text-3xl "
              onClick={() => {
                clickHandler("ADD_ITEM");
              }}
            >
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button
              className="bg-red-500 w-8 h-8 rounded-md text-white text-3xl relative"
              onClick={() => {
                clickHandler("INCREASE");
              }}
            >
              <span className="absolute top-[-5px] right-[6px]"> + </span>
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
};
