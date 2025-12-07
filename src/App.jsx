import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import Skills from "./pages/Skills";
import Reflection from "./pages/Reflection";
import Coursework from "./pages/Coursework";
import Resume from "./pages/Resume";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/course-work" element={<Coursework />} />
        <Route path="/resume" element={<Resume />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
