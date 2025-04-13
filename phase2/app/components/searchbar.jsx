"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-white px-3 py-2 border border-gray-300 rounded-md w-full text-black"
      />
    </form>
  );
}
