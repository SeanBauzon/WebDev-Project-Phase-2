"use client";

import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to load profile");

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500 font-medium">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500 font-medium">
        {error}
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-[#2F3E46] mb-4">My Profile</h2>

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <img
          src={user.image || "/images/default-profile.png"}
          alt="Profile"
          className="w-28 h-28 object-cover rounded-full border-2 border-[#52796F]"
        />
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
  );
};

export default Profile;
