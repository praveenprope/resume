import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const Template6 = () => {
  const resumeRef = useRef(null);
  const [fontColor, setFontColor] = useState("black");
  const [fontFamily, setFontFamily] = useState("Arial");

  const handleDownloadPdf = () => {
    const element = resumeRef.current;

    const options = {
      margin: [0.5, 0.5],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, logging: false, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
    applySelectionStyles(color, fontFamily);
  };

  const handleFontFamilyChange = (family) => {
    setFontFamily(family);
    applySelectionStyles(fontColor, family);
  };

  const applySelectionStyles = (color, family) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = range.cloneContents();
      const span = document.createElement("span");
      span.style.color = color;
      span.style.fontFamily = family;
      span.appendChild(selectedText);

      range.deleteContents();
      range.insertNode(span);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Font Control Section */}
      <div className="flex justify-end mb-6 gap-4">
        <button
          onClick={() => handleFontColorChange("red")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
        >
          Red Color
        </button>
        <button
          onClick={() => handleFontColorChange("blue")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Blue Color
        </button>
        <button
          onClick={() => handleFontColorChange("green")}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          Green Color
        </button>
        <button
          onClick={() => handleFontColorChange("purple")}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700"
        >
          Purple Color
        </button>
        <button
          onClick={() => handleFontColorChange("orange")}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700"
        >
          Orange Color
        </button>

        <button
          onClick={() => handleFontFamilyChange("Courier New")}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700"
        >
          Courier Font
        </button>
        <button
          onClick={() => handleFontFamilyChange("Times New Roman")}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700"
        >
          Times Font
        </button>
        <button
          onClick={() => handleFontFamilyChange("Georgia")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Georgia Font
        </button>
        <button
          onClick={() => handleFontFamilyChange("Verdana")}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          Verdana Font
        </button>
        <button
          onClick={() => handleFontFamilyChange("Tahoma")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
        >
          Tahoma Font
        </button>

        <button
          onClick={handleDownloadPdf}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>

      {/* Resume Template */}
      <div
        ref={resumeRef}
        className="bg-white shadow-lg rounded-lg border border-gray-300 p-8 mx-auto"
        style={{
          width: "8.27in",
          minHeight: "11.69in",
          fontSize: "14px",
          color: fontColor,
        }}
      >
        {/* Header Section */}
        <div className="text-center border-b pb-6">
          <h1
            className="text-5xl font-bold text-gray-800"
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            John Doe
          </h1>
          <p
            className="text-lg text-gray-600"
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-4 mt-4 text-gray-600">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-500" />
              <span contentEditable="true" suppressContentEditableWarning={true}>
                john.doe@example.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <span contentEditable="true" suppressContentEditableWarning={true}>
                +1 234 567 890
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-green-500" />
              <span contentEditable="true" suppressContentEditableWarning={true}>
                /in/johndoe
              </span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h3>
          <p
            className="text-gray-700"
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            A passionate Full Stack Developer with 5+ years of experience
            building scalable web applications and interactive user interfaces.
            Skilled in React, Node.js, and cloud deployment.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaBriefcase className="inline-block text-green-500 mr-2" />
            Experience
          </h3>
          <div className="mt-4">
            <h4
              className="text-xl font-semibold text-gray-800"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Software Engineer - Google
            </h4>
            <p className="italic text-gray-600">Jan 2020 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li contentEditable="true" suppressContentEditableWarning={true}>
                Developed and optimized scalable web apps using React and Node.js.
              </li>
              <li contentEditable="true" suppressContentEditableWarning={true}>
                Improved app performance, reducing load time by 35%.
              </li>
              <li contentEditable="true" suppressContentEditableWarning={true}>
                Collaborated with cross-functional teams to deliver key features.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h4
              className="text-xl font-semibold text-gray-800"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Front-End Developer - Facebook
            </h4>
            <p className="italic text-gray-600">May 2017 - Dec 2019</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li contentEditable="true" suppressContentEditableWarning={true}>
                Designed engaging UIs using React and Tailwind CSS.
              </li>
              <li contentEditable="true" suppressContentEditableWarning={true}>
                Enhanced accessibility and user experience across platforms.
              </li>
              <li contentEditable="true" suppressContentEditableWarning={true}>
                Worked closely with designers to implement pixel-perfect designs.
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaGraduationCap className="inline-block text-green-500 mr-2" />
            Education
          </h3>
          <div className="mt-4">
            <h4
              className="text-xl font-semibold text-gray-800"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Bachelor's in Computer Science
            </h4>
            <p className="italic text-gray-600">XYZ University</p>
            <p className="text-gray-700">Graduated: 2017</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaCode className="inline-block text-green-500 mr-2" />
            Skills
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li contentEditable="true" suppressContentEditableWarning={true}>
              React, Node.js, Express
            </li>
            <li contentEditable="true" suppressContentEditableWarning={true}>
              JavaScript, TypeScript, HTML, CSS
            </li>
            <li contentEditable="true" suppressContentEditableWarning={true}>
              MongoDB, MySQL, PostgreSQL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template6;
