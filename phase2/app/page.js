"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ItemList from "./components/itemlist";
import SearchBar from "./components/searchbar";
import Filter from "./components/filter";

export default function Layout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col">
      <Navbar />
      <SearchBar />
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main className="flex-grow">
        <div>
          <ItemList selectedCategory={selectedCategory} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
