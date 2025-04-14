"use client";
/*
  Author: Ronray 
  Date: April 13
  Program: ProductDetails 

  This component displays the details of a product, including its image, name, description, and price. It allows users to add the product to their cart or wishlist and submit reviews. 
  The component receives a `product` object as a prop, which contains the product's details (id, name, description, price, image). It processes adding the product to the cart or wishlist, 
  submitting reviews, and rendering the reviews. The product details are displayed, and users can interact with the cart/wishlist functionality or submit their reviews.
*/
import React, { useState } from "react";

const ProductDetails = ({ product }) => {
    // State for status message and form data
  const [status, setStatus] = useState("");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      rating: 5,
      comment: "Absolutely love it! Great quality and fast shipping.",
    },
    {
      id: 2,
      name: "Mark R.",
      rating: 4,
      comment: "Solid product for the price. Would buy again.",
    },
  ]);
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  // Add product to cart
  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(`${product.name} added to cart!`);
      } else {
        setStatus(data.error || "Could not add to cart.");
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      setStatus("Something went wrong.");
    }

    setTimeout(() => setStatus(""), 2000);
  };
  // Add product to wishlist
  const handleAddToWishlist = async () => {
    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          description: product.description,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(`${product.name} added to wishlist!`);
      } else {
        setStatus(data.error || "Could not add to wishlist.");
      }
    } catch (err) {
      console.error("Add to wishlist error:", err);
      setStatus("Something went wrong.");
    }

    setTimeout(() => setStatus(""), 2000);
  };
  // Submit a review for the product
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          productId: product.id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setReviews((prev) => [data, ...prev]);
        setForm({ name: "", rating: 5, comment: "" });
        setStatus("Review submitted!");
      } else {
        setStatus(data.error || "Failed to submit review");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("Something went wrong.");
    }

    setTimeout(() => setStatus(""), 2000);
  };
  // Render star rating based on review rating
  const renderStars = (count) =>
    "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {status && (
        <div className="mb-4 text-green-600 font-medium">{status}</div>
      )}

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-contain rounded mb-4"
      />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 my-4">{product.description}</p>
      <p className="text-xl text-blue-600 font-semibold">
        ${product.price.toFixed(2)}
      </p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToWishlist}
          className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
        >
          Add to Wishlist
        </button>
      </div>

      {/* Reviews Section */}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-semibold text-[#2F3E46] mb-4">
          Customer Reviews
        </h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border p-4 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[#354F52]">{review.name}</h4>
                  <p className="text-yellow-500 text-sm">
                    {renderStars(review.rating)}
                  </p>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        )}

        {/* Review Form */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#2F3E46] mb-2">Write a Review</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded px-4 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <select
              className="w-full border rounded px-4 py-2"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} Star{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Your review..."
              className="w-full border rounded px-4 py-2"
              rows={4}
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
