import React from "react";

function Welcome() {
  return (
    <div className="content">
      {/* TOP / HERO */}
      <section id="top" className="page-section">
        <header className="content-header hero-header">
          <div className="hero-text">
            <h1>Nemanja Milanovic</h1>
            <p className="lead">
              Privacy-focused analyst with a strong engineering background, experienced in building, reviewing, and assessing complex software systems.
            </p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact
              </a>
            </div>

            <div className="hero-meta">
              <span className="chip">Privacy Engineering</span>
              <span className="chip">GDPR/CCPA</span>
              <span className="chip">Privacy Risk</span>
              <span className="chip">Java / Spring Boot</span>
            </div>
          </div>

          <div className="hero-image">
            <img src="/family.jpeg" alt="Nemanja" />
          </div>
        </header>
      </section>

      <div className="decor-divider"></div>

      {/* SUMMARY */}
      <section id="summary" className="page-section">
        <h2>Summary</h2>
        <p className="muted">
          I work at the intersection of privacy, security, and software engineering,
          supporting the assessment and implementation of privacy controls in complex,
          data-driven systems. My experience spans technical audits, system-level risk
          analysis, and hands-on engineering work across regulated environments.
        </p>

        <p className="muted">
          I’ve reviewed production code, data flows, access controls, and infrastructure
          configurations as technical evidence for compliance, and have translated
          regulatory requirements such as GDPR and CCPA into concrete, testable
          engineering expectations. I’m comfortable working closely with engineers to
          evaluate how systems actually behave—not just how they are documented.
        </p>

        <p className="muted">
          In parallel with privacy analysis work, I’ve contributed to internal engineering
          efforts, including building a RAG-based internal knowledge assistant and
          supporting system automation in a regulated environment. This technical
          foundation allows me to engage effectively across both engineering and privacy
          functions.
        </p>
      </section>

      <div className="decor-divider"></div>

      {/* EXPERIENCE */}
      <section id="experience" className="page-section">
        <h2>Experience</h2>

        <div className="timeline">
          {/* Geotab */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <img src="geotab.png" alt="Geotab" />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">Privacy Analyst Intern</h3>
                <span className="timeline-dates">Jan 2026 — Present</span>
              </div>

              <p className="timeline-meta">
                Geotab · Degree-aligned internship focused on applied privacy analysis
              </p>

              <p className="timeline-desc">
                Supporting privacy operations in enterprise telematics systems through privacy analysis and internal tooling, including data handling assessments, privacy enablement initiatives, and collaboration with engineering and compliance stakeholders.
              </p>
            </div>
          </div>


          {/* Accent CPA */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <img src="acc.png" alt="Accent CPA" />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">Software &amp; Systems Engineer</h3>
                <span className="timeline-dates">July 2025 — Dec 2025</span>
              </div>

              <p className="timeline-meta">Accent CPA</p>

              <p className="timeline-desc">
                Built and owned internal systems in a small, data-sensitive environment, including an
                internal RAG-based knowledge assistant used by staff to query client and firm-produced
                documents (PDFs sourced from TaxDome) within the internal LAN. Developed and maintained
                TaxDome workflow automations supporting daily operations, and built the firm’s
                public-facing website from scratch using React.
              </p>
            </div>
          </div>

          {/* TikTok */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <img src="tiktok.png" alt="TikTok" />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">Senior Privacy Specialist</h3>
                <span className="timeline-dates">Aug 2024 — May 2025</span>
              </div>

              <p className="timeline-meta">TikTok (via Solvd Inc.)</p>

              <p className="timeline-desc">
                Designed and maintained a technical privacy compliance framework covering 150+ product
                features, translating regulatory requirements into engineering-ready privacy controls and
                validating implementation through technical evidence reviews. Partnered with Incident
                Response to assess and validate mitigations following privacy and security incidents.
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <img src="meta.webp" alt="Meta" />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">Test Automation Engineer</h3>
                <span className="timeline-dates">Jul 2022 — Jul 2024</span>
              </div>

              <p className="timeline-meta">Meta (via Solvd Inc.)</p>

              <p className="timeline-desc">
                Reviewed production source code, automated tests, database configurations, and access
                controls as technical evidence for compliance requirements. Analyzed microservices and data
                pipelines for privacy and security risk across the SDLC, and supported LLM reviews focused
                on data risk, fairness considerations, and cleanup of legacy mitigations.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-footer">
          <a className="btn btn-primary" href="/Nemanja_Milanovic_CV.pdf" download>
            Download Resume (PDF)
          </a>
        </div>
      </section>


      <div className="decor-divider"></div>

      {/* PROJECTS */}
      <section id="projects" className="page-section">
        <h2>Projects</h2>

        <div className="projects-grid">
          {/* Project 1: Internal RAG */}
          <article className="project-card">
            <div className="project-top">
              <h3 className="project-title">Internal RAG Knowledge Assistant</h3>
              <div className="project-meta">Spring Boot · PostgreSQL (pgvector) · React</div>
            </div>

            <div className="project-media">
              <img
                src="accenta.png"
                alt="Internal RAG knowledge assistant UI"
                className="project-image project-image-rag"
              />
            </div>

            <div className="project-body">
              <p className="project-desc">
                Designed and built an internal retrieval-augmented generation (RAG) system to help
                staff query client and firm-produced documents using natural language. The system
                ingests PDFs sourced from TaxDome and returns contextual results based on vector
                similarity search.
              </p>

              <p className="project-desc">
                Implemented end-to-end, including backend services, embedding pipelines, and a
                React interface. Deployed within the internal LAN environment; not publicly accessible.
              </p>

              <div className="project-actions">
                <span className="project-badge">Internal system</span>
              </div>
            </div>
          </article>

          {/* Project 2: Public website */}
          <article className="project-card">
            <div className="project-top">
              <h3 className="project-title">Accent CPA Website</h3>
              <div className="project-meta">React · Front-End Development</div>
            </div>

            <div className="project-media">
              <img
                src="sneakpeak.png"
                alt="Accent CPA website"
                className="project-image"
              />
            </div>

            <div className="project-body">
              <p className="project-desc">
                Built the firm’s public-facing website from scratch using React, translating a
                designer-provided layout into a responsive, production-ready application.
              </p>

              <p className="project-desc">
                Focused on clean presentation, usability, and consistent implementation of the design
                system across pages and components.
              </p>

              <div className="project-actions">
                <a
                  className="btn btn-secondary"
                  href="https://accent-cpa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="decor-divider"></div>

      <section id="skills" className="page-section">
        <h2>Skills</h2>

        <div className="grid">
          {/* Privacy & Compliance */}
          <div className="card">
            <h3>Privacy &amp; Compliance</h3>
            <div className="pill-row">
              <span className="pill">Privacy Engineering</span>
              <span className="pill">GDPR/CCPA</span>
              <span className="pill">Regulatory Translation</span>
              <span className="pill">PIAs / DPIAs</span>
              <span className="pill">Technical Evidence Review</span>
            </div>
          </div>

          {/* Security & Risk */}
          <div className="card">
            <h3>Security &amp; Risk Analysis</h3>
            <div className="pill-row">
              <span className="pill">Data Flow Analysis</span>
              <span className="pill">System Risk Assessment</span>
              <span className="pill">Access Controls</span>
              <span className="pill">Incident Response Support</span>
              <span className="pill">Threat Awareness</span>
            </div>
          </div>

          {/* Software Engineering */}
          <div className="card">
            <h3>Software Engineering</h3>
            <div className="pill-row">
              <span className="pill">Java</span>
              <span className="pill">Spring Boot</span>
              <span className="pill">React</span>
              <span className="pill">REST APIs</span>
              <span className="pill">PostgreSQL</span>
              <span className="pill">MySQL</span>
              <span className="pill">Docker</span>
              <span className="pill">Linux</span>
            </div>
          </div>

          {/* Tooling & Platforms */}
          <div className="card">
            <h3>Tooling &amp; Platforms</h3>
            <div className="pill-row">
              <span className="pill">Git / GitHub</span>
              <span className="pill">Jira</span>
              <span className="pill">CI/CD (Jenkins)</span>
              <span className="pill">Selenium WebDriver</span>
              <span className="pill">JUnit / TestNG</span>
              <span className="pill">Wireshark</span>
              <span className="pill">Burp Suite</span>
              <span className="pill">Nmap</span>
            </div>
          </div>
        </div>
      </section>

      <div className="decor-divider"></div>

      {/* EDUCATION */}
      <section id="education" className="page-section">
        <h2>Education</h2>

        <div className="card">
          <h3>B.S. Cybersecurity</h3>
          <p className="muted">
            Old Dominion University · 2024–2026 · GPA 3.8
          </p>
        </div>

        <div className="card" style={{ marginTop: "0.75rem" }}>
          <h3>A.A.S. Cybersecurity</h3>
          <p className="muted">
            Tidewater Community College · 2020–2022 · GPA 3.93
          </p>
        </div>
      </section>

      <div className="decor-divider"></div>

      {/* CONTACT */}
      <section id="contact" className="page-section">
        <h2>Contact</h2>

        <p className="muted contact-copy">
          Open to conversations around privacy, security, and engineering-focused roles.
        </p>

        <p className="muted contact-subcopy">
          Based in the U.S. · Open to U.S.-based roles (remote-friendly).
        </p>

        <div className="contact-row">
          <a className="btn btn-primary" href="mailto:nmilanovic1992@gmail.com">
            Email
          </a>

          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com/in/nemtech"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="btn btn-secondary"
            href="https://github.com/babadroga92"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a className="btn btn-secondary" href="/Nemanja_Milanovic_CV.pdf" download>
            Download Resume
          </a>
        </div>

      </section>


      <div className="page-footer">
        <span className="muted">© {new Date().getFullYear()} nem.tech</span>
      </div>
    </div>
  );
}

export default Welcome;
