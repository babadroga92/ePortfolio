// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="site-sidebar">
      <div className="sidebar-inner">
        {/* TOP: title + short about */}
        <header className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-icon" aria-hidden="true">
              💾
            </span>
            <span className="brand-name"> nemus.dev</span>
          </div>
          <div className="decor-divider"></div>
          <div className="sidebar-about">
            <h2 className="sidebar-about-heading">About Me</h2>
            <p className="site-tagline">
              I&apos;m Nemanja, a Privacy &amp; Security Analyst. This is my space to
              sharpen creativity in front-end craft.
            </p>
          </div>
        </header>
        <div className="decor-divider"></div>
        {/* NAV */}
        <nav className="sidebar-section">
          <h3 className="sidebar-heading">Navigation</h3>
          <ul className="sidebar-nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Skills &amp; Artifacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reflection"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Reflection Essay
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course-work"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Course Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="decor-divider"></div>

        <section className="sidebar-section">
          <h3 className="sidebar-heading">Stay Connected</h3>
          <ul className="sidebar-nav">
            <li>
              <a href="mailto:nmilanovic1992@gmail.com" className="nav-link">
                📧 Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nemtech/" target="_blank" rel="noopener" className="nav-link">
                💼 LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/babadroga92" target="_blank" rel="noopener" className="nav-link">
                🐙 GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
}

export default Sidebar;
