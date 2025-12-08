// src/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="site-sidebar">
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-icon" aria-hidden="true">
              💾
            </span>
            <span className="brand-name">nemus.dev</span>
          </div>

          <div className="decor-divider"></div>

          <div className="sidebar-about">
            <h2 className="sidebar-about-heading">About Me</h2>
            <p className="site-tagline">
              I&apos;m Nemanja, a Privacy &amp; Security Analyst. This is my
              space to sharpen creativity in front-end craft.
            </p>
          </div>
        </header>

        <div className="decor-divider"></div>

        <section className="sidebar-section">
          <div className="sidebar-heading">Navigation</div>
          <ul className="sidebar-nav">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Skills &amp; Artifacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reflection"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Reflection Essay
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course-work"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Course Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </section>

        <div className="decor-divider"></div>

        <section className="sidebar-section">
          <div className="sidebar-heading">Stay Connected</div>
          <ul className="sidebar-nav">
            <li>
              <a className="nav-link" href="mailto:nmilanovic1992@gmail.com">
                📧 Email
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/nemtech"
                target="_blank"
                rel="noreferrer"
              >
                💼 LinkedIn
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://github.com/babadroga92"
                target="_blank"
                rel="noreferrer"
              >
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
