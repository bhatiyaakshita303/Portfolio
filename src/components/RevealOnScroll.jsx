import React, { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them in once they scroll into view.
 * Usage: <RevealOnScroll delay={100}><div>...</div></RevealOnScroll>
 */
export default function RevealOnScroll({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} reveal ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
