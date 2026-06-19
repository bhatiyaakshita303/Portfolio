import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function ProjectCard({ project, delay = 0 }) {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    if (project.detailOnly) {
      // No live demo for this project — send the user to its detail page instead
      navigate(`/projects/${project.id}`);
    } else if (project.live) {
      window.open(project.live, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <RevealOnScroll delay={delay} className="project-card" as="article">
      <div className="project-card-top">
        <span className="mono project-card-tag">{project.tag}</span>
        <span className="pill pill-outline">{project.stack}</span>
      </div>
      <h3 className="project-card-title">{project.name}</h3>
      <p className="project-card-blurb">{project.blurb}</p>
      <div className="project-card-stack">
        {project.stackFull.map((t) => (
          <span className="mono mini-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="project-card-actions">
        <button className="btn btn-primary btn-sm" onClick={handlePrimaryClick}>
          {project.detailOnly ? (
            <>
              View details <ArrowRight size={14} />
            </>
          ) : (
            <>
              Live demo <ExternalLink size={14} />
            </>
          )}
        </button>
        <a
          className="btn btn-ghost btn-sm"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={14} /> Code
        </a>
      </div>
    </RevealOnScroll>
  );
}
