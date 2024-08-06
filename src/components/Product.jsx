import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import { useProducts } from "../services/queries";
import { Link } from "react-router-dom";
import useProductStore from "../components/store/useProductStore";
import Horizontalbar from "./Horizontalbar";
import Hero from "./Hero";

function Product() {
  const { data, error } = useProducts();
  const { products, setProducts } = useProductStore();

  // Update Zustand store with fetched data
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data,setProducts]);

  if (error)
    return (
      <div className="flex justify-center items-center w-full h-screen text-4xl font-semibold text-red-700">
        Something Went Wrong...!
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  const category =products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return ( 
    <div className="w-full relative">
      <Horizontalbar />
      <Hero/>
      
      <Wrapper>
        <div className="grid  max-w-sm md:max-w-none mx-auto md:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 py-8 justify-center">
          {category.map((product) => (
            <Link to={`/productdetail/${product.id}`} key={product.id}>
              <div className="card  h-[300px] rounded-md border items-center mb-4 border-black overflow-hidden group transition ">
                <div className=" justify-center items-center w-full h-full  flex ">
                  <div className="w-[200px] mx-auto justify-center  items-center ">
                    {" "}
                    <img
                      className=" max-h-[160px] mx-auto group-hover:scale-110 transition  duration-300 "
                      src={product.image}
                      alt="product"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center text-sm font-semibold group-hover:text-gray-800 transition duration-300">
                {product.title}
              </div>

              <div className="text-center text-sm font-semibold group-hover:text-gray-800 transition duration-300">
                ${product.price.toFixed(2)}
              </div>
            </Link>
          ))}
        </div>
      
      </Wrapper>
      
    </div>
    
  );
}

export default React.memo(Product);
