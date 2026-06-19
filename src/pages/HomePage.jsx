import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import Tag from "../components/Tag";
import RevealOnScroll from "../components/RevealOnScroll";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS, SKILLS } from "../data/content";
import "../styles/Skills.css";
import "../styles/Projects.css";

function QuickSkills() {
  return (
    <section className="section">
      <div className="container">
        <RevealOnScroll>
          <Tag>// skills</Tag>
          <h2 className="section-title">What I work with</h2>
        </RevealOnScroll>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <SkillCard skill={s} key={s.group} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const navigate = useNavigate();
  return (
    <section className="section section-alt">
      <div className="container">
        <RevealOnScroll className="section-head-row">
          <div>
            <Tag>// featured work</Tag>
            <h2 className="section-title">Projects</h2>
          </div>
          <button className="link-arrow" onClick={() => navigate("/projects")}>
            View all <ArrowUpRight size={16} />
          </button>
        </RevealOnScroll>

        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard project={p} key={p.id} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="container">
        <RevealOnScroll className="cta-box">
          <div>
            <Tag>// let's build</Tag>
            <h2 className="cta-title">Have a project in mind?</h2>
            <p className="cta-sub">
              Available for freelance work and full-time roles. Let's turn
              your idea into a working product.
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => navigate("/contact")}>
            Start a conversation <ArrowRight size={16} />
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickSkills />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
