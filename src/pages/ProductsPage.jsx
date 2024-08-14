/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Card } from "../components/Card";
import { Loader } from "../components/Loader";

import { useProducts } from "../context/ProductContext";

import { ImSearch } from "react-icons/im";
import {
  categoryProducts,
  createQueryObject,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";

import { FaListUl } from "react-icons/fa";

export const ProductsPage = () => {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = categoryProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { category }));


  };
  return (
    <>
      <div className="w-full h-full flex flex-row bg-stone-100 ">
        <div className="w-1/3 flex flex-row justify-end pr-18">
          <input
            type="text"
            className="w-3/5 h-10 pl-2 text-red-500 border-2 border-dashed border-red-500 rounded-xl focus:outline-none  placeholder:text-gray-700"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          />
          <button
            className="w-10 h-10 bg-red-500 rounded-xl flex justify-center items-center ml-3 mb-20"
            onClick={searchHandler}
          >
            <ImSearch className="text-white" />
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-row bg-stone-100">
        <div className=" w-11/12 h-full flex flex-row flex-wrap gap-y-5 gap-x-24 justify-center mt-5 ml-[-30px]">
          {!displayed.length ? (
            <Loader />
          ) : (
            displayed.map((product) => <Card key={product.id} data={product} />)
          )}
        </div>
        <div className=" w-1/10 h-auto flex items-start justify-start ml-[-140px] mt-5 ">
          <div className="w-full h-auto border border-stone-400 border-dashed rounded-lg bg-white">
            <ul className="m-5" onClick={categoryHandler}>
              <p className="flex flex-row items-center text-red-500 font-bold pb-3">
                <FaListUl /> <span className="pl-2">Categories</span>{" "}
              </p>
              <li className={`cursor-pointer font-semibold w-full h-7 ${query.category === " " ? "text-red-500 bg-red-200 rounded-lg pl-1" : "text-black"}`}>All</li>
              <li className={`cursor-pointer font-semibold w-full h-7 ${query.category === "electronics" ? "text-red-500 bg-red-200 rounded-lg pl-1" : "text-black"}`}>Electronics</li>
              <li className={`cursor-pointer font-semibold w-full h-7 ${query.category === "jewelry" ? "text-red-500 bg-red-200 rounded-lg pl-1" : "text-black"}`}>Jewelry</li>
              <li className={`cursor-pointer font-semibold w-full h-7 ${query.category === "men's clothing" ? "text-red-500 bg-red-200 rounded-lg pl-1" : "text-black"}`}>Men's Clothing</li>
              <li className={`cursor-pointer font-semibold w-full h-7 ${query.category === "women's clothing" ? "text-red-500 bg-red-200 rounded-lg pl-1" : "text-black"} `}> Women's Clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
