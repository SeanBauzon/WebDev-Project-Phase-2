"use client";
/*
  Author: Ronray 
  Date: April 13
  Program: Main Page 
  Description:  
  This is the main layout for a simple online electronics store built using React and Next.js. It includes a navigation bar at the top, a search bar in the center, 
  and a category filter on the side. Users can interact by typing keywords into the search bar or selecting a category to narrow down what they're looking for. Behind the scenes, 
  these inputs are handled using state hooks, which filter and update the list of items shown on the page in real time. The result is a clean, responsive layout that shows only the 
  products that match what the user searched or filtered for. It wraps everything in a consistent design with a footer at the bottom.
*/
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
