// src/pages/Coursework.jsx
import React from "react";

function Coursework() {
  return (
    <div className="content">
      <header className="content-header">
        <h1>Course Work</h1>
      </header>

      {/* 1. Job Advertisement Analysis */}
      <section className="content-section coursework-section">
        <h2>Job Advertisement Analysis</h2>
        <p>
          This assignment required analyzing a job advertisement in my field to identify key responsibilities, required skills, and how they connect to my academic and professional experience.
        </p>

        <div className="course-doc">
          <iframe
            title="Job Advertisement Analysis"
            src="/artifacts/Job_Analysis.pdf"
            className="course-doc-frame"
          />
        </div>
      </section>

      {/* 2. Personal Narrative Essay */}
      <section className="content-section coursework-section">
        <h2>Personal Narrative Essay</h2>
        <p>
          This narrative traces my path through cybersecurity, software
          development, and privacy engineering. I reflect on key moments,
          courses, and experiences that shaped my interests and explain how they
          led me toward my current goals in privacy and security.
        </p>

        <div className="course-doc">
          <iframe
            title="Personal Narrative Essay"
            src="/artifacts/Tracing_My_Path.pdf"
            className="course-doc-frame"
          />
        </div>
      </section>
    </div>
  );
}

export default Coursework;
