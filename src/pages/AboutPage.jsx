import React from "react";
import { Terminal, Palette } from "lucide-react";
import Tag from "../components/Tag";
import RevealOnScroll from "../components/RevealOnScroll";
import SkillCard from "../components/SkillCard";
import { SKILLS } from "../data/content";
import "../styles/Skills.css";
import "../styles/AboutContactFooter.css";

export default function AboutPage() {
  return (
    <section className="section page-top">
      <div className="container container-narrow">
        <RevealOnScroll>
          <Tag>// about</Tag>
          <h1 className="page-title">A bit about me</h1>
          <p className="page-sub">
            I'm Akshita Bhatiya, a MERN stack developer who enjoys taking a
            project from a blank repo to a deployed, working application.
            I'm comfortable across the stack — building interfaces in
            React, writing REST APIs with Node and Express, and modelling
            data in MongoDB — and I keep adding tools to that toolkit,
            including Python, ASP.NET, and design tools like Figma and
            Canva for quick mockups.
          </p>
          <h1 className="Experience-title">Professional Experience</h1>
          <p className="page-sub">
            Completed a 3-month internship as a MERN Stack Developer at Innovatix Technologies, where I worked on developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js. I gained practical experience in frontend development, API integration, database management, and building responsive user interfaces.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="about-grid" delay={100}>
          <div className="about-card">
            <Terminal size={20} />
            <h3>How I work</h3>
            <p>
              I plan structure before I write code, build in components, and
              test each piece — frontend, API and database — as I go,
              rather than all at once at the end.
            </p>
          </div>
          <div className="about-card">
            <Palette size={20} />
            <h3>Beyond code</h3>
            <p>
              A little bit of Figma and Canva means I can turn a rough idea
              into a layout before touching a single line of CSS.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={180}>
          <Tag>// full skill set</Tag>
          <h2 className="section-title">Skills</h2>
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
