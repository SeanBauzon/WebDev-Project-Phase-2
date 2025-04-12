"use client";
import React from "react";

const FilterPanel = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="p-4">
      <label className="block mb-2 font-medium">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
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

export default FilterPanel;
