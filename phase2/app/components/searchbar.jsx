"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <div className="relative w-full max-w-md mt-3">
        <input
          type="text"
          placeholder="Search products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-100 pl-5 pr-12 py-3 text-sm text-gray-800 border border-gray-300 rounded-full bg-amber-50"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        >
          🔍
        </button>
      </div>
    </form>
  );
}
