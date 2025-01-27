import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Template5 = () => {
  const resumeRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [iconColor, setIconColor] = useState("#000000"); // State for icon color

  const handleDownloadPdf = () => {
    const element = resumeRef.current;

    const options = {
      margin: [0.5, 0.5],
      filename: "modern_resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3,
        logging: false,
        useCORS: true,
        backgroundColor: "#fff",
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  const handleTextSelection = () => {
    const selection = window.getSelection().toString();
    if (selection) {
      setSelectedText(selection);
      setShowPopup(true);
    }
  };

  const applyStyleToSelectedText = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.color = textColor;
    span.style.fontFamily = fontFamily;
    range.surroundContents(span);

    // Close popup after applying changes
    setShowPopup(false);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
      {/* Download Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleDownloadPdf}
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-blue-700"
        >
          Download PDF
        </button>
      </div>

      {/* Resume Preview */}
      <div
        ref={resumeRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="bg-white shadow-2xl rounded-xl border border-gray-300 p-8 mx-auto"
        style={{
          width: "8.27in",
          minHeight: "11.69in",
          overflow: "hidden",
          fontSize: "14px",
        }}
        onMouseUp={handleTextSelection} // Detect text selection
      >
        {/* Header Section */}
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg px-8 py-6">
          <div>
            <h1 className="text-4xl font-bold">Your Name</h1>
            <h2 className="text-lg font-medium">Full-Stack Developer</h2>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex justify-around mt-6 text-gray-700">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" style={{ color: iconColor }} /> your.email@example.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-blue-600" style={{ color: iconColor }} /> 123-456-7890
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600" style={{ color: iconColor }} /> linkedin.com/in/yourprofile
          </p>
          <p className="flex items-center gap-2">
            <FaGithub className="text-blue-600" style={{ color: iconColor }} /> github.com/yourusername
          </p>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-1">Experience</h3>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">Google LLC</h4>
            <p className="italic text-gray-500">Software Engineer (2020 - Present)</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Designed scalable microservices for Google Cloud Platform.</li>
              <li>Optimized search algorithms, improving performance by 40%.</li>
              <li>Mentored junior developers and conducted code reviews.</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-1">Education</h3>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">Stanford University</h4>
            <p className="italic text-gray-500">BSc in Computer Science (2016 - 2020)</p>
            <p className="mt-2 text-gray-600">Specialized in Software Engineering and AI.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-1">Skills</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">React</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">Next.js</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">TypeScript</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">GraphQL</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">Python</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">Machine Learning</span>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-1">Projects</h3>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">E-Commerce Platform</h4>
            <p className="mt-2 text-gray-600">
              Built a robust e-commerce platform with advanced search and real-time analytics.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">AI-Powered Chatbot</h4>
            <p className="mt-2 text-gray-600">
              Developed an intelligent chatbot using NLP to improve customer support.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          * Click any section to edit content. All changes are reflected in the PDF download.
        </div>
      </div>

      {/* Popup for Text Customization */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Customize Text</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Text Color</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-16 h-10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Font Family</label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Icon Color</label>
              <input
                type="color"
                value={iconColor}
                onChange={(e) => setIconColor(e.target.value)}
                className="w-16 h-10"
              />
            </div>
            <button
              onClick={applyStyleToSelectedText}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Apply
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-4 px-6 py-2 bg-red-600 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Template5;
