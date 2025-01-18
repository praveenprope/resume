import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white border-b-4 border-teal-800">
      <h1 className="text-4xl font-extrabold">
        <span className="text-yellow-300">Template</span> Builder
      </h1>

      <nav className="space-x-6">
        <a
          href="#login"
          className="text-lg font-medium hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Login Page"
        >
          Login
        </a>
        <a
          href="#signup"
          className="text-lg font-medium hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Signup Page"
        >
          Signup
        </a>
        <a
          href="#about"
          className="text-lg font-medium hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="About Page"
        >
          About
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
