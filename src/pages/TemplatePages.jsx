import React from "react";
import { useNavigate } from "react-router-dom";
import img_1 from "../assets/image1.jpg"
import img_2 from "../assets/image2.jpg"
import img_3 from "../assets/image3.jpg"
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
    { id: 5, name: "Minimal Template", route: "/template5", image: img_5 },
    { id: 6, name: "Minimal Template", route: "/template6", image: img_6 }
  ];

  return (
    <div className="p-8 bg-yellow-200 border-4 border-black min-h-screen flex flex-col justify-center">
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold text-center text-black mb-12 underline-offset-4 underline decoration-black">
        Choose Your <span className="bg-pink-400 px-2 py-1 rounded-lg">Resume Template</span>
      </h1>

      {/* Templates Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white text-gray-800 rounded-lg border-4 border-black transform hover:rotate-2 hover:scale-105 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="h-40 rounded-t-lg overflow-hidden border-b-4 border-black">
              <img
                src={template.image}
                alt={`${template.name} Preview`}
                className="object-cover object-top w-full h-full"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-center underline decoration-2 decoration-black">
                {template.name}
              </h2>
              <button
                onClick={() => navigate(template.route)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-full font-medium text-sm border-2 border-black hover:bg-blue-600 hover:shadow-[4px_4px_0px_black] transition-all duration-300"
              >
                Select Template
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-black font-medium">
        <p>
          <span className="bg-pink-300 px-2 py-1 rounded-lg">© 2025</span> Praveen's Resume Builder | Designed with ❤️
        </p>
      </footer>
    </div>
  );
};

export default Home;