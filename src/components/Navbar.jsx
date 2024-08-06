import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useSidebarContext } from "./context/sidebarContext";
import useProductStore from "../components/store/useProductStore";

const Navbar = memo(() => {
  const { handleSidebar } = useSidebarContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { products } = useProductStore();

  // Function to get unique categories and encode them
  const getUniqueCategories = (products) => {
    const categories = products.map((product) => product.category);
    return [...new Set(categories)]; // Remove duplicates
  };

  const categories = getUniqueCategories(products);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full py-2  z-10 flex lg:justify-between items-center px-5 lg:px-10 bg-gradient-to-r from-green-800 to-lime-700 shadow-lg">
      <div className="text-white text-[1.75em] lg:text-[2.5em] font-bold tracking-wide drop-shadow-lg">
        Eco<span className="text-yellow-400">Store</span>
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex gap-8 text-white text-lg font-medium">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            <li>Home</li>
          </Link>
          <li
            className="relative cursor-pointer group"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className="flex items-center">
              <span className="hover:text-yellow-400 transition duration-300">Categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 8.586l2.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full z-10 left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48">
                {categories.map((category) => (
                  <Link
                  to={`/category/${encodeURIComponent(category)}`}// Encode category
                    key={category}
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h18M3 6h18M3 14h18m-9 8V6"
                        />
                      </svg>
                      {category}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            <li>About Us</li>
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
            <li>Contact</li>
          </Link>
        </ul>
        <div className="md:hidden ml-[17rem] cursor-pointer" onClick={handleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            fill="#FFFFFF"
            viewBox="0 0 30 30"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        </div>
      </div>
      <div className="flex items-center">
        <form className="hidden md:flex bg-white rounded-sm shadow-md">
          <input
            className="outline-none border-none pl-2 bg-transparent"
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className="px-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </span>
          </button>
        </form>
        <Link to="/cart">
          <svg
            className="w-7 h-7 ml-4 text-white hover:text-yellow-400 transition duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="cart"
          >
            <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
});

export default Navbar;
