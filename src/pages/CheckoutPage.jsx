/* eslint-disable no-unused-vars */
import { BasketCard } from "../components/BasketCard";
import { BasketSidebar } from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

export const CheckoutPage = () => {
  const { state, dispatch } = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if(!state.itemsCounter){
    return(
      <div className="bg-stone-100 flex justify-center">
        <p className="w-4/5 "> Empty </p>
      </div>
    )
  }

  return (
    <div className="bg-stone-100 w-full flex justify-center h-[100vh] ">
      <div className="w-4/5 flex flex-row-reverse ">
        <div className="w-4/5 flex flex-col gap-y-5">
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
        <div className="w-1/4 mr-20">
          <BasketSidebar state={state} clickHandler={clickHandler}/>
        </div>
      </div>
    </div>
  );
};
