import React, { useState, useEffect } from "react";
import img1 from ".././assets/img16.jpg";
import img2 from ".././assets/img17.jpg";
import img3 from ".././assets/img18.webp";
const images = [
  img1,
  img2,
  img3, // Replace these URLs with your actual image URLs
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-16 px-8 bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen">
      <div className="w-full lg:w-1/2 text-center p-8">
        <div className="h-96 relative">
          <img
            src={images[currentImageIndex]}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-8 text-white text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Welcome to Our E-commerce Store
        </h1>
        <p className="text-lg md:text-xl font-light mb-4">
          Discover the best products at unbeatable prices. Shop now and enjoy
          exclusive deals and discounts!
        </p>
        <button className="mt-4 px-6 py-3 bg-yellow-500 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
