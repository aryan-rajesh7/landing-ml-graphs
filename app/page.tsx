"use client";

import React, { useEffect, useState, useRef } from "react";

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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {/* LOADING SCREEN */}
      <div className={`loader-wrapper ${loading ? "" : "hidden"}`}>
        <div className="loader-text">
          <span className="loader-text-inner">Aryan Rajesh</span>
        </div>
      </div>

      <div className="main-content">
        
        {/* HERO */}
        <section className="hero" style={{ minHeight: '60vh', marginTop: '40px' }}>
          <Reveal>
            <h1 className="hero-title">Aryan Rajesh</h1>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="hero-subtitle">Software & AI Engineering</h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="hero-desc">
              I build and deploy full-stack AI solutions that bridge the gap between complex data models and highly scalable applications. 
              My engineering philosophy revolves around creating resilient, optimized pipelines—whether that means accelerating inference on edge devices or orchestrating cloud-native architectures.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="hero-links">
              <a href="https://github.com/aryan-rajesh7" target="_blank" rel="noopener noreferrer" className="hero-link">GitHub</a>
              <a href="https://linkedin.com/in/aryan-rajesh7" target="_blank" rel="noopener noreferrer" className="hero-link">LinkedIn</a>
              <a href="mailto:aryan.raj@hotmail.com" className="hero-link">Email</a>
            </div>
          </Reveal>
        </section>

        {/* ABOUT ME / YAP */}
        <section style={{ marginBottom: '100px' }}>
          <Reveal>
            <div className="section-header">About Me</div>
          </Reveal>
          <Reveal delay={100}>
            <p className="hero-desc" style={{ maxWidth: '800px', fontSize: '1.05rem' }}>
              My journey into computer science started early. I successfully finished the Early College Pathway at Mountain House High School, earning my IGETC certification from San Joaquin Delta College concurrently with my high school diploma. 
              This rigorous academic acceleration allowed me to transfer into the University of California, Irvine, where I am now pursuing my Bachelor of Science in Computer Science with a specialized focus on Artificial Intelligence.
            </p>
            <p className="hero-desc" style={{ maxWidth: '800px', fontSize: '1.05rem', marginTop: '24px' }}>
              I thrive at the intersection of machine learning research and practical software engineering. From architecting offline generative frameworks that run securely on local Apple Silicon hardware, to building real-time telemetry systems querying live global traffic grids, I am driven by a passion for solving hard problems. I believe that true innovation lies not just in training powerful models, but in engineering the systems required to deploy them efficiently in the real world.
            </p>
          </Reveal>
        </section>

        {/* HONORS & LANGUAGES */}
        <section style={{ marginBottom: '100px', display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <Reveal>
              <div className="section-header">Honors & Awards</div>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>State Seal of Biliteracy</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>Issued by State Superintendent of Public Instruction · May 2025</p>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Honored with the State Seal of Biliteracy in English and Spanish by demonstrating advanced proficiency and mastery in both languages.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>President's Award for Educational Excellence</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>Issued by United States Department of Education · Jan 2021</p>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Recognizing a GPA of 3.5 or higher and strong recommendations from teachers.</p>
              </div>
            </Reveal>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <Reveal>
              <div className="section-header">Languages</div>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600' }}>English</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Native or bilingual proficiency</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Spanish</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Limited working proficiency</p>
              </div>
            </Reveal>
          </div>
          
        </section>

      </div>
      
      <footer>
        <Reveal>
          © {new Date().getFullYear()} Aryan Rajesh. U.S Citizen.
        </Reveal>
      </footer>
    </div>
  );
}
