import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import "../styles/Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Add a background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-prompt mono">~/</span>
          <span className="brand-name">Akshita.dev</span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-links nav-links-desktop">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${pathname === l.to ? "nav-link-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <button className="btn btn-primary btn-sm" onClick={() => navigate("/contact")}>
            Hire me
          </button>
        </nav>

        {/* Mobile toggle button */}
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`nav-mobile ${open ? "nav-mobile-open" : ""}`}>
        {LINKS.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav-mobile-link ${pathname === l.to ? "nav-link-active" : ""}`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {l.label}
          </Link>
        ))}
        <button className="btn btn-primary btn-block" onClick={() => navigate("/contact")}>
          Hire me <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}
