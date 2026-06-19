import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Tag from "./Tag";
import RevealOnScroll from "./RevealOnScroll";
import TypedLine from "./TypedLine";
import "../styles/Hero.css";

const CORE_STACK = ["React.js", "Node.js", "Express.js", "MongoDB"];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-inner">
        <RevealOnScroll className="hero-content">
          <Tag>// status: open to work</Tag>
          <h1 className="hero-title">
            Hi, I'm <span className="text-accent">Akshita Bhatiya</span>
            <br />
            <TypedLine />
          </h1>
          <p className="hero-sub">
            I design and build complete web applications — from responsive
            interfaces to REST APIs and databases — using the MERN stack.
            Three shipped projects, one consistent goal: clean, working
            software.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate("/projects")}>
              View Projects <ArrowRight size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate("/contact")}>
              Get in touch
            </button>
          </div>

          <div className="hero-stack">
            <span className="mono hero-stack-label">core stack</span>
            <div className="hero-stack-pills">
              {CORE_STACK.map((s) => (
                <span className="pill" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="hero-card" delay={150}>
          <div className="code-window">
            <div className="code-window-bar">
              <span className="dot dot-r" />
              <span className="dot dot-y" />
              <span className="dot dot-g" />
              <span className="mono code-window-title">developer.json</span>
            </div>
            <pre className="code-window-body mono">
{`{
  "name": "Akshita Bhatiya",
  "role": "MERN Stack Developer",
  "stack": {
    "frontend": ["HTML", "CSS", "JS", "React"],
    "backend": ["Node.js", "Express.js"],
    "database": ["MongoDB", "MongoDB Atlas", "SQL", "Mysql"],
    "exploring": ["Python", "ASP.NET"]
  },
  "design": ["Figma", "Canva"],
  "projects": 3,
  "availability": "open to opportunities"
}`}
            </pre>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
