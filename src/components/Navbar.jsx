import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Clear logged-in user data
    setIsLoggedIn(false); // Update state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-white text-orange-500 py-4 px-6 flex justify-between items-center shadow-lg">
      <Link
        to="/"
        className="text-2xl font-bold text-orange-500 hover:text-blue-500 transition-all duration-300"
      >
        TemplateGen
      </Link>
      <div className="flex items-center space-x-6">
        <Link
          to="/templates"
          className="text-orange-500 text-lg hover:text-blue-500 transition-all duration-300"
        >
          Templates
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="text-orange-500 text-lg hover:text-blue-500 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#5dc8cf] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
  