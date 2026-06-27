"use client";

import React, { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`scroll-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default function Skills() {
  const skills = [
    'Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'PyTorch', 
    'TensorFlow', 'Scikit-learn', 'Pandas', 'XGBoost', 'LangChain', 'RAG', 
    'PostgreSQL', 'REST APIs', 'Power Platform', 'Docker', 'Node.js', 
    'Copilot Studio', 'Kubernetes', 'AWS', 'Claude', 'Codex', 'Azure'
  ];

  return (
    <div className="main-content">
      <Reveal>
        <h1 className="page-title">Technical Skills</h1>
      </Reveal>
      
      <Reveal delay={100}>
        <div className="skills-container">
          {skills.map((skill, i) => (
            <div key={i} className="skill-pill">{skill}</div>
          ))}
        </div>
      </Reveal>

      <footer>
        <Reveal>
          © {new Date().getFullYear()} Aryan Rajesh. U.S Citizen.
        </Reveal>
      </footer>
    </div>
  );
}
