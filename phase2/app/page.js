"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Itemlist from "./components/Itemlist";
import Searchbar from "./components/Searchbar";
import Filter from "./components/Filter";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Filter and Search */}
      <div className="flex justify-center items-center px-4 bg-blue-800 border-white border-1 py-4">
        <div className="w-1/4">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="w-2/4 flex justify-center">
          <Searchbar onSearch={(term) => setSearchTerm(term)} />
        </div>

        <div className="w-1/4" />
      </div>

      {/* Product Items */}
      <main className="flex-grow bg-blue-300">
        <Itemlist selectedCategory={selectedCategory} searchTerm={searchTerm} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
