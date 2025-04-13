"use client";

import React from "react";

const Orders = [
  {
    id: "ORD-1001",
    date: "2025-04-10",
    status: "Shipped",
    total: "$149.99",
    trackingLink: "#",
  },
  {
    id: "ORD-1000",
    date: "2025-03-27",
    status: "Delivered",
    total: "$89.50",
    trackingLink: "#",
  },
];

export default function OrderHistoryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Order History</h1>

      <div className="space-y-6">
        {Orders.map((order) => (
          <div key={order.id} className="border rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">{order.id}</h2>
              <p className="text-gray-500">Placed on: {order.date}</p>
              <p className="text-gray-500">Status: {order.status}</p>
              <p className="text-gray-500">Total: {order.total}</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Order</button>
              <a
                href={order.trackingLink}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Track Order
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
