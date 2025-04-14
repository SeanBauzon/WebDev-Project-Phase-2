"use client";

import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Cart />
      </main>
      <Footer />
    </div>
  );
}