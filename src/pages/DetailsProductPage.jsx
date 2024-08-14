import { useParams, Link } from "react-router-dom";

import { useDetailProducts } from "../context/ProductContext";
import { Loader } from "../components/Loader";

export const DetailsProductPage = () => {
  const { id } = useParams();

  const product = useDetailProducts(+id);
  console.log(product);

  if (!product) return <Loader />;
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <div className="">
        <div className="">
          <h3 className="">{product.title}</h3>
          <div className="">
            <h3 className="">{product.rating.rate}</h3>
          </div>
        </div>
        <p className="">{product.description}</p>
        <h4 className="">{product.category}</h4>
        <div className="">
          <p className="">{product.price} $</p>
          <Link className="" to="/products">
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};
