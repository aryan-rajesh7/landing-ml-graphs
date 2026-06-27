"use client";

import React, { useEffect, useRef } from "react";

const TRAFFIC_DEMO_URL = "https://ai-traffic-optimizer.vercel.app/";
const TRAFFIC_GITHUB_URL = "https://github.com/aryan-rajesh7/ai-traffic-optimizer";
const HF_URL = "https://huggingface.co/spaces/aryan-rajesh7/ai-traffic-optimizer";
const NEXUS_GITHUB_URL = "https://github.com/aryan-rajesh7/nexus-lex3d";
const ML_REPO_URL = "https://github.com/aryan-rajesh7/landing-ml-graphs";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-wrapper ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default function PremiumPortfolio() {
  return (
    <div className="portfolio-container">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --blue: #2563eb;
          --green: #059669;
        }

        body {
          background-color: #f8fafc;
          color: #0f172a;
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          overflow-x: hidden;
          margin: 0;
        }

        .reveal-wrapper {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-wrapper.revealed {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .ambient-background {
          position: fixed;
          inset: 0;
          z-index: -2;
          overflow: hidden;
          background: #f8fafc;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.6;
          animation: float 20s ease-in-out infinite alternate;
        }
        .blob-1 {
          top: -10%; left: -10%; width: 50vw; height: 50vw;
          background: rgba(37, 99, 235, 0.2);
        }
        .blob-2 {
          bottom: -10%; right: -10%; width: 60vw; height: 60vw;
          background: rgba(5, 150, 105, 0.15);
          animation-delay: -5s;
        }
        .blob-3 {
          top: 40%; left: 40%; width: 40vw; height: 40vw;
          background: rgba(124, 58, 237, 0.15);
          animation-delay: -10s;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 10%) scale(1.1); }
          100% { transform: translate(-5%, -5%) scale(0.9); }
        }

        .grid-overlay {
          position: fixed;
          inset: 0;
          z-index: -1;
          background-image: 
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(0,0,0,0.1);
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 32px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .hero-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 12px #10b981;
        }

        .hero-title {
          font-size: clamp(4rem, 14vw, 10rem);
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -0.05em;
          color: #0f172a;
          margin: 0;
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 400;
          color: #475569;
          margin-top: 32px;
          letter-spacing: -0.02em;
        }
        .hero-subtitle span {
          font-weight: 600;
          color: #2563eb;
        }

        .hero-desc {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: #64748b;
          max-width: 600px;
          margin: 32px auto 0;
          line-height: 1.6;
        }

        .scroll-indicator {
          margin-top: 64px;
          animation: bounce 2s infinite;
          opacity: 0.5;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        .project-section {
          padding: 80px 0 160px;
          position: relative;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 48px;
          padding: clamp(32px, 6vw, 80px);
          box-shadow: 
            0 40px 100px -20px rgba(0,0,0,0.08),
            inset 0 0 0 1px rgba(255,255,255,0.8);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent);
        }

        .project-tag {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 10px 20px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
        }
        .tag-traffic { background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; }
        .tag-nexus { background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; }

        .project-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 32px;
          line-height: 0.95;
        }
        .title-traffic { color: #1e3a8a; }
        .title-nexus { color: #064e3b; }

        .project-desc {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          color: #475569;
          line-height: 1.7;
          max-width: 900px;
          margin-bottom: 48px;
        }

        .action-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }

        .btn {
          padding: 18px 36px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }
        .btn-primary-traffic {
          background: #2563eb;
          color: white;
          box-shadow: 0 10px 24px -8px rgba(37, 99, 235, 0.6);
        }
        .btn-primary-traffic:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.8);
        }
        .btn-primary-nexus {
          background: #059669;
          color: white;
          box-shadow: 0 10px 24px -8px rgba(5, 150, 105, 0.6);
        }
        .btn-primary-nexus:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(5, 150, 105, 0.8);
        }
        .btn-outline {
          background: rgba(255,255,255,0.7);
          color: #0f172a;
          border: 1px solid rgba(0,0,0,0.1);
        }
        .btn-outline:hover {
          background: white;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.08);
          border-color: rgba(0,0,0,0.15);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .bento-item {
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(0,0,0,0.06);
          padding: 40px;
          border-radius: 32px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-item:hover {
          background: rgba(255,255,255,0.95);
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.08);
          border-color: rgba(0,0,0,0.12);
        }

        .bento-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }
        .icon-blue { background: #eff6ff; color: #2563eb; }
        .icon-green { background: #ecfdf5; color: #059669; }
        .icon-purple { background: #f5f3ff; color: #7c3aed; }
        .icon-orange { background: #fff7ed; color: #ea580c; }

        .bento-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .bento-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
        }

        .architecture-flow {
          display: flex;
          align-items: center;
          overflow-x: auto;
          padding: 32px 0;
          gap: 16px;
          scrollbar-width: none;
          margin-bottom: 48px;
        }
        .architecture-flow::-webkit-scrollbar { display: none; }

        .flow-node {
          padding: 16px 28px;
          background: white;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .flow-arrow {
          color: #94a3b8;
          flex-shrink: 0;
        }

        .section-heading {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 32px;
          letter-spacing: -0.03em;
        }

        .plot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }

        .plot-img-container {
          background: white;
          padding: 24px;
          border-radius: 32px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
          transition: transform 0.4s ease;
        }
        .plot-img-container:hover {
          transform: translateY(-8px);
        }
        .plot-img {
          width: 100%;
          border-radius: 12px;
          display: block;
        }
        .plot-caption {
          font-size: 14px;
          font-weight: 700;
          color: #64748b;
          text-align: center;
          margin-top: 20px;
        }

        footer {
          text-align: center;
          padding: 80px 24px;
          color: #64748b;
          font-size: 15px;
          font-weight: 500;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
      `}} />

      <div className="ambient-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="grid-overlay"></div>

      <div className="content-wrapper">
        <section className="hero">
          <Reveal delay={100}>
            <div className="hero-badge">Available for new opportunities</div>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="hero-title">Aryan Rajesh</h1>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="hero-subtitle">Software & <span>AI Engineering</span></h2>
          </Reveal>
          <Reveal delay={600}>
            <p className="hero-desc">Building and deploying full-stack AI solutions that integrate data, models, and applications. Focused on creating scalable pipelines for cloud and local environments.</p>
          </Reveal>
          <Reveal delay={800}>
            <div className="scroll-indicator">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="36" rx="10"></rect>
                <line x1="12" y1="10" x2="12" y2="16"></line>
              </svg>
            </div>
          </Reveal>
        </section>

        {/* AI TRAFFIC OPTIMIZER */}
        <section className="project-section">
          <Reveal>
            <div className="project-card">
              <div className="project-tag tag-traffic">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Cloud AI & Telemetry
              </div>
              
              <h2 className="project-title title-traffic">AI Traffic Optimizer</h2>
              
              <p className="project-desc">
                A full-stack predictive modeling platform designed to evaluate and optimize street-level vehicle flow. By integrating direct API telemetry with deep learning, it replaces static timing models with dynamically generated signal strategies based on live network conditions.
              </p>

              <div className="action-row">
                <a href={TRAFFIC_DEMO_URL} className="btn btn-primary-traffic" target="_blank" rel="noopener noreferrer">
                  View Live App
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href={TRAFFIC_GITHUB_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={HF_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Hugging Face Backend</a>
              </div>

              <h3 className="section-heading">Live Application Flow</h3>
              <div className="architecture-flow">
                {['User Input (Next.js)', 'Nominatim Geocoding', 'TomTom Traffic API', 'FastAPI (Python)', 'Gemma 3.0 RAG', 'WebSocket Stream', 'MapLibre GL Client'].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="flow-node">{step}</div>
                    {idx < arr.length - 1 && (
                      <div className="flow-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <h3 className="section-heading">System Architecture & Pipeline</h3>
              <div className="bento-grid">
                <div className="bento-item">
                  <div className="bento-icon icon-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <div className="bento-title">Global Address Resolution</div>
                  <div className="bento-desc">Asynchronous forward-geocoding via Nominatim API translates natural language addresses into precise floating-point coordinates for spatial indexing.</div>
                </div>
                
                <div className="bento-item">
                  <div className="bento-icon icon-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div className="bento-title">Dynamic Telemetry</div>
                  <div className="bento-desc">Queries the TomTom Traffic Flow API for highly granular JSON payloads containing current street speeds, free-flow speeds, and closures.</div>
                </div>

                <div className="bento-item">
                  <div className="bento-icon icon-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  </div>
                  <div className="bento-title">Reasoning Engine (RAG)</div>
                  <div className="bento-desc">Google's Gemma 3.0 executes RAG. Live numerical data is injected into a structured prompt, forcing grounded output and specific signal timing mods.</div>
                </div>

                <div className="bento-item">
                  <div className="bento-icon icon-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div className="bento-title">FastAPI & WebSockets</div>
                  <div className="bento-desc">Asynchronous API Gateway preventing I/O blocking. Polling endpoints every 30s and pushing localized JSON dataframes over active sockets for real-time parity.</div>
                </div>
              </div>

              <div style={{ padding: "40px", background: "rgba(255,255,255,0.4)", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 className="section-heading" style={{ marginBottom: "16px" }}>Machine Learning Analytics</h3>
                <p className="bento-desc" style={{ maxWidth: "800px" }}>
                  Distinct from the live web application's routing logic, the core predictive capabilities were designed, evaluated, and compiled in an isolated Python pipeline before endpoint deployment.
                </p>
                <div className="plot-grid">
                  <div className="plot-img-container">
                    <img src="/ml/plots/prediction_vs_actual.png" alt="LSTM Prediction" className="plot-img" />
                    <div className="plot-caption">LSTM Tracking accuracy over sequential steps</div>
                  </div>
                  <div className="plot-img-container">
                    <img src="/ml/plots/xgboost_feature_importance.png" alt="XGBoost Features" className="plot-img" />
                    <div className="plot-caption">XGBoost Decision Tree Feature Weights</div>
                  </div>
                  <div className="plot-img-container">
                    <img src="/ml/plots/congestion_over_time.png" alt="Temporal Congestion" className="plot-img" />
                    <div className="plot-caption">Simulated 24-hour Congestion Distribution</div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </section>


        {/* NEXUS + LEX 3D */}
        <section className="project-section">
          <Reveal>
            <div className="project-card">
              <div className="project-tag tag-nexus">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Local Compute Framework
              </div>
              
              <h2 className="project-title title-nexus">Nexus + Lex3D Suite</h2>
              
              <p className="project-desc">
                An offline, cross-modal generative framework engineered for local execution on consumer hardware. It utilizes PyTorch's Metal Performance Shaders (MPS) backend for Apple Silicon acceleration, chaining multiple diffusion models for multimedia generation.
              </p>

              <div className="action-row">
                <a href={NEXUS_GITHUB_URL} className="btn btn-primary-nexus" target="_blank" rel="noopener noreferrer">
                  View Repository
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </a>
              </div>

              <h3 className="section-heading">Nexus Multimedia Pipeline</h3>
              <div className="architecture-flow">
                {['Text Prompt', 'CLIP Encoder', 'Stable Diffusion v1.5', 'Generated Image Latent', 'Stable Video Diffusion', 'MP4 Output'].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="flow-node">{step}</div>
                    {idx < arr.length - 1 && (
                      <div className="flow-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <h3 className="section-heading">Lex3D Shape Generation (NeRF)</h3>
              <div className="architecture-flow" style={{ marginBottom: "64px" }}>
                {['Descriptive Prompt', 'CLIP Text Embed', 'OpenAI Shap-E', 'Implicit NeRF Field', 'Trimesh Export', 'STL File Output'].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="flow-node">{step}</div>
                    {idx < arr.length - 1 && (
                      <div className="flow-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <h3 className="section-heading">Engineering Specs</h3>
              <div className="bento-grid">
                <div className="bento-item">
                  <div className="bento-icon icon-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <div className="bento-title">Apple MPS Backend</div>
                  <div className="bento-desc">Custom PyTorch configuration casting all tensors to the `mps` device, enabling hardware-accelerated matrix multiplication directly on Apple Silicon GPUs.</div>
                </div>
                
                <div className="bento-item">
                  <div className="bento-icon icon-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  </div>
                  <div className="bento-title">Zero-API Architecture</div>
                  <div className="bento-desc">Designed to run 100% offline without reliance on external cloud inference APIs, ensuring absolute data privacy and eliminating recurring costs.</div>
                </div>

                <div className="bento-item">
                  <div className="bento-icon icon-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  </div>
                  <div className="bento-title">Attention Slicing & CPU Offloading</div>
                  <div className="bento-desc">Chunks high-memory attention computation into sequential sub-ops and dynamically shifts inactive weights to system RAM to prevent OOM faults.</div>
                </div>
              </div>

            </div>
          </Reveal>
        </section>

      </div>

      <footer>
        <div>Aryan Rajesh © {new Date().getFullYear()}</div>
        <div style={{ marginTop: "8px", opacity: 0.7 }}>Source code licensed under respective repository terms.</div>
      </footer>
    </div>
  );
}
