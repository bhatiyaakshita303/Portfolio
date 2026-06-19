import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Github, Cpu, GitBranch, CheckCircle2 } from "lucide-react";
import Tag from "../components/Tag";
import RevealOnScroll from "../components/RevealOnScroll";
import { PROJECTS } from "../data/content";
import "../styles/Projects.css";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[2];

  return (
    <section className="section page-top">
      <div className="container container-narrow">
        <RevealOnScroll>
          <button className="back-link mono" onClick={() => navigate("/projects")}>
            ← back to projects
          </button>
          <Tag>
            {project.tag} / {project.stack}
          </Tag>
          <h1 className="page-title">{project.name}</h1>
          <p className="page-sub">{project.description}</p>

          <div className="detail-stack-row">
            {project.stackFull.map((t) => (
              <span className="mono mini-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="detail-grid" delay={100}>
          <div className="detail-card">
            <h3 className="detail-card-title">
              <Cpu size={18} /> Key features
            </h3>
            <ul className="feature-list">
              {project.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h3 className="detail-card-title">
              <GitBranch size={18} /> Project type
            </h3>
            <p className="detail-card-text">
              An independent data-analysis project written in Python,
              focused on exploring the connection between social media
              usage habits and lifestyle/health indicators. Built using a
              notebook-driven workflow with Pandas for data wrangling and
              visualization libraries for charting trends.
            </p>
            <div className="detail-actions">
              <a
                className="btn btn-primary btn-sm"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} /> View source on GitHub
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
