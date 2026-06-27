"use client";

import React, { useEffect, useRef } from "react";

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

export default function Projects() {
  return (
    <div className="main-content">
      <Reveal>
        <h1 className="page-title">Projects</h1>
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
              <li>Designed a zero-API architecture leveraging sequential CPU offloading and attention slicing to prevent VRAM memory leaks.</li>
            </ul>
            
            <div className="btn-group">
              <a href={NEXUS_GITHUB_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          </div>
        </Reveal>
      </div>

      <footer>
        <Reveal>
          © {new Date().getFullYear()} Aryan Rajesh. U.S Citizen.
        </Reveal>
      </footer>
    </div>
  );
}
