import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the user data to localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === formData.email);

    if (userExists) {
      alert("User with this email already exists. Please log in.");
    } else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");

      // Automatically log the user in
      setIsLoggedIn(true);
      localStorage.setItem("currentUser", JSON.stringify(formData));
      navigate("/templates"); // Navigate to templates or any other page
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-yellow-300">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-green-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2 text-green-400"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your Password"
              className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-lg transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
