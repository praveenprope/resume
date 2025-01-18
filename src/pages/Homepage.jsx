import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-6xl font-bold mb-6 text-cyan-400 glow-text">
          Build Stunning Resumes Effortlessly
        </h2>
        <p className="text-2xl font-medium mb-10 max-w-3xl text-gray-300">
          Choose templates, customize them with futuristic flair, and download your high-tech resume in seconds.
        </p>
        <button
          className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl hover:from-pink-600 hover:to-yellow-500 hover:scale-105 transition-all"
          onClick={() => navigate("/home")} // Navigate to Home
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 border-t-4 border-cyan-400">
        <h3 className="text-4xl font-bold mb-8 text-center text-cyan-400 glow-text">
          Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900 border-4 border-cyan-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
              Easy to Use
            </h4>
            <p className="text-lg font-medium text-gray-300">
              Intuitive interface built for the future. No need for tech skills—just dive in!
            </p>
          </div>
          <div className="p-6 bg-gray-900 border-4 border-cyan-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
              Customizable Templates
            </h4>
            <p className="text-lg font-medium text-gray-300">
              Choose from cyberpunk-inspired templates and personalize with ease.
            </p>
          </div>
          <div className="p-6 bg-gray-900 border-4 border-cyan-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
              Download in PDF
            </h4>
            <p className="text-lg font-medium text-gray-300">
              Get your resume in a sleek, high-quality PDF format—instant and perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
