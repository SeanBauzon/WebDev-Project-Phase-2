"use client";

import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Gaming Monitor",
      price: 249.99,
      quantity: 1,
    },
    {
      id: "2",
      name: "Wireless Mouse",
      price: 49.99,
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#2F3E46]">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg"
            >
              <div>
                <h3 className="font-semibold text-[#354F52]">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-3 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right pt-4 border-t mt-6">
            <p className="text-xl font-bold text-[#2F3E46]">
              Total: ${total.toFixed(2)}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
