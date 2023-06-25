import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

const router = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/skills" element={<SkillsPage />} />
    <Route path="/projects" element={<ProjectPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>{router}</Router>
  </React.StrictMode>
);
