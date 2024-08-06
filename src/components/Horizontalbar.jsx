import React from 'react';
import { useSidebarContext } from './context/sidebarContext';
import useProductStore from './store/useProductStore';

export default function Horizontalbar() {
  const { isOpen, closeSidebar } = useSidebarContext(); // Add closeSidebar to context
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useProductStore();

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div 
      className={`w-full h-[89vh] absolute  top-o right-0 bg-white md:max-w-[340px] xl:max-w-[385px] shadow-xl z-20 transition-transform duration-300 ${
        isOpen? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Close Button */}
        <button
          onClick={closeSidebar}
          className="self-end text-gray-600 hover:text-gray-800 mb-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-3" />
                  <div className="text-sm">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2"
                      >
                        -
                      </button>
                      <span className="text-gray-600">{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="bg-yellow-500 text-white py-1 px-2 rounded-lg ml-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white py-1 px-2 rounded-lg ml-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="mt-auto flex flex-col border-t pt-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
