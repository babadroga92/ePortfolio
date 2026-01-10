import React, { useEffect, useMemo, useState } from "react";

function Sidebar() {
  const navItems = useMemo(
    () => [
      { id: "top", label: "Overview" },
      { id: "summary", label: "Summary" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState("top");
  const [isOpen, setIsOpen] = useState(false);

  // highlight active section on scroll
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  // mobile: lock background scroll when drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // close drawer on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const onNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
    setIsOpen(false); // close drawer on mobile
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="mobile-topbar">
        <div className="mobile-brand">
          <span className="brand-icon" aria-hidden="true">
            💾
          </span>
          <span className="brand-name">nemus.dev</span>
        </div>

        <button
          className="hamburger"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className={"hamburger-line" + (isOpen ? " is-open" : "")} />
          <span className={"hamburger-line" + (isOpen ? " is-open" : "")} />
          <span className={"hamburger-line" + (isOpen ? " is-open" : "")} />
        </button>
      </div>

      {/* Backdrop (mobile only) */}
      <div
        className={"drawer-backdrop" + (isOpen ? " is-open" : "")}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Sidebar / Drawer */}
      <aside className={"site-sidebar drawer" + (isOpen ? " is-open" : "")}>
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
              <h2 className="sidebar-about-heading">About</h2>
              <p className="site-tagline">
                Privacy &amp; Security Analyst focused on technical audits, privacy controls,
                and engineering-ready compliance.
              </p>
            </div>
          </header>

          <div className="decor-divider"></div>

          <section className="sidebar-section">
            <div className="sidebar-heading">Navigation</div>
            <ul className="sidebar-nav">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={onNavClick(item.id)}
                    className={"nav-link" + (activeId === item.id ? " nav-link-active" : "")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
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
                  <img
                    src="https://twenty-icons.com/linkedin.com/32"
                    alt="LinkedIn"
                    className="nav-icon nav-icon-linkedin"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://github.com/babadroga92"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://twenty-icons.com/github.com/32"
                    alt="GitHub"
                    className="nav-icon nav-icon-github"
                  />
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
