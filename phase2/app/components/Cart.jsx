"use client";

import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Failed to load cart", err));
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="text-right pt-4 border-t mt-6">
            <p className="text-xl font-bold text-[#2F3E46]">
              Total: ${total.toFixed(2)}
            </p>
            <button className="mt-4 ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              Debit/Credit
            </button>
            <button className="mt-4 ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              Paypal
            </button>
            <button className="mt-4 ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              Apple Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
