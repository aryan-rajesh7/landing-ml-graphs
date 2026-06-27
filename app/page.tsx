"use client";

import React, { useEffect, useState, useRef } from "react";

// Project Links
const TRAFFIC_DEMO_URL = "https://ai-traffic-optimizer.vercel.app/";
const TRAFFIC_GITHUB_URL = "https://github.com/aryan-rajesh7/ai-traffic-optimizer";
const HF_URL = "https://huggingface.co/spaces/aryan-rajesh7/ai-traffic-optimizer";
const NEXUS_GITHUB_URL = "https://github.com/aryan-rajesh7/nexus-lex3d";
const ML_REPO_URL = "https://github.com/aryan-rajesh7/landing-ml-graphs";

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

export default function ProfessionalPortfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2s
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- GLOBAL STYLES --- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');

        :root {
          --bg-primary: #FAFAFA;
          --bg-secondary: #FFFFFF;
          --text-primary: #111827;
          --text-secondary: #4B5563;
          --text-tertiary: #9CA3AF;
          --accent: #2563EB;
          --border: #E5E7EB;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html { scroll-behavior: smooth; }

        body {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* --- LOADING SCREEN --- */
        .loader-wrapper {
          position: fixed;
          inset: 0;
          background: var(--bg-secondary);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .loader-wrapper.hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-20px);
        }
        
        .loader-text {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }
        .loader-text::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--accent);
          transform: translateX(-100%);
          animation: swipe 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        @keyframes swipe {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .loader-text-inner {
          opacity: 0;
          animation: revealText 0.1s forwards 0.75s;
        }
        @keyframes revealText {
          to { opacity: 1; }
        }

        /* --- NAVBAR --- */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(250, 250, 250, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
          z-index: 1000;
          transition: all 0.3s;
        }
        .nav-brand {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -0.05em;
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .navbar { padding: 0 24px; }
        }

        /* --- LAYOUT & REVEAL --- */
        .main-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- SECTION HEADERS --- */
        .section-header {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .section-header::after {
          content: '';
          flex-grow: 1;
          height: 1px;
          background: var(--border);
        }

        /* --- HERO --- */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 400;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }
        .hero-links {
          display: flex;
          gap: 24px;
          font-size: 15px;
          font-weight: 500;
          flex-wrap: wrap;
        }
        .hero-link {
          color: var(--text-primary);
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
        }
        .hero-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          background: var(--text-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* --- EXPERIENCE TIMELINE --- */
        .section {
          padding: 80px 0;
        }
        .timeline {
          border-left: 2px solid var(--border);
          padding-left: 40px;
          margin-left: 12px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        .timeline-item {
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -49px;
          top: 6px;
          width: 16px;
          height: 16px;
          background: var(--bg-secondary);
          border: 2px solid var(--accent);
          border-radius: 50%;
          transition: background 0.3s;
        }
        .timeline-item:hover::before {
          background: var(--accent);
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 8px;
        }
        .exp-role {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .exp-date {
          font-size: 14px;
          color: var(--text-tertiary);
          font-weight: 500;
        }
        .exp-company {
          font-size: 16px;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .exp-bullets {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .exp-bullets li {
          font-size: 15px;
          color: var(--text-secondary);
          position: relative;
          padding-left: 20px;
        }
        .exp-bullets li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--text-tertiary);
        }

        /* --- PROJECTS --- */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
        }
        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 48px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.08);
          transform: translateY(-8px);
          border-color: rgba(37, 99, 235, 0.2);
        }
        .project-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .project-stack {
          font-size: 13px;
          color: var(--text-tertiary);
          font-family: monospace;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .project-desc {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }
        .project-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }
        .project-bullets li {
          font-size: 15px;
          color: var(--text-secondary);
          padding-left: 24px;
          position: relative;
        }
        .project-bullets li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }
        
        .btn-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
        }
        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-secondary);
        }
        .btn-primary:hover {
          background: var(--accent);
          transform: translateY(-2px);
        }
        .btn-outline {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border);
        }
        .btn-outline:hover {
          border-color: var(--text-primary);
        }

        /* --- SKILLS --- */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .skill-pill {
          padding: 10px 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          transition: all 0.3s;
        }
        .skill-pill:hover {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
          transform: translateY(-2px);
        }

        /* --- EDUCATION --- */
        .edu-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .edu-school {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .edu-degree {
          font-size: 16px;
          color: var(--text-secondary);
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 80px 24px;
          font-size: 14px;
          color: var(--text-tertiary);
          border-top: 1px solid var(--border);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3.5rem; }
          .hero-subtitle { font-size: 1.5rem; }
          .timeline { padding-left: 24px; }
          .timeline-item::before { left: -33px; }
          .project-card { padding: 24px; }
          .edu-card { padding: 24px; flex-direction: column; align-items: flex-start; }
          .edu-card > div:last-child { text-align: left; }
        }
      `}} />

      {/* LOADING SCREEN */}
      <div className={`loader-wrapper ${loading ? "" : "hidden"}`}>
        <div className="loader-text">
          <span className="loader-text-inner">Aryan Rajesh</span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="nav-brand">Aryan Rajesh</a>
        <div className="nav-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
        </div>
      </nav>

      <div className="main-content">
        
        {/* HERO */}
        <section className="hero">
          <Reveal>
            <h1 className="hero-title">Aryan Rajesh</h1>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="hero-subtitle">Software & AI Engineering</h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-links">
              <a href="https://github.com/aryan-rajesh7" target="_blank" rel="noopener noreferrer" className="hero-link">GitHub</a>
              <a href="https://linkedin.com/in/aryan-rajesh7" target="_blank" rel="noopener noreferrer" className="hero-link">LinkedIn</a>
              <a href="mailto:aryan.raj@hotmail.com" className="hero-link">Email</a>
            </div>
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <Reveal>
            <div className="section-header">Experience</div>
          </Reveal>
          
          <div className="timeline">
            {[
              {
                role: "AI Engineer Intern",
                company: "Flowers Foods | Thomasville, GA (Remote)",
                date: "June 2026 - Present",
                bullets: [
                  "Build and maintain evaluation scenarios for AI agents powered by LLMs, testing multi-turn reasoning, intent recognition, and response quality across realistic conversational flows and integrated systems",
                  "Validate end-to-end AI workflows by assessing LLM outputs, API responses, context retention, and system reliability under varied prompts, helping improve overall agent performance through structured testing and feedback loops",
                  "Design test cases to evaluate LLM behavior and API interactions, including edge cases, hallucination detection, tool/API calling accuracy, and response consistency across different inputs"
                ]
              },
              {
                role: "Machine Learning Research Assistant",
                company: "University of California, Irvine | Irvine, CA",
                date: "May 2026 - Present",
                bullets: [
                  "Conduct research on a MiniAn-based machine learning pipeline for 1-photon mouse neuron imaging, supporting the development of a computer vision algorithm for publication",
                  "Develop and evaluate denoising models within the MiniAn pipeline to improve image quality in noisy neuronal imaging datasets for neuron detection",
                  "Design benchmarking workflows to compare preprocessing and denoising methods across varying noise conditions and evaluate model performance"
                ]
              },
              {
                role: "AI/ML Engineer Intern",
                company: "LangPal | Seattle, WA (Remote)",
                date: "Apr. 2026 - June 2026",
                bullets: [
                  "Developed end-to-end machine learning and NLP systems for a language-learning platform, collaborating closely with founders to ship core product features that improved user engagement",
                  "Built conversational AI, speech-recognition, NLP, and computer-vision capabilities enabling personalized learning experiences that increased user retention",
                  "Owned the full ML lifecycle including data pipelines, model training, evaluation, and production deployment, reducing inference latency and streamlining production workflows"
                ]
              },
              {
                role: "AI Agents Fellow",
                company: "MergeWorks | Dallas, TX (Remote)",
                date: "Feb. 2026 - May 2026",
                bullets: [
                  "Designed real-time Instagram DM automation using webhooks and n8n workflows to capture, process, and route incoming client inquiries into a centralized decision engine, reducing manual workload by ~60%",
                  "Developed custom API integrations within n8n to securely transform unstructured message data and trigger automated workflows across connected services",
                  "Implemented RAG (Retrieval-Augmented Generation) pipelines to retrieve relevant business knowledge and client context, enabling accurate, context-aware automated responses"
                ]
              },
              {
                role: "Software Application Development Summer Intern",
                company: "Bluemind Solutions | Fremont, CA (Remote)",
                date: "June 2024 - August 2024",
                bullets: [
                  "Developed a Generative AI chatbot using Microsoft Copilot Studio to deliver accurate, detailed responses to inquiries",
                  "Improved response accuracy and domain relevance by ~30% by using public company datasets to improve query resolution",
                  "Designed and implemented a proprietary dataset to optimize the knowledge base for high-precision information retrieval"
                ]
              }
            ].map((exp, idx) => (
              <Reveal key={idx} delay={idx * 100} className="timeline-item">
                <div className="exp-header">
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-date">{exp.date}</div>
                </div>
                <div className="exp-company">{exp.company}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <Reveal>
            <div className="section-header">Projects</div>
          </Reveal>
          
          <div className="projects-grid">
            {/* AI Traffic Optimizer */}
            <Reveal delay={100}>
              <div className="project-card">
                <h3 className="project-title">AI Traffic Optimizer</h3>
                <div className="project-stack">Python, Typescript, C++, PyTorch, XGBoost, HTML, CSS, scikit-learn, NumPy, pandas, Gemini 2.0 Flash, LangChain, RAG, Docker</div>
                
                <ul className="project-bullets">
                  <li>Engineered a real-time traffic monitoring full-stack application, integrating the TomTom Flow API via WebSockets to visualize live congestion across US cities on custom MapLibre GL maps</li>
                  <li>Architected a stateless RAG-style pipeline ingesting live sensor data to generate real-time traffic signal timing recommendations using Gemini 2.0 Flash with precise green/yellow/red phases</li>
                  <li>Optimized congestion scoring algorithms using C++ and pybind11 to reduce computation time by 10%; deployed PyTorch LSTM/XGBoost models and containerized the backend with Docker</li>
                </ul>
                
                <div className="btn-group">
                  <a href={TRAFFIC_DEMO_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live App</a>
                  <a href={TRAFFIC_GITHUB_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={HF_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Hugging Face Backend</a>
                  <a href={ML_REPO_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">ML Training Repo</a>
                </div>
              </div>
            </Reveal>

            {/* Nexus + Lex3D */}
            <Reveal delay={200}>
              <div className="project-card">
                <h3 className="project-title">Nexus + Lex3D Framework</h3>
                <div className="project-stack">Python, PyTorch (MPS), Diffusers, OpenCV, HuggingFace, Trimesh</div>
                
                <ul className="project-bullets">
                  <li>An offline, cross-modal generative framework engineered for local execution on consumer hardware, utilizing PyTorch's Metal Performance Shaders (MPS) backend for Apple Silicon acceleration.</li>
                  <li>Nexus chains multiple diffusion models (SD v1.5 to SVD) for automated text-to-video multimedia generation.</li>
                  <li>Lex3D synthesizes printable 3D topologies directly from semantic prompts via Neural Radiance Fields (OpenAI Shap-E) and exports standardized STL geometry.</li>
                </ul>
                
                <div className="btn-group">
                  <a href={NEXUS_GITHUB_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="section">
          <Reveal>
            <div className="section-header">Technical Skills</div>
          </Reveal>
          <Reveal delay={100}>
            <div className="skills-container">
              {['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'XGBoost', 'LangChain', 'RAG', 'PostgreSQL', 'REST APIs', 'Power Platform', 'Docker', 'Node.js', 'Copilot Studio', 'Kubernetes', 'AWS', 'Claude', 'Codex', 'Azure'].map((skill, i) => (
                <div key={i} className="skill-pill">{skill}</div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section" style={{ paddingBottom: '80px' }}>
          <Reveal>
            <div className="section-header">Education</div>
          </Reveal>
          <Reveal delay={100}>
            <div className="edu-card">
              <div>
                <div className="edu-school">University of California, Irvine</div>
                <div className="edu-degree">Bachelor of Science in Computer Science (AI Specialization)</div>
                <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--text-secondary)' }}>Class Standing: Senior</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Irvine, CA</div>
                <div style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginTop: '4px' }}>Expected Dec. 2027</div>
              </div>
            </div>
          </Reveal>
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
