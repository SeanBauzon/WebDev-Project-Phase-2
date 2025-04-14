"use client";

/*
  Author: Ronray 
  Date: April 13
  Program: SearchBar 

  This component provides a search bar where users can type in text to search for products. It listens for input changes and submits the search term when the form is submitted. 
  The search term is passed to the parent component through the `onSearch` function. The component takes care of managing the input state and handling form submission. It also styles 
  the input and button to give a clean user experience.
*/

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState(""); // Store the current search input

    // Handle form submission, prevent default behavior and pass the search term to parent
  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (trimmed.length > 0) {
      onSearch(trimmed);
    } else {
      onSearch(""); // Clear results if input is empty
    }
  };
// ui
  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <div className="relative w-full max-w-md mt-3">
        <input
          type="text"
          placeholder="Search products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full pl-5 pr-12 py-3 text-sm text-gray-800 border border-gray-300 rounded-full bg-amber-50"
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
