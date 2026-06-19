import React, { useEffect, useState } from "react";

const PHRASES = [
  "MERN Stack Developer",
  "Building full-stack web apps",
  "React.js • Node.js • MongoDB",
];

/** Small typewriter-style animated text used in the hero section. */
export default function TypedLine() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIdx];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else if (text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <span className="typed mono">
      {text}
      <span className="cursor">_</span>
    </span>
  );
}
