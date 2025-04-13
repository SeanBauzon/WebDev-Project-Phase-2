"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold hover:opacity-90 transition">
          Better Buy
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/OrderHistoryPage" className="hover:text-gray-200 transition">Order History</Link>
          <Link href="/" className="hover:text-gray-200 transition">Products</Link>
          <Link href="/WishlistPage" className="hover:text-gray-200 transition">Wishlist</Link>
          <Link href="/CartPage" className="hover:text-gray-200 transition">Cart</Link>
          <Link href="/ProfilePage" className="hover:text-gray-200 transition">Profile</Link>
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-white rounded"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pb-4 pt-2 space-y-3">
          <Link href="/products" className="hover:text-gray-200 transition">Products</Link>
          <Link href="/wishlist" className="hover:text-gray-200 transition">Wishlist</Link>
          <Link href="/cart" className="hover:text-gray-200 transition">Cart</Link>
          <Link href="/login" className="hover:text-gray-200 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
}
