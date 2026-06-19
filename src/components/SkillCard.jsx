import React from "react";
import { Code2, Server, Database, Layers } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const ICONS = { Code2, Server, Database, Layers };

export default function SkillCard({ skill, delay = 0 }) {
  const Icon = ICONS[skill.icon] || Code2;
  return (
    <RevealOnScroll delay={delay} className="skill-card">
      <div className="skill-card-icon">
        <Icon size={20} />
      </div>
      <h3 className="skill-card-title">{skill.group}</h3>
      <ul className="skill-card-list">
        {skill.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </RevealOnScroll>
  );
}
