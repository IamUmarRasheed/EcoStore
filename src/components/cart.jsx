import React from "react";
import Wrapper from "./Wrapper";
import useProductStore from "./store/useProductStore";

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useProductStore();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Wrapper className="max-w-6xl mx-auto p-6 p">
      <h2 className="text-3xl font-bold mb-6 mt-10">Shopping Cart</h2>
      <div className="flex flex-col">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border-b border-gray-300 py-4"
          >
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-auto rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-lg mr-2"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{product.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-lg ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          Total: ${calculateTotal().toFixed(2)}
        </h3>
        <button className="bg-blue-500 text-white py-3 px-5 rounded-lg">
          Proceed to Checkout
        </button>
      </div>
      <button
        onClick={() => window.history.back()} // Go back to previous page
        className="bg-gray-500 text-white py-3 px-5 rounded-lg mt-10"
      >
        Continue Shopping
      </button>
    </Wrapper>
  );
}

export default Cart;
