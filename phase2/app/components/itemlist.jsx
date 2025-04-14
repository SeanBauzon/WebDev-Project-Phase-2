"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ItemList = ({ selectedCategory }) => {
  const mockProducts = [
    {
      _id: "1",
      name: "Gaming Monitor",
      description: "144Hz, 27-inch display",
      price: "$249.99",
      image: "/images/GamingMonitor1.png",
      category: "Monitor",
    },
    {
      _id: "2",
      name: "Flexy Keyboard",
      description: "Normal Keyboard",
      price: "$89.99",
      image: "/images/Keyboard1.png",
      category: "Keyboard",
    },
    {
      _id: "3",
      name: "Wireless Mouse",
      description: "Ergonomic and wireless",
      price: "$49.99",
      image: "/images/Mouse1.png",
      category: "Mouse",
    },
    {
      _id: "4",
      name: "Smartphone",
      description: "Latest model",
      price: "$799.99",
      image: "/images/SmartPhone1.png",
      category: "Smartphone",
    },
    {
      _id: "5",
      name: "Bluetooth Speaker",
      description: "Portable and waterproof",
      price: "$99.99",
      image: "/images/Speaker1.png",
      category: "Speaker",
    },
  ];

  const filteredProducts = selectedCategory
    ? mockProducts.filter((p) => p.category === selectedCategory)
    : mockProducts;

  const [wishlist, setWishlist] = useState([]);
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleAddToWishlist = async (product) => {
    if (wishlist.includes(product._id)) return;
  
    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          description: product.description,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setWishlist((prev) => [...prev, product._id]);
        setStatus(`${product.name} added to wishlist!`);
      } else {
        setStatus(data.error || "Could not add to wishlist.");
      }
  
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      console.error("Frontend error:", error);
      setStatus("Failed to add to wishlist.");
      setTimeout(() => setStatus(""), 2000);
    }
  };
  

  const handleAddToCart = async (product) => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          price: product.price.replace("$", ""),
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setStatus(`${product.name} added to cart!`);
      } else {
        setStatus(data.error || "Could not add to cart.");
      }
  
      setTimeout(() => setStatus(""), 1500);
    } catch (err) {
      console.error("Add to cart error:", err);
      setStatus("Something went wrong.");
      setTimeout(() => setStatus(""), 1500);
    }
  };
  

  return (
    <div className="px-4 py-6">
      {status && <p className="text-green-600 font-medium mb-4">{status}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
          >
            <Link href={`/ProductPage/${product._id}`} passHref>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-contain mb-3 rounded"
              />
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="mt-2 font-bold text-gray-800">{product.price}</p>
            </Link>

            <div className="flex flex-col gap-2 mt-3">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white py-1 px-4 hover:bg-blue-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                disabled={wishlist.includes(product._id)}
                className={`py-1 px-4 text-white transition ${
                  wishlist.includes(product._id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-pink-500 hover:bg-pink-600"
                }`}
              >
                {wishlist.includes(product._id) ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
