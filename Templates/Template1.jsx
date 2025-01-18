import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Template1 = () => {
  const resumeRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = resumeRef.current;
    const options = {
      margin: [0.5, 0.5], // 0.5-inch margins
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }, // A4 paper size
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Download Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleDownloadPdf}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      {/* Resume Preview */}
      <div
        ref={resumeRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="bg-white shadow-lg rounded-lg border border-gray-300 p-8 mx-auto"
        style={{
          width: "8.27in", // A4 paper width
          minHeight: "11.69in", // A4 paper height
          overflow: "hidden", // Prevent overflow in the PDF
          fontSize: "14px", // Ensure text fits properly
        }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div>
            <h1 className="text-4xl font-bold text-blue-600">
              Your Name
            </h1>
            <h2 className="text-xl text-gray-600">
              Software Engineer | Full-Stack Developer
            </h2>
          </div>
          <div className="text-right">
            <p>Email: <span className="text-blue-600">your.email@example.com</span></p>
            <p>Phone: <span className="text-blue-600">123-456-7890</span></p>
            <p>LinkedIn: <span className="text-blue-600">linkedin.com/in/yourprofile</span></p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-blue-600">Google</h4>
            <p className="italic text-gray-600">Software Engineer (2020 - Present)</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Designed and implemented scalable microservices, resulting in a 30% performance improvement.</li>
              <li>Collaborated with cross-functional teams to deliver key features for Google Drive.</li>
              <li>Reduced API response time by optimizing backend queries, leading to a 20% faster user experience.</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-blue-600">Stanford University</h4>
            <p className="italic text-gray-600">Bachelor's in Computer Science (2016 - 2020)</p>
            <p className="mt-2 text-gray-700">
              Graduated with a 4.0 GPA. Specialized in Artificial Intelligence and Machine Learning.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-md">React</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-md">Node.js</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-md">TypeScript</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-md">Tailwind CSS</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-md">Python</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-md">AWS</span>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Projects</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-blue-600">Resume Builder App</h4>
            <p className="mt-2 text-gray-700">
              Built an interactive resume builder with React and Tailwind CSS, enabling users to create, edit, and export resumes as PDFs.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-blue-600">E-commerce Platform</h4>
            <p className="mt-2 text-gray-700">
              Developed a scalable e-commerce platform using MERN stack, handling over 1,000 concurrent users.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          * Double-click any field to edit the content. Changes will reflect in the PDF download.
        </div>
      </div>
    </div>
  );
};

export default Template1;
