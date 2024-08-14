import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Layout = ({ children }) => {
  const { state } = useCart();

  return (
    <>
      <header className="w-full h-auto flex flex-row justify-center bg-stone-100">
        <div className="w-4/5 h-14 rounded-lg bg-red-500 flex flex-col items-center mt-4 mb-20">
          <div className="w-full h-full flex items-center">
            <div className="w-1/2 h-auto flex flex-row justify-start ">
              <Link
                to="/products"
                className="text-white font-bold text-xl pl-4"
              >
                {" "}
                Emad Shop
              </Link>
            </div>
            <div className="w-1/2 h-auto flex flex-row justify-end pr-4 ">
              <Link
                to="/checkout"
                className="w-10 h-10 rounded-lg bg-white flex justify-center items-center"
              >
                <PiShoppingCartSimpleBold className="text-red-500 text-2xl relative" />
                {!!state.itemsCounter && <span className="w-5 h-5 bg-black text-white rounded-full pl-[6px]  absolute top-4 right-[160px] ">{state.itemsCounter}</span>}
              </Link>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="w-full h-auto flex flex-row justify-center bg-stone-100 pt-20 pb-20">
        <div className="w-4/5 h-14 rounded-lg bg-red-500 flex items-center justify-center ">
          <p className="text-white font-bold text-2xl"> developed by Emad </p>
        </div>
      </footer>
    </>
  );
};
