import React from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { CONTACT } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="brand">
          <span className="brand-prompt mono">~/</span>
          <span className="brand-name">Akshita.dev</span>
        </Link>
        <p className="mono footer-note">
          Built with React.js · {new Date().getFullYear()}
        </p>
        <a
          className="footer-github"
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <Github size={18} />
        </a>
      </div>
    </footer>
  );
}
