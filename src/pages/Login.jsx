import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiMail, CiLock, CiRead, CiUnread } from "react-icons/ci";
import signimg from "../assets/login.jpg";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      alert("Login successful!");
      setIsLoggedIn(true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/templates");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex shadow-lg rounded-lg bg-white">
        {/* Left Section */}
        <div
          className="w-96 bg-cover rounded-l-lg"
          style={{
            backgroundImage: `url(${signimg})`, // Update with the correct path
          }}
        ></div>

        {/* Right Section */}
        <form onSubmit={handleSubmit} className="flex flex-col p-10 space-y-6">
          <h4 className="text-3xl font-bold text-gray-800">Login</h4>
          <p className="text-base text-gray-600">
            Access your account and start creating templates!
          </p>

          {/* Email Input */}
          <div className="relative">
            <div className="flex items-center">
              <CiMail className="text-2xl text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="flex items-center">
              <CiLock className="text-2xl text-gray-500 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-2 focus:outline-none"
              >
                {showPassword ? (
                  <CiRead className="text-2xl text-gray-500" />
                ) : (
                  <CiUnread className="text-2xl text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 text-lg rounded focus:outline-none bg-[#5dc8cf] text-white border-2 border-transparent hover:border-black hover:text-[#5dc8cf] hover:bg-white transition-all duration-300"
          >
            Login
          </button>


          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-indigo-500 underline cursor-pointer"
              >
                Register here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
