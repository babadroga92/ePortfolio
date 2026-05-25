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
              Privacy engineer with a strong software engineering foundation, building AI-driven automation, privacy tooling, and compliance solutions for complex systems.
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
              <span className="chip">AI Automation</span>
              <span className="chip">RAG Systems</span>
              <span className="chip">Python / Java</span>
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
          I work at the intersection of privacy, engineering, and AI automation,
          building systems that reduce manual compliance effort and help translate
          privacy requirements into scalable technical solutions.
        </p>

        <p className="muted">
          My experience includes privacy engineering, technical audits, data flow
          analysis, evidence-based compliance reviews, and hands-on software
          development across regulated and data-sensitive environments. I have
          worked closely with engineers, privacy teams, and compliance stakeholders
          to evaluate system behavior, implement controls, and improve operational
          efficiency.
        </p>

        <p className="muted">
          In addition to privacy governance work, I have built internal RAG-based
          AI assistants, workflow automation tools, and technical documentation to
          support privacy operations, secure data access, and enterprise-scale
          decision making.
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
                <h3 className="timeline-title">Privacy Engineer Intern</h3>
                <span className="timeline-dates">Jan 2026 — Present</span>
              </div>

              <p className="timeline-meta">Geotab</p>

              <p className="timeline-desc">
                Build privacy engineering and AI-driven governance solutions that automate enterprise compliance workflows,
                improve visibility into regulated data usage, and support scalable privacy operations across distributed systems.
              </p>

              <p className="timeline-desc">
                Designed and developed a GDPR Article 30 (ROPA) discovery and classification platform using Java, Python, React, BigQuery, and GCP APIs
                to identify PII-bearing assets across enterprise cloud environments and automate processing activity mapping through metadata analysis and AI-assisted classification.
              </p>

              <p className="timeline-desc">
                Architected a modular parent-child skill framework that routes enterprise requests to specialized privacy automation tools through a unified interface, supporting workflows such as Privacy Threshold Assessments (PTA), Privacy Risk Assessments (PRA), sub-processor reviews, RFX responses, and country-readiness evaluations.
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
                <span className="timeline-dates">Jul 2025 — Dec 2025</span>
              </div>

              <p className="timeline-meta">Accent CPA</p>

              <p className="timeline-desc">
                Designed and built an internal RAG-based AI knowledge assistant
                using Spring Boot, PostgreSQL (pgvector), React, and Ollama,
                enabling staff to retrieve firm and client documents through
                natural-language queries.
              </p>

              <p className="timeline-desc">
                Built document ingestion pipelines for OneDrive and TaxDome,
                processed 250+ GB of unstructured PDFs within a LAN-restricted
                environment, automated internal workflows, and developed the
                firm’s public-facing React website.
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
                Designed and built a privacy compliance framework for 150+ product
                features, translating regulatory requirements into technical
                controls and streamlining audit preparation through structured
                evidence and engineering-ready standards.
              </p>

              <p className="timeline-desc">
                Worked with engineering and Incident Response teams to validate
                remediation effectiveness following security and privacy events,
                improving audit readiness and privacy control coverage across the
                SDLC.
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
                Reviewed code, automated tests, database tables, and access
                controls as technical evidence for compliance commitments,
                helping identify gaps early and improve audit readiness.
              </p>

              <p className="timeline-desc">
                Supported Privacy Engineering reviews of microservices, data
                flows, and LLM systems for privacy, security, and data-risk
                exposure, enabling earlier mitigation across the SDLC.
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
              <div className="project-meta">
                Spring Boot · PostgreSQL (pgvector) · React
              </div>
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
                Designed and built an internal retrieval-augmented generation
                (RAG) system to help staff query client and firm-produced
                documents using natural language.
              </p>

              <p className="project-desc">
                Implemented backend services, embedding pipelines, vector search,
                and a React interface for a LAN-restricted environment handling
                250+ GB of unstructured PDFs.
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
                Built the firm’s public-facing website from scratch using React,
                translating a designer-provided layout into a responsive,
                production-ready application.
              </p>

              <p className="project-desc">
                Focused on clean presentation, usability, and consistent
                implementation of the design system across pages and components.
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
          {/* Privacy Engineering */}
          <div className="card">
            <h3>Privacy Engineering &amp; Compliance</h3>
            <div className="pill-row">
              <span className="pill">Privacy Engineering</span>
              <span className="pill">GDPR / CCPA</span>
              <span className="pill">Technical Audits</span>
              <span className="pill">Data Flow Analysis</span>
              <span className="pill">Risk Mitigation</span>
              <span className="pill">Access Control Review</span>
            </div>
          </div>

          {/* AI & Automation */}
          <div className="card">
            <h3>AI &amp; Automation</h3>
            <div className="pill-row">
              <span className="pill">Python</span>
              <span className="pill">RAG Systems</span>
              <span className="pill">LLM Integration</span>
              <span className="pill">Workflow Automation</span>
              <span className="pill">AI Skills Architecture</span>
            </div>
          </div>

          {/* Software Engineering */}
          <div className="card">
            <h3>Software Engineering</h3>
            <div className="pill-row">
              <span className="pill">Java</span>
              <span className="pill">Spring Boot</span>
              <span className="pill">TypeScript</span>
              <span className="pill">React</span>
              <span className="pill">SQL</span>
              <span className="pill">PostgreSQL</span>
              <span className="pill">MySQL</span>
              <span className="pill">REST APIs</span>
            </div>
          </div>

          {/* Tooling & Platforms */}
          <div className="card">
            <h3>Tooling &amp; Platforms</h3>
            <div className="pill-row">
              <span className="pill">Docker</span>
              <span className="pill">Linux</span>
              <span className="pill">CI/CD (Jenkins)</span>
              <span className="pill">Git</span>
              <span className="pill">GitLab</span>
              <span className="pill">Maven</span>
              <span className="pill">Selenium WebDriver</span>
              <span className="pill">JUnit / TestNG</span>
              <span className="pill">Jira</span>
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
          Open to conversations around privacy engineering, AI automation, and security-focused software roles.
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