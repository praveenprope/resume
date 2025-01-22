import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Template5 = () => {
  const resumeRef = useRef(null);

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
            <FaEnvelope className="text-blue-600" /> your.email@example.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-blue-600" /> 123-456-7890
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600" /> linkedin.com/in/yourprofile
          </p>
          <p className="flex items-center gap-2">
            <FaGithub className="text-blue-600" /> github.com/yourusername
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
    </div>
  );
};

export default Template5;
