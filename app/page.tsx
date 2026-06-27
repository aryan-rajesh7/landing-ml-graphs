"use client";

import React, { useState } from "react";

const TRAFFIC_DEMO_URL = "https://ai-traffic-optimizer.vercel.app/";
const TRAFFIC_GITHUB_URL = "https://github.com/aryan-rajesh7/ai-traffic-optimizer";
const HF_URL = "https://huggingface.co/spaces/aryan-rajesh7/ai-traffic-optimizer";
const NEXUS_GITHUB_URL = "https://github.com/aryan-rajesh7/nexus-lex3d";
const ML_REPO_URL = "https://github.com/aryan-rajesh7/landing-ml-graphs";

type ProjectId = "traffic" | "nexus" | null;

const SplitView = ({ tag, title }: { tag: string; title: string }) => (
  <div className="split-view">
    <div className="split-tag">{tag}</div>
    <div className="split-view-bottom">
      <h2 className="split-title">{title}</h2>
      <div className="arrow-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </div>
);

const InactiveView = ({ title }: { title: string }) => (
  <div className="inactive-view">
    <div className="vertical-title">{title}</div>
  </div>
);

export default function ProfessionalPortfolio() {
  const [activeProject, setActiveProject] = useState<ProjectId>(null);

  return (
    <div className="layout">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; }

        body {
          background: #000;
          color: #fafafa;
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .layout {
          display: flex;
          height: 100vh;
          width: 100vw;
          padding: 16px;
          gap: 16px;
        }

        .sidebar {
          width: 300px;
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 12px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .profile-name {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.03em;
          margin: 0 0 4px 0;
        }

        .profile-role {
          font-size: 14px;
          color: #a1a1aa;
          font-weight: 400;
          margin: 0;
        }

        .profile-desc {
          font-size: 13px;
          color: #71717a;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .main-stage {
          flex-grow: 1;
          display: flex;
          gap: 16px;
          overflow: hidden;
        }

        .project-panel {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 12px;
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        .project-panel.split {
          flex: 1;
          cursor: pointer;
        }
        .project-panel.split:hover {
          background: #0c0c0e;
          border-color: #3f3f46;
        }

        .project-panel.active {
          flex: 0 0 calc(95% - 16px);
          cursor: default;
          border-color: #3f3f46;
        }

        .project-panel.inactive {
          flex: 0 0 5%;
          cursor: pointer;
          background: #050505;
        }
        .project-panel.inactive:hover {
          background: #0c0c0e;
          border-color: #3f3f46;
        }

        /* Internal views */
        .view-container {
          position: absolute;
          inset: 0;
          transition: opacity 0.4s ease;
          opacity: 0;
          pointer-events: none;
        }
        .view-container.visible {
          opacity: 1;
          pointer-events: auto;
          transition-delay: 0.2s;
        }

        /* Split View Styles */
        .split-view {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 48px;
        }
        .split-view-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .split-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .split-title {
          font-size: 40px;
          font-weight: 500;
          letter-spacing: -0.04em;
          margin: 0;
          max-width: 350px;
          line-height: 1.1;
        }
        .arrow-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #27272a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fafafa;
          transition: all 0.3s ease;
        }
        .project-panel.split:hover .arrow-icon {
          transform: translateX(8px);
          background: #fafafa;
          color: #000;
          border-color: #fafafa;
        }

        /* Inactive View Styles */
        .inactive-view {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          padding: 32px 0;
        }
        .vertical-title {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          white-space: nowrap;
          font-size: 13px;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #52525b;
          transition: color 0.3s;
        }
        .project-panel.inactive:hover .vertical-title {
          color: #fafafa;
        }

        /* Active View Styles */
        .active-view {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .active-header {
          padding: 32px 48px;
          border-bottom: 1px solid #1f1f1f;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-shrink: 0;
          background: #09090b;
          z-index: 10;
        }
        .active-title {
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -0.03em;
          margin: 0 0 16px 0;
        }
        .active-desc {
          font-size: 14px;
          color: #a1a1aa;
          max-width: 800px;
          line-height: 1.6;
          margin: 0;
        }
        .close-btn {
          background: transparent;
          border: 1px solid #27272a;
          color: #a1a1aa;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .close-btn:hover {
          background: #27272a;
          color: #fafafa;
        }
        .active-content {
          flex-grow: 1;
          overflow-y: auto;
          padding: 48px;
        }
        .active-content::-webkit-scrollbar {
          width: 6px;
        }
        .active-content::-webkit-scrollbar-track {
          background: #09090b; 
        }
        .active-content::-webkit-scrollbar-thumb {
          background: #27272a; 
          border-radius: 3px;
        }
        .active-content::-webkit-scrollbar-thumb:hover {
          background: #3f3f46; 
        }

        /* Technical Table */
        .tech-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 56px;
        }
        .tech-table td {
          padding: 24px 0;
          border-bottom: 1px solid #18181b;
          vertical-align: top;
        }
        .tech-table td.key {
          width: 250px;
          color: #71717a;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding-right: 24px;
        }
        .tech-table td.value {
          color: #d4d4d8;
          font-size: 14px;
          line-height: 1.7;
        }
        .tech-table tr:last-child td {
          border-bottom: none;
        }

        /* Pipeline */
        .pipeline {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          padding: 16px 0;
          margin-bottom: 56px;
          scrollbar-width: none;
        }
        .pipeline::-webkit-scrollbar { display: none; }
        .pipeline-node {
          background: #000;
          border: 1px solid #1f1f1f;
          padding: 12px 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #fafafa;
          white-space: nowrap;
          border-radius: 6px;
        }
        .pipeline-arrow {
          color: #3f3f46;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
          display: block;
        }

        .action-links {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #fafafa;
          color: #000;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 6px;
          transition: opacity 0.2s;
        }
        .action-link:hover {
          opacity: 0.8;
        }
        .action-link.secondary {
          background: transparent;
          color: #fafafa;
          border: 1px solid #27272a;
        }
        .action-link.secondary:hover {
          background: #18181b;
          opacity: 1;
        }

        .plot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        .plot-box {
          border: 1px solid #1f1f1f;
          background: #050505;
          padding: 24px;
          border-radius: 8px;
        }
        .plot-img {
          width: 100%;
          display: block;
          border: 1px solid #1f1f1f;
          border-radius: 4px;
        }
        .plot-caption {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #71717a;
          margin-top: 16px;
          text-align: center;
        }
      `}} />

      <div className="sidebar">
        <div>
          <h1 className="profile-name">ARYAN RAJESH</h1>
          <h2 className="profile-role">Software & AI Engineering</h2>
        </div>
        
        <div style={{ marginTop: 'auto' }}>
          <p className="profile-desc">
            Building and deploying full-stack AI solutions that integrate data, models, and applications.
            Focused on creating scalable pipelines for cloud and local environments.
          </p>
          <div style={{ fontSize: '10px', color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()}
          </div>
        </div>
      </div>

      <div className="main-stage">
        
        {/* ======================= */}
        {/* AI TRAFFIC OPTIMIZER */}
        {/* ======================= */}
        <div 
          className={`project-panel ${activeProject === null ? 'split' : activeProject === 'traffic' ? 'active' : 'inactive'}`}
          onClick={() => { if (activeProject !== 'traffic') setActiveProject('traffic') }}
        >
          {/* Split View */}
          <div className={`view-container ${activeProject === null ? 'visible' : ''}`}>
            <SplitView tag="01 / Cloud Telemetry" title="AI Traffic Optimizer" />
          </div>
          
          {/* Inactive View */}
          <div className={`view-container ${activeProject === 'nexus' ? 'visible' : ''}`}>
            <InactiveView title="AI Traffic Optimizer" />
          </div>

          {/* Active View */}
          <div className={`view-container ${activeProject === 'traffic' ? 'visible' : ''}`}>
            <div className="active-view">
              <div className="active-header">
                <div>
                  <h2 className="active-title">AI Traffic Optimizer</h2>
                  <p className="active-desc">
                    A full-stack predictive modeling platform replacing static timing models with dynamically generated signal strategies based on live network conditions via TomTom API and Gemma 3.0 RAG.
                  </p>
                  <div className="action-links">
                    <a href={TRAFFIC_DEMO_URL} className="action-link" target="_blank" rel="noopener noreferrer">Live Deployment</a>
                    <a href={TRAFFIC_GITHUB_URL} className="action-link secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
                    <a href={HF_URL} className="action-link secondary" target="_blank" rel="noopener noreferrer">Model Backend</a>
                  </div>
                </div>
                <button className="close-btn" onClick={(e) => { e.stopPropagation(); setActiveProject(null); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div className="active-content">
                <span className="section-label">Live App Data Flow</span>
                <div className="pipeline">
                  {['Client (Next.js)', 'Nominatim API', 'TomTom Telemetry', 'FastAPI', 'Gemma 3.0', 'WebSocket', 'MapLibre GL'].map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="pipeline-node">{step}</div>
                      {i < arr.length - 1 && <div className="pipeline-arrow">→</div>}
                    </React.Fragment>
                  ))}
                </div>

                <span className="section-label">Architecture Specs</span>
                <table className="tech-table">
                  <tbody>
                    <tr>
                      <td className="key">01. Address Resolution</td>
                      <td className="value">Asynchronous forward-geocoding via Nominatim API translates natural language addresses into precise floating-point coordinates for spatial indexing.</td>
                    </tr>
                    <tr>
                      <td className="key">02. Dynamic Telemetry</td>
                      <td className="value">Queries the TomTom Traffic Flow API for highly granular JSON payloads containing current street speeds, free-flow speeds, and closures.</td>
                    </tr>
                    <tr>
                      <td className="key">03. Persistent Sockets</td>
                      <td className="value">Bypasses HTTP overhead. An asyncio task polls endpoints every 30s, pushing localized JSON dataframes over active sockets to maintain real-time parity.</td>
                    </tr>
                    <tr>
                      <td className="key">04. Reasoning Engine</td>
                      <td className="value">Google's Gemma 3.0 executes RAG. Live numerical data is injected into a structured prompt, forcing grounded output and specific signal timing mods.</td>
                    </tr>
                  </tbody>
                </table>

                <span className="section-label">Model Analytics (Synthetic Data)</span>
                <div className="plot-grid">
                  <div className="plot-box">
                    <img src="/ml/plots/prediction_vs_actual.png" alt="LSTM Tracking" className="plot-img" />
                    <div className="plot-caption">fig 1. LSTM Tracking</div>
                  </div>
                  <div className="plot-box">
                    <img src="/ml/plots/xgboost_feature_importance.png" alt="XGBoost Weights" className="plot-img" />
                    <div className="plot-caption">fig 2. XGBoost Feature Weights</div>
                  </div>
                  <div className="plot-box">
                    <img src="/ml/plots/congestion_over_time.png" alt="Distribution" className="plot-img" />
                    <div className="plot-caption">fig 3. Congestion Distribution</div>
                  </div>
                </div>
                
                <div style={{ paddingBottom: '24px' }}>
                  <a href={ML_REPO_URL} className="action-link secondary" target="_blank" rel="noopener noreferrer">View ML Source & Training Scripts →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* NEXUS + LEX 3D */}
        {/* ======================= */}
        <div 
          className={`project-panel ${activeProject === null ? 'split' : activeProject === 'nexus' ? 'active' : 'inactive'}`}
          onClick={() => { if (activeProject !== 'nexus') setActiveProject('nexus') }}
        >
          {/* Split View */}
          <div className={`view-container ${activeProject === null ? 'visible' : ''}`}>
            <SplitView tag="02 / Local Compute" title="Nexus + Lex3D Suite" />
          </div>
          
          {/* Inactive View */}
          <div className={`view-container ${activeProject === 'traffic' ? 'visible' : ''}`}>
            <InactiveView title="Nexus + Lex3D Suite" />
          </div>

          {/* Active View */}
          <div className={`view-container ${activeProject === 'nexus' ? 'visible' : ''}`}>
            <div className="active-view">
              <div className="active-header">
                <div>
                  <h2 className="active-title">Nexus + Lex3D Suite</h2>
                  <p className="active-desc">
                    An offline, cross-modal generative framework engineered for local execution on consumer hardware, utilizing PyTorch's Metal Performance Shaders (MPS) for Apple Silicon acceleration.
                  </p>
                  <div className="action-links">
                    <a href={NEXUS_GITHUB_URL} className="action-link" target="_blank" rel="noopener noreferrer">View Repository</a>
                  </div>
                </div>
                <button className="close-btn" onClick={(e) => { e.stopPropagation(); setActiveProject(null); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div className="active-content">
                <span className="section-label">Nexus Chained Inference</span>
                <div className="pipeline">
                  {['Text Prompt', 'CLIP', 'Stable Diffusion v1.5', 'Latent Cache', 'Stable Video Diffusion', 'MP4 Output'].map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="pipeline-node">{step}</div>
                      {i < arr.length - 1 && <div className="pipeline-arrow">→</div>}
                    </React.Fragment>
                  ))}
                </div>

                <span className="section-label">Lex3D Shape Generation</span>
                <div className="pipeline">
                  {['Semantic Prompt', 'CLIP Embed', 'OpenAI Shap-E', 'Implicit NeRF Field', 'Trimesh Export', 'STL Output'].map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="pipeline-node">{step}</div>
                      {i < arr.length - 1 && <div className="pipeline-arrow">→</div>}
                    </React.Fragment>
                  ))}
                </div>

                <span className="section-label">Hardware Operations</span>
                <table className="tech-table">
                  <tbody>
                    <tr>
                      <td className="key">Apple MPS Backend</td>
                      <td className="value">Custom PyTorch configuration casting all tensors to the `mps` device, enabling hardware-accelerated matrix multiplication directly on Apple Silicon GPUs.</td>
                    </tr>
                    <tr>
                      <td className="key">Memory Management</td>
                      <td className="value">Automated VRAM clearing via `gc.collect()` and `torch.mps.empty_cache()` executed between model modality shifts to prevent persistent memory leaks and OOM faults.</td>
                    </tr>
                    <tr>
                      <td className="key">Attention Slicing</td>
                      <td className="value">Implements `pipe.enable_attention_slicing()` to chunk high-memory attention computation into sequential sub-ops, enabling large model execution on constrained VRAM.</td>
                    </tr>
                    <tr>
                      <td className="key">CPU Offloading</td>
                      <td className="value">Utilizes `enable_sequential_cpu_offload()` to dynamically shift inactive neural network weights back to system RAM during iterative inference steps.</td>
                    </tr>
                    <tr>
                      <td className="key">Zero-API Architecture</td>
                      <td className="value">Designed to run 100% offline without reliance on external cloud inference APIs, ensuring absolute data privacy and eliminating recurring costs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
