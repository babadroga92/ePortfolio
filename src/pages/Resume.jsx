import React from "react";

function Resume() {
  return (
    <div className="content resume-page">
      <header className="content-header">
        <h1>Resume</h1>
      </header>

      {/* SUMMARY */}
      <section className="content-section resume-section">
        <h2>Professional Summary</h2>
        <p>
          Privacy &amp; Security Analyst with strong technical expertise in
          software engineering, privacy compliance, and risk analysis.
          Experienced in assessing large-scale systems, auditing technical
          evidence, and translating regulatory requirements into actionable
          engineering controls.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="content-section resume-section">
        <h2>Experience</h2>

        <h3>Software &amp; Systems Support Engineer — Accent CPA (Jun 2025)</h3>
        <ul>
          <li>
            Developed an internal RAG-based AI knowledge assistant using Java
            Spring Boot, PostgreSQL vector embeddings, and React.
          </li>
          <li>
            Automated workflows in TaxDome to improve task routing, client-file
            organization, and internal consistency.
          </li>
          <li>
            Provided primary systems engineering support across software,
            networking, and infrastructure.
          </li>
        </ul>

        <h3>Senior Privacy Specialist — TikTok (via Solvd Inc.) (Aug 2024 – May 2025)</h3>
        <ul>
          <li>
            Designed a technical privacy compliance framework for 150+ product
            features, defining requirements and audit procedures.
          </li>
          <li>
            Translated GDPR/CCPA and internal policies into engineering-ready
            privacy controls.
          </li>
          <li>
            Partnered with Incident Response to validate mitigation
            effectiveness after security and privacy events.
          </li>
        </ul>

        <h3>Test Automation Engineer — Meta (via Solvd Inc.) (Jul 2022 – Jul 2024)</h3>
        <ul>
          <li>
            Reviewed code, tests, database configs, and ACLs as technical
            evidence for regulatory and internal compliance.
          </li>
          <li>
            Analyzed microservices and data pipelines for privacy and security
            risks as part of the SDLC.
          </li>
          <li>
            Assisted in reviewing LLMs for data risk, fairness, and bias, and
            drove cleanup of legacy mitigations.
          </li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="content-section resume-section">
        <h2>Skills</h2>

        <h3>Technical</h3>
        <ul>
          <li>Java, Spring Boot, React, Selenium WebDriver</li>
          <li>JUnit, TestNG, Maven, REST API testing</li>
          <li>PostgreSQL, MySQL</li>
          <li>Docker, Linux, CI/CD (Jenkins)</li>
        </ul>

        <h3>Privacy &amp; Security</h3>
        <ul>
          <li>GDPR / CCPA practices</li>
          <li>Privacy controls, risk mitigation, compliance frameworks</li>
          <li>Data flow analysis &amp; technical audits</li>
          <li>Code review for privacy and security issues</li>
        </ul>

        <h3>Tools &amp; Platforms</h3>
        <ul>
          <li>Jira, Git/GitHub</li>
          <li>Wireshark, BurpSuite, Nmap</li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section className="content-section resume-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Old Dominion University</strong> — B.S. Cybersecurity
            (2024–2026, GPA: 3.8)
          </li>
          <li>
            <strong>Tidewater Community College</strong> — A.A.S. Cybersecurity
            (2020–2022, GPA: 3.93)
          </li>
        </ul>
      </section>

      {/* CERTIFICATIONS */}
      <section className="content-section resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>CompTIA Security+</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
