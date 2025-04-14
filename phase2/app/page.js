"use client";

import { useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ItemList from "./components/itemlist";
import SearchBar from "./components/searchbar";
import Filter from "./components/filter";

export default function Layout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    //nav
    <div className="bg-blue-400 min-h-screen flex flex-col">
      <Navbar />


    {/* filter/search */}
      <div className="flex justify-center items-center px-4 bg-blue-800 border-white border-1">

        <div className="w-1/4">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="w-2/4 flex justify-center">
          <SearchBar />
        </div>

        <div className="w-1/4" />
      </div>


    {/* items */}
      <main className="flex-grow bg-blue-300">
        <ItemList selectedCategory={selectedCategory} />
      </main>
    {/* footer */}
      <Footer />
    </div>
  );
}
