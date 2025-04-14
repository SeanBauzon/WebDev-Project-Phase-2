"use client";

import { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/wishlist")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch wishlist");
        return res.json();
      })
      .then((data) => setWishlist(data))
      .catch((err) => console.error("Fetch wishlist error:", err));
  }, []);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      const res = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        setWishlist((prev) => prev.filter((item) => item.productId !== productId));
      } else {
        console.warn("Failed to remove item");
      }
    } catch (err) {
      console.error("Error removing wishlist item:", err);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-[#CAD2C5] rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-[#2F3E46] mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.productId} className="bg-white border p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2F3E46]">{item.name}</h3>
              <p className="text-sm text-[#354F52] mt-2">{item.description}</p>
              <button
                onClick={() => handleRemoveFromWishlist(item.productId)}
                className="mt-3 text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
