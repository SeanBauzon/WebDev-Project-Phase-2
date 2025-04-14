/*
  Author: Ronray 
  Date: April 13
  Program: Profile Page

  This page displays the user's personal profile in a friendly and clean format. When the page first loads, it automatically sends a request to fetch the user’s info from the server.
  While the data is being loaded, a loading message appears. If there's an issue, the user sees an error message instead.
  Once the profile data is successfully retrieved, it shows the user's name, email, bio, and profile picture inside a styled card layout.
  The page also includes a top navigation bar and bottom footer to keep the layout consistent with the rest of the site.
*/

"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProfilePage() {
  // State variables for user data, loading, and error handling
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the user's profile data when the page loads
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to load profile");

        setUser(data); // Save user data
      } catch (err) {
        setError(err.message); // Show error if request fails
      } finally {
        setLoading(false); // Hide loading state
      }
    }

    fetchProfile();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Page navigation bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Show loading or error messages if necessary */}
        {loading && <p className="p-6 text-center">Loading profile...</p>}
        {error && (
          <p className="p-6 text-center text-red-500 font-semibold">{error}</p>
        )}

        {/* Display user profile info once loaded */}
        {!loading && !error && user && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-[#2F3E46] mb-4">My Profile</h2>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Profile picture */}
              <img
                src={user?.image || "/default-avatar.png"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />

              {/* User details */}
              <div>
                <p className="text-lg text-[#354F52] font-semibold">
                  Name: <span className="font-normal">{user.name}</span>
                </p>
                <p className="text-lg text-[#354F52] font-semibold mt-2">
                  Email: <span className="font-normal">{user.email}</span>
                </p>
                <p className="text-lg text-[#354F52] font-semibold mt-2">
                  Bio:{" "}
                  <span className="font-normal">
                    {user.bio || "No bio provided."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Page footer */}
      <Footer />
    </div>
  );
}
