import React from "react";

function Reflection() {
  return (
    <div className="content reflection-page">
      <header className="content-header">
        <h1>Reflection Essay</h1>
        <p className="lead">
          A reflective analysis of my interdisciplinary learning, skills, and artifacts, and how they prepare me for a career in privacy and security.
        </p>
      </header>

      <div className="course-doc">
        <iframe
          src="/artifacts/Reflection Essay .pdf"
          className="course-doc-frame"
          title="Reflection Essay PDF"
        ></iframe>
      </div>
    </div>
  );
}

export default Reflection;
