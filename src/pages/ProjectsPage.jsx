import React from "react";
import Tag from "../components/Tag";
import RevealOnScroll from "../components/RevealOnScroll";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/content";
import "../styles/Projects.css";

export default function ProjectsPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <RevealOnScroll>
          <Tag>// all projects</Tag>
          <h1 className="page-title">Things I've built</h1>
          <p className="page-sub">
            Three projects covering full-stack MERN development, the MEAN
            stack, and Python-based data analysis.
          </p>
        </RevealOnScroll>

        <div className="project-grid project-grid-wide">
          {PROJECTS.map((p, i) => (
            <ProjectCard project={p} key={p.id} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
