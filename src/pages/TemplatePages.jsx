import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import img_1 from "../assets/image1.jpg";
import img_2 from "../assets/image2.jpg";
import img_3 from "../assets/image3.jpg";
import img_4 from "../assets/image4.jpg";
import img_5 from "../assets/image5.jpg";
import img_6 from "../assets/image6.jpg";

const TemplatePage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: "Professional Template", route: "/template1", image: img_1 },
    { id: 2, name: "Modern Template", route: "/template2", image: img_2 },
    { id: 3, name: "Creative Template", route: "/template3", image: img_3 },
    { id: 4, name: "Minimal Template", route: "/template4", image: img_4 },
    { id: 5, name: "Sleek Template", route: "/template5", image: img_5 },
    { id: 6, name: "Elegant Template", route: "/template6", image: img_6 },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  const handleCloseModal = () => {
    setSelectedTemplate(null);
  };

  const handleUseTemplate = (template) => {
    if (isLoggedIn) {
      toast.success(`Navigating to ${template.name}!`);
      setTimeout(() => {
        navigate(template.route);
      }, 1500);
    } else {
      toast.error("Please log in to use this template.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Templates Section */}
      <section id="templates" className="py-16 bg-[#ffffff]">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-[#f59f7a]">
            Choose Your Template
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onTemplateClick={handleTemplateClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden overflow-y-scroll">
          <div className="bg-white rounded-lg shadow-lg p-3 relative w-[90%] max-w-2xl mt-96">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <div className="">
              <img
                src={selectedTemplate.image}
                alt={selectedTemplate.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedTemplate.name}
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => handleUseTemplate(selectedTemplate)}
                  className="px-6 py-3 bg-[#5dc8cf] text-white rounded-xl hover:bg-blue-600 transition-all"
                >
                  Use This Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#5dc8cf] text-black py-10 mt-8 border-t border-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium text-white">
            &copy; 2025 TemplateGen | Designed with ❤️ by Praveen Kumar
          </p>
        </div>
      </footer>
    </div>
  );
};

const TemplateCard = ({ template, onTemplateClick }) => {
  return (
    <div
      className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={() => onTemplateClick(template)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={template.image}
          alt={`${template.name} Preview`}
          className="w-full h-full object-top object-cover group-hover:scale-110 transition-transform"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {template.name}
        </h2>
        <p className="text-sm text-gray-600">
          Click to view full image and select
        </p>
      </div>
    </div>
  );
};

export default TemplatePage;
