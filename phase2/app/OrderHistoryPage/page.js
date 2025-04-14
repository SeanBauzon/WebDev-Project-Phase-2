"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderHistory from "../components/OrderHistory";

export default function OrderHistoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <OrderHistory />
      </main>
      <Footer />
    </div>
  );
}