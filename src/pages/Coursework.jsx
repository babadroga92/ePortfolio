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
          This assignment involved selecting a job advertisement in a field that
          matches my skillset and analyzing it to understand the company, the
          role&apos;s purpose, and its key responsibilities. I examined the
          specific skills and qualifications listed in the ad, interpreted
          implied expectations, and connected these requirements to the
          knowledge and experience I have gained through my coursework and
          professional background.
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
            src="/artifacts/Tracing My Path Through Cybersecurity, Software Development, and Privacy Engineering.pdf"
            className="course-doc-frame"
          />
        </div>
      </section>
    </div>
  );
}

export default Coursework;
