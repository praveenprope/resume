import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/TemplatePages";
import Homepage from "./pages/Homepage";
import ResumeTemplate from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3"; 
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/template1" element={<ResumeTemplate />} /> 
        <Route path="/template2" element={<Template2 />} /> 
        <Route path="/template3" element={<Template3 />} />
        <Route path="/template4" element={<Template4 />} />
        <Route path="/template5" element={<Template5 />} />
        <Route path="/template6" element={<Template6 />} />
      </Routes>
    </Router>
  );
};

export default App;