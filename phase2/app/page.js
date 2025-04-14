"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ItemList from "./components/Itemlist";
import SearchBar from "./components/Searchbar";
import Filter from "./components/Filter";

export default function Layout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Filter + Search */}
      <div className="flex justify-center items-center px-4 bg-blue-800 border-white border-1 py-4">
        {/* Category Filter */}
        <div className="w-1/4">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* SearchBar */}
        <div className="w-2/4 flex justify-center">
          <SearchBar onSearch={(term) => setSearchTerm(term)} />
        </div>

        <div className="w-1/4" />
      </div>

      {/* Item List */}
      <main className="flex-grow bg-blue-300">
        <ItemList selectedCategory={selectedCategory} searchTerm={searchTerm} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
