import React from "react";
import { useParams } from "react-router-dom";
import Wrapper from "./Wrapper";
import useProductStore from "../components/store/useProductStore";

function Productdetail() {
  const { id } = useParams();
  const { products,addToCart } = useProductStore();

  // Find the product in Zustand store by ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center w-full h-screen text-4xl font-semibold text-red-700">
        Error loading product details
      </div>
    );
  }

  const { title, description, price, category, image, rating } = product;

  return (
    <Wrapper style={{ padding: 0 }} className="">
      <div className="flex flex-col lg:flex-row justify-center items-start p-6 py-3 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-6 max-w-md pt-10">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-2 capitalize">{category}</p>
          <p className="text-base text-gray-800 mb-4">{description}</p>
          <p className="text-xl font-semibold text-green-600 mb-4">
            ${price.toFixed(2)}
          </p>
          <div className="text-base text-gray-700">
            <span>Rating: {rating.rate} / 5</span>
            <span className="ml-2">({rating.count} reviews)</span>
          </div>

          <button onClick={()=>{   console.log(product); addToCart(product)}} className="bg-green-500 text-white py-3 px-5 rounded-lg mt-10">
            ADD TO CART
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Productdetail;
