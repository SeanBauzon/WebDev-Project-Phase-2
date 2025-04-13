"use client";

import { useEffect, useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('/api/wishlist')
      .then((res) => res.json())
      .then((data) => setWishlist(data))
      .catch((err) => console.error("Failed to fetch wishlist", err));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-[#CAD2C5] rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-[#2F3E46] mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.productId}
              className="bg-white border border-[#52796F] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#2F3E46]">{item.name}</h3>
              <p className="text-sm text-[#354F52] mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
