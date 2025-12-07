import React from "react";

function Skills() {
  return (
    <div className="content">
      <header className="content-header">
        <h1>Skills &amp; Artifacts</h1>
        <p className="lead">
          This section highlights three core skills I developed in my
          interdisciplinary program. Each skill is represented by three
          artifacts drawn from coursework, projects, and other experiences. -- Work in Progress
        </p>
      </header>

      {/* Skill 1 */}
      <section className="content-section">
        <h2>Skill 1: Example Skill Name</h2>
        <p>
          Short description of what this skill means in my field and how I
          developed it. -- Work in Progress
        </p>

        <div className="artifact-list">
          <article className="artifact-card">
            <h3>Artifact 1 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>
              Placeholder description for artifact 1.
            </p>
          </article>

          <article className="artifact-card">
            <h3>Artifact 2 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder description for artifact 2.</p>
          </article>

          <article className="artifact-card">
            <h3>Artifact 3 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder description for artifact 3.</p>
          </article>
        </div>
      </section>

      {/* Skill 2 */}
      <section className="content-section">
        <h2>Skill 2: Example Skill Name</h2>
        <p>Short description of the second skill.</p>
        <div className="artifact-list">
          <article className="artifact-card">
            <h3>Artifact 4 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder text.</p>
          </article>
          <article className="artifact-card">
            <h3>Artifact 5 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder text.</p>
          </article>
          <article className="artifact-card">
            <h3>Artifact 6 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder text.</p>
          </article>
        </div>
      </section>

      {/* Skill 3 */}
      <section className="content-section">
        <h2>Skill 3: Example Skill Name</h2>
        <p>Short description of the third skill.</p>
        <div className="artifact-list">
          <article className="artifact-card">
            <h3>Artifact 7 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder text.</p>
          </article>
          <article className="artifact-card">
            <h3>Artifact 8 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder text.</p>
          </article>
          <article className="artifact-card">
            <h3>Artifact 9 Title</h3>
            <p className="artifact-meta">Course / Context · Year</p>
            <p>Placeholder text.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Skills;
