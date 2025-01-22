import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import img_1 from "../assets/image1.jpg";
import img_2 from "../assets/image2.jpg";
import img_3 from "../assets/image3.jpg";
import img_4 from "../assets/image4.jpg";
import img_5 from "../assets/image5.jpg";
import img_6 from "../assets/image6.jpg";

const Home = () => {
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: "Professional Template", route: "/template1", image: img_1 },
    { id: 2, name: "Modern Template", route: "/template2", image: img_2 },
    { id: 3, name: "Creative Template", route: "/template3", image: img_3 },
    { id: 4, name: "Minimal Template", route: "/template4", image: img_4 },
    { id: 5, name: "Sleek Template", route: "/template5", image: img_5 },
    { id: 6, name: "Elegant Template", route: "/template6", image: img_6 },
  ];

  return (
    <div>
      {/* Navbar Section */}
      

      {/* Main Content */}
      <div
        className="p-8 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
      >
        {/* Heading Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 mb-12">
          Choose Your <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 text-black">Resume Template</span>
        </h1>

        {/* Templates Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              navigate={navigate}
            />
          ))}
        </div>

        {/* Footer Section */}
        <footer className="mt-12 text-center font-medium text-white/80">
          <p className="text-lg">
            <span className="bg-gradient-to-r from-blue-500 to-purple-700 px-3 py-1 rounded-full">&copy; 2025</span> Praveen's Resume Builder | Designed with ❤️
          </p>
        </footer>
      </div>
    </div>
  );
};

// Template Card Component
const TemplateCard = ({ template, navigate }) => {
  return (
    <div
      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      style={{
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
      }}
    >
      {/* Image Section */}
      <div className="h-48 relative overflow-hidden border-b border-white/10">
        <img
          src={template.image}
          alt={`${template.name} Preview`}
          className="w-full h-full object-cover object-center transform transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-white/90 group-hover:text-white tracking-wide mb-3">
          {template.name}
        </h2>
        <button
          onClick={() => navigate(template.route)}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-sm border-2 border-transparent hover:shadow-[0_0_15px_5px_rgba(91,134,229,0.8)] transition-all"
        >
          Select Template
        </button>
      </div>
    </div>
  );
};

export default Home;
