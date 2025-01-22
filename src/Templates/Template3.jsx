import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const Template3 = () => {
  const resumeRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = resumeRef.current;

    const options = {
      margin: [0.5, 0.5],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },  // High-quality image (0.98-1)
      html2canvas: {
        scale: 3, // Higher scale for better resolution (2 or 3)
        logging: false,
        useCORS: true, // Ensure CORS compliance to capture external resources
        x: 0,
        y: 0,
        width: element.offsetWidth,
        height: element.offsetHeight,
        letterRendering: true, // Ensure font rendering is better
        backgroundColor: "#fff", // Background color for better output
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
        compress: true, // Compress the output for better file size
      },
    };

    // Generate PDF
    html2pdf()
      .set(options)
      .from(element)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const totalPages = pdf.internal.pages.length;

        // Ensure proper alignment and margins for each page
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFont("Helvetica", "normal");
        }

        // Save the high-quality PDF
        pdf.save("resume.pdf");
      });
  };

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      {/* Download Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleDownloadPdf}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>

      {/* Resume Preview */}
      <div
        ref={resumeRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="bg-white shadow-2xl rounded-lg border border-gray-400 p-8 mx-auto"
        style={{
          width: "8.27in",
          minHeight: "11.69in",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-6">
          <div>
            <h1 className="text-5xl font-bold text-teal-700">Your Name</h1>
            <h2 className="text-xl text-gray-600">Senior Software Engineer</h2>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex justify-between mt-6">
          <p>Email: <span className="text-teal-600">your.email@example.com</span></p>
          <p>Phone: <span className="text-teal-600">123-456-7890</span></p>
          <p>LinkedIn: <span className="text-teal-600">linkedin.com/in/yourprofile</span></p>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-teal-600">Apple Inc.</h4>
            <p className="italic text-gray-600">Lead Developer (2019 - Present)</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed cutting-edge iOS applications with Swift, maintaining a 4.9-star rating.</li>
              <li>Integrated Apple Pay API to enhance transaction experience.</li>
              <li>Optimized app performance to increase user retention by 30%.</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-teal-600">Harvard University</h4>
            <p className="italic text-gray-600">Master's in Computer Science (2015 - 2017)</p>
            <p className="mt-2 text-gray-700">
              Specialization in AI & ML. Graduated with distinction.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg shadow-md">JavaScript</span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg shadow-md">React</span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg shadow-md">Node.js</span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg shadow-md">Python</span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg shadow-md">Django</span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg shadow-md">AWS</span>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Projects</h3>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-teal-600">Project Management Tool</h4>
            <p className="mt-2 text-gray-700">
              Developed an intuitive project management app to streamline workflows and enhance team collaboration.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-teal-600">Real-Time Chat App</h4>
            <p className="mt-2 text-gray-700">
              Built a scalable real-time chat app with WebSockets, enabling users to communicate seamlessly.
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

export default Template3;
