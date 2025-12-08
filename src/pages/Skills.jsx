// src/pages/Skills.jsx
import React from "react";

function Skills() {
  return (
    <div className="content">
      <header className="content-header">
        <h1>Skills &amp; Artifacts</h1>
        <p className="lead">
          Selected technical artifacts that demonstrate my applied cybersecurity
          and software engineering experience.
        </p>
      </header>

      {/* TECHNICAL SKILLS & APPLIED CYBERSECURITY */}
      <section className="content-section">
        <h2>Technical Skills &amp; Applied Cybersecurity</h2>
        <p>
          This skillset highlights how I combine formal cybersecurity training,
          hands-on experimentation, and real-world engineering projects. The
          artifacts below show my progression from foundational knowledge to
          building and securing systems in practice.
        </p>

        <div className="artifact-list">
          {/* Artifact 1 – Security+ */}
          <article className="artifact-card">
            <h3>CompTIA Security+ Certification</h3>
            <p>
              Security+ gave me a strong foundation in core cybersecurity principles—including risk, threats, and basic defense strategies—and helped establish the technical base I built on in later security and privacy engineering work.
            </p>

            <div className="course-doc">
              <img
                src="/artifacts/security.png"
                alt="CompTIA Security+ badge and description"
                style={{ width: "100%", borderRadius: "6px" }}
              />
            </div>

            <p className="artifact-meta">
              Focus areas: risk management, network security, threat detection,
              incident response, and security policies.
            </p>
          </article>

          {/* Artifact 2 – AI Chatbot */}
          <article className="artifact-card">
            <h3>AI Chatbot for Document-Based Automation</h3>
            <p>
              I built a custom AI chatbot that answers natural-language questions using an organization’s own documents. It uses retrieval-augmented generation (RAG), where files are embedded, indexed, and queried so the model responds with accurate, context-aware information.
            </p>

            <div className="course-doc">
              <img
                src="/artifacts/chatbot.png"
                alt="Screenshot of the AccentA AI chatbot interface"
                style={{ width: "100%", borderRadius: "6px" }}
              />
            </div>

            <p className="artifact-meta">
              Tech stack: Java/React, vector search, embeddings, and a
              web-based chat UI for real users.
            </p>
          </article>

          {/* Artifact 3 – Linux Security Lab */}
          <article className="artifact-card">
            <h3>Linux Security Lab: Nmap Brute-Force Enumeration</h3>
            <p>
              This Linux security lab focused on service discovery and weak-password testing using Nmap’s scripting engine. By running the ftp-brute script in a safe environment, I observed how insecure credentials can be exploited and how systems behave during brute-force attempts.
            </p>

            <div className="course-doc">
              <img
                src="/artifacts/bruteforce.png"
                alt="Terminal screenshot showing Nmap ftp-brute output"
                style={{ width: "100%", borderRadius: "6px" }}
              />
            </div>

            <p className="artifact-meta">
              Skills demonstrated: Linux command line, Nmap/NSE usage,
              reconnaissance, brute-force techniques, and interpretation of scan
              results for system hardening.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Skill 2 ===================== */}
      <section className="skill-block">
        <h2>Skill 2: Technical Writing & Documentation</h2>
        <p className="skill-summary">
          Strong technical writing is essential in cybersecurity and privacy work.
          These artifacts demonstrate my ability to explain complex topics clearly,
          analyze technical and ethical issues, and communicate recommendations in
          structured, professional formats.
        </p>

        {/* Artifact 1 */}
        <div className="artifact">
          <h3>Artifact 1: Surveillance Capitalism Essay</h3>
          <p>
            A research paper analyzing how personal data is monetized in digital
            systems and the ethical concerns surrounding it.
          </p>
          <div className="course-doc">
            <iframe
              src="/artifacts/surveillancecapitalism.pdf"
              className="course-doc-frame"
              title="Surveillance Capitalism Essay"
            ></iframe>
          </div>
        </div>

        {/* Artifact 2 */}
        <div className="artifact">
          <h3>Artifact 2: Cybersecurity Attack Analysis</h3>
          <p>
            A structured examination of an attack scenario, including
            vulnerabilities, exploitation methods, and layered defenses.
          </p>
          <div className="course-doc">
            <iframe
              src="/artifacts/cybersecurityattack.pdf"
              className="course-doc-frame"
              title="Cybersecurity Attack Analysis"
            ></iframe>
          </div>
        </div>

        {/* Artifact 3 */}
        <div className="artifact">
          <h3>Artifact 3: Business Plan & Feasibility Report</h3>
          <p>
            A professional-style analysis evaluating feasibility, requirements, and
            organizational decision-making around a proposed system.
          </p>
          <div className="course-doc">
            <iframe
              src="/artifacts/businessplan.pdf"
              className="course-doc-frame"
              title="Business Plan Document"
            ></iframe>
          </div>
        </div>
      </section>


      {/* ===================== Skill 3 ===================== */}
      <section className="skill-block">
        <h2>Skill 3: Privacy & Compliance Engineering</h2>
        <p className="skill-summary">
          Privacy engineering sits at the intersection of technology, policy, and
          human behavior. These artifacts showcase my ability to interpret regulations,
          evaluate risks, and apply privacy-by-design principles in technical contexts.
        </p>

        {/* Artifact 1 */}
        <div className="artifact">
          <h3>Artifact 1: Privacy-Focused Data Flow Diagram</h3>
          <p>
            A Level-1 diagram showing how user data moves through a fictional web application and the key privacy controls along the way.
          </p>
          <img
            src="/artifacts/datamapping.png"
            alt="Privacy-focused Level-1 data flow diagram for a fictional web application"
            className="artifact-image"
          />
        </div>

        {/* Artifact 2 — Browser Permissions Violation */}
        <div className="skill-artifact">
          <h3>Artifact 2: Browser Permissions Violation Log</h3>
          <p>
            A minimal console snapshot showing a permissions-policy violation blocked by
            the browser. This reflects my ability to interpret privacy-related warnings
            and understand how modern browsers enforce protective defaults.
          </p>

          <div className="artifact-image-wrapper">
            <img
              src="/artifacts/permissions_violation.png"
              alt="Browser console privacy violation warning"
              className="artifact-image"
            />
          </div>
        </div>

        {/* Artifact 3 */}
        <div className="artifact">
          <h3>Artifact 3: Privacy Risk Evaluation Summary</h3>
          <p>
            I identified the privacy
            concern of over-collection, assessed the potential risk, and recommended
            mitigations such as minimizing logged fields and reducing retention.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Skills;
