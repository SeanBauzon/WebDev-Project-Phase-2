/*
  Author: Ronray 
  Date: April 13, 2025
  Program: Product Filter Component

  Gives users the ability to filter products by category. When the user selects a category from the dropdown, it updates the displayed results accordingly. 
  The filter options include categories like Monitor, Keyboard, Mouse, Smartphone, and Speaker. The selected category is managed using the `selectedCategory` state, 
  and the setSelectedCategory function handles the change when a new option is picked. The goal is to help users quickly narrow down their product choices, making shopping easier.
*/
"use client";
import React from "react";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="p-4">
            {/* Label for the filter dropdown */}
      <label className="block mb-2 font-medium">Filter by Category:</label>


            {/* Dropdown to select the category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full sm:w-48 border bg-white text-black border-gray-300 rounded-md px-4 py-2"
      >
        <option value="">All</option>
        <option value="Monitor">Monitor</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Mouse">Mouse</option>
        <option value="Smartphone">Smartphone</option>
        <option value="Speaker">Speaker</option>
      </select>
    </div>
  );
};

export default Filter;
