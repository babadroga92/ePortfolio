import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <Sidebar />
      <main className="site-main">
        {children}
      </main>
    </div>
  );
}

export default Layout;
