"use client";

import React, { useState, useEffect } from "react";

const TRAFFIC_DEMO_URL = "https://ai-traffic-optimizer.vercel.app/";
const TRAFFIC_GITHUB_URL = "https://github.com/aryan-rajesh7/ai-traffic-optimizer";
const HF_URL = "https://huggingface.co/spaces/aryan-rajesh7/ai-traffic-optimizer";
const NEXUS_GITHUB_URL = "https://github.com/aryan-rajesh7/nexus-lex3d";
const ML_REPO_URL = "https://github.com/aryan-rajesh7/landing-ml-graphs";

const colors = {
  blue: "#2563eb",
  green: "#059669",
  orange: "#ea580c",
  purple: "#7c3aed",
  pink: "#db2777",
  teal: "#0d9488",
  rose: "#e11d48",
  bg: "#ffffff",
  cardBg: "rgba(255, 255, 255, 0.6)",
  border: "rgba(0, 0, 0, 0.06)",
  textMain: "#0f172a",
  textSec: "#475569",
};

type TabId = "traffic" | "nexus" | "p1" | "p2" | "p3" | "p4";

export default function BeautifulLightPortfolio() {
  const [activeTab, setActiveTab] = useState<TabId>("traffic");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioTabs: { id: TabId; label: string; color: string }[] = [
    { id: "traffic", label: "AI Traffic Optimizer", color: colors.blue },
    { id: "nexus", label: "Nexus + Lex3D", color: colors.green },
    { id: "p1", label: "Project Alpha", color: colors.purple },
    { id: "p2", label: "Project Beta", color: colors.pink },
    { id: "p3", label: "Project Gamma", color: colors.teal },
    { id: "p4", label: "Project Delta", color: colors.rose },
  ];

  const activeColor = portfolioTabs.find(t => t.id === activeTab)?.color || colors.blue;

  const FlowNode = ({ label, type, isLast = false }: { label: string; type: 'input' | 'process' | 'ai' | 'output'; isLast?: boolean }) => {
    const getTypeStyling = () => {
      switch (type) {
        case 'input': return { bg: '#EFF6FF', border: colors.blue, color: colors.blue };
        case 'ai': return { bg: '#F5F3FF', border: colors.purple, color: colors.purple };
        case 'process': return { bg: '#F8FAFC', border: '#94A3B8', color: '#475569' };
        case 'output': return { bg: '#FFF7ED', border: colors.orange, color: colors.orange };
      }
    };
    const style = getTypeStyling();
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="flow-node" style={{
          background: style.bg,
          border: `1px solid ${style.border}`,
          color: style.color,
        }}>
          {label}
        </div>
        {!isLast && (
          <div style={{ width: '24px', height: '2px', background: colors.border, position: 'relative' }}>
            <div style={{
              position: 'absolute', right: '-2px', top: '-4px',
              width: '0', height: '0',
              borderTop: '5px solid transparent',
              borderBottom: '5px solid transparent',
              borderLeft: `6px solid ${colors.border}`
            }} />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --active-color: ${activeColor};
        }
        body {
          background-color: #fafafa;
          color: ${colors.textMain};
        }
        ::selection {
          background: var(--active-color);
          color: white;
        }
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: revealAnim 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes revealAnim {
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }

        .bento-card {
          background: ${colors.cardBg};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid ${colors.border};
          border-radius: 20px;
          padding: 40px;
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 4px 24px -8px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.4);
        }
        
        .bento-card:hover {
          transform: translateY(-4px) scale(1.005);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255,255,255,0.8);
          border-color: rgba(0,0,0,0.1);
        }

        .btn {
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          border: 1px solid transparent;
          cursor: pointer;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .btn-primary { background: var(--active-color); color: white; }
        .btn-primary:hover { filter: brightness(1.1); }
        
        .btn-secondary { background: white; color: ${colors.textMain}; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 2px 8px -2px rgba(0,0,0,0.05); }
        .btn-secondary:hover { border-color: rgba(0,0,0,0.2); background: #f8fafc; }

        .section-header {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--active-color);
          margin-bottom: 24px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-header::after {
          content: '';
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, var(--active-color) 0%, transparent 100%);
          opacity: 0.2;
        }
        
        .stack-list-item {
          padding: 20px 0;
          border-bottom: 1px solid ${colors.border};
          transition: transform 0.3s ease;
        }
        .stack-list-item:last-child { border-bottom: none; }
        .stack-list-item:hover { transform: translateX(4px); }

        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 32px; }
        .grid-plots { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }

        .plot-img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .plot-img:hover {
          transform: scale(1.03) translateY(-4px);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
        }

        .flow-node {
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'SF Mono', ui-monospace, monospace;
          white-space: nowrap;
          box-shadow: 0 2px 8px -2px rgba(0,0,0,0.05);
        }

        .tab-button {
          position: relative;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          color: ${colors.textSec};
          z-index: 1;
        }
        .tab-button:hover {
          color: ${colors.textMain};
        }
        .tab-button.active {
          color: white;
        }
        
        .hero-title {
          font-size: clamp(60px, 10vw, 120px);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.9;
          margin: 0;
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0px 4px 20px rgba(0,0,0,0.05);
        }

        .hero-subtitle {
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: ${colors.textSec};
          margin-top: 16px;
        }

        .nav-container {
          position: sticky;
          top: 24px;
          z-index: 100;
          display: flex;
          justify-content: center;
          margin-bottom: 64px;
          pointer-events: none;
        }
        
        .nav-bar {
          display: inline-flex;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 8px;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 40px -8px rgba(0,0,0,0.08);
          pointer-events: auto;
          overflow-x: auto;
          max-width: 100%;
          scrollbar-width: none;
        }
        .nav-bar::-webkit-scrollbar { display: none; }

        .placeholder-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 400px;
          border: 2px dashed ${colors.border};
          border-radius: 20px;
          background: rgba(255,255,255,0.3);
          color: ${colors.textSec};
          text-align: center;
          padding: 40px;
          transition: all 0.3s ease;
        }
        .placeholder-card:hover {
          border-color: rgba(0,0,0,0.15);
          background: rgba(255,255,255,0.6);
        }
        
        .glow-bg {
          position: fixed;
          width: 80vw;
          height: 80vw;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          opacity: 0.15;
          pointer-events: none;
          transition: background 1s ease;
        }
      `}} />

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: 'relative', overflow: 'hidden' }}>
        
        {/* Dynamic Glow Background */}
        <div className="glow-bg" style={{
          top: '-20%', left: '-10%',
          background: `radial-gradient(circle, ${activeColor} 0%, transparent 70%)`,
        }} />
        <div className="glow-bg" style={{
          bottom: '-20%', right: '-10%',
          background: `radial-gradient(circle, ${colors.orange} 0%, transparent 70%)`,
          opacity: 0.08
        }} />

        {/* Ambient Grid */}
        <div style={{
          position: 'fixed', inset: 0,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          zIndex: -2,
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }} />

        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, maxWidth: "1400px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
          
          {/* Huge Hero Section */}
          <section className={`reveal ${isVisible ? '' : 'hidden'}`} style={{ paddingTop: "12vh", paddingBottom: "10vh" }}>
            <h1 className="hero-title">ARYAN<br/>RAJESH</h1>
            <h2 className="hero-subtitle">
              Software & <span style={{ color: activeColor, fontWeight: 500, transition: 'color 0.5s ease' }}>AI Engineering</span>
            </h2>
            <p style={{ fontSize: "20px", color: colors.textSec, maxWidth: "600px", lineHeight: "1.6", marginTop: "32px" }}>
              Building and deploying full-stack AI solutions that integrate data, models, and applications.
            </p>
          </section>

          {/* Sticky Navigation */}
          <div className="nav-container reveal delay-1">
            <div className="nav-bar">
              {portfolioTabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    color: activeTab === tab.id ? '#fff' : '',
                  }}
                >
                  {activeTab === tab.id && (
                    <div style={{
                      position: 'absolute', inset: 0, borderRadius: '12px',
                      background: tab.color, zIndex: -1,
                      boxShadow: `0 4px 12px ${tab.color}40`
                    }} />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="reveal delay-2" style={{ minHeight: "60vh" }}>
            {/* TRAFFIC OPTIMIZER TAB */}
            {activeTab === "traffic" && (
              <div style={{ animation: "revealAnim 0.6s ease forwards" }}>
                <div className="bento-card" style={{ marginBottom: "32px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ maxWidth: "900px" }}>
                      <h2 style={{ fontSize: "40px", fontWeight: "800", margin: "0 0 16px 0", letterSpacing: "-0.03em", color: colors.blue }}>
                        AI Traffic Optimizer
                      </h2>
                      <p style={{ color: colors.textSec, fontSize: "18px", lineHeight: "1.7", margin: "0 0 16px 0" }}>
                        The AI Traffic Optimizer is a full-stack predictive modeling platform designed to evaluate and optimize street-level vehicle flow. By integrating direct API telemetry with deep learning, it replaces static timing models with dynamically generated signal strategies based on live network conditions.
                      </p>
                      <p style={{ color: colors.textSec, fontSize: "18px", lineHeight: "1.7", margin: "0" }}>
                        The architecture establishes persistent WebSocket connections to the TomTom API to ingest live speed, flow, and incident data for any custom global address. This data is visualized via MapLibre GL JS and processed through a hybrid PyTorch LSTM and XGBoost pipeline to forecast congestion volatility, while Google's Gemma 3 operates as a Reasoning Engine to generate human-readable mitigation strategies.
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
                      <a href={TRAFFIC_DEMO_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live App</a>
                      <a href={TRAFFIC_GITHUB_URL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <a href={HF_URL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Hugging Face Backend</a>
                    </div>
                  </div>
                </div>

                <div className="bento-card" style={{ marginBottom: "32px", overflowX: 'auto' }}>
                  <div className="section-header">Live Application Architecture</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0', padding: '16px 0', minWidth: '900px' }}>
                    <FlowNode label="User Input (Next.js)" type="input" />
                    <FlowNode label="Nominatim Geocoding" type="process" />
                    <FlowNode label="TomTom Traffic API" type="input" />
                    <FlowNode label="FastAPI (Python)" type="process" />
                    <FlowNode label="Gemma 3.0 RAG" type="ai" />
                    <FlowNode label="WebSocket Stream" type="process" />
                    <FlowNode label="MapLibre GL Client" type="output" isLast={true} />
                  </div>
                </div>

                <div className="bento-card" style={{ marginBottom: "32px" }}>
                  <div className="section-header">Deep Dive: System Architecture & Data Pipeline</div>
                  <div className="grid-2">
                    {[
                      { aspect: "1. Global Address Resolution (Nominatim)", desc: "Asynchronous forward-geocoding translates user-provided natural language addresses into precise floating-point coordinates required for spatial indexing." },
                      { aspect: "2. Dynamic Telemetry Ingestion (TomTom)", desc: "FastAPI backend queries the TomTom Traffic Flow API for highly granular JSON payloads containing current street speeds, free-flow speeds, and closures." },
                      { aspect: "3. Persistent WebSocket Orchestration", desc: "Bypasses HTTP overhead. An asyncio task polls endpoints every 30s, pushing localized JSON dataframes over active sockets to maintain real-time parity." },
                      { aspect: "4. Reasoning Engine (Gemma 3.0 RAG)", desc: "Google's Gemma 3.0 executes RAG. Live numerical data is injected into a structured prompt, forcing grounded output and specific signal timing mods." },
                      { aspect: "5. Geospatial Vector Rendering (MapLibre)", desc: "React client implements MapLibre GL JS to handle heavy geospatial rendering natively in the browser, dynamically plotting target coordinates." },
                      { aspect: "6. Stream State Management (React Hooks)", desc: "Isolates stream management using useRef and useEffect hooks to process 30s WebSocket payloads without dropping frames or triggering full re-renders." },
                      { aspect: "7. Asynchronous API Gateway (FastAPI)", desc: "Python's FastAPI serves as the routing layer. The asynchronous event loop prevents I/O blocking when managing API requests and socket clients." },
                      { aspect: "8. Security (CORS)", desc: "Restrictive CORS middleware protects API keys and backend from malicious websites, isolating access to Vercel and Hugging Face domains." }
                    ].map(item => (
                      <div key={item.aspect} className="stack-list-item">
                        <div style={{ fontSize: "16px", fontWeight: "700", color: colors.textMain, marginBottom: "8px" }}>{item.aspect}</div>
                        <div style={{ fontSize: "15px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bento-card" style={{ marginBottom: "32px", background: "linear-gradient(to bottom right, #ffffff, #f8fafc)" }}>
                  <div className="section-header">Machine Learning Training Architecture</div>
                  <p style={{ color: colors.textSec, fontSize: "16px", lineHeight: "1.7", marginBottom: "40px", maxWidth: "900px" }}>
                    Distinct from the live web application's routing logic, the core predictive capabilities were designed, evaluated, and compiled in an isolated Python pipeline before endpoint deployment. This dual-model architecture processes both sequential time-series events and static tabular features.
                  </p>
                  
                  <div className="grid-2">
                    {[
                      { aspect: "Time-Series Forecasting (PyTorch LSTM)", desc: "An LSTM network identifies temporal congestion buildup. By passing a rolling window of historical flow metrics, it predicts impending traffic volume spikes." },
                      { aspect: "Feature Importance Regressor (XGBoost)", desc: "Gradient-boosted decision trees analyze static and engineered features, establishing a highly interpretable baseline probability for congestion severity." },
                      { aspect: "Synthetic Data Engineering (Pandas/NumPy)", desc: "A data generation script simulates 1,000+ localized readings, injecting standard deviation noise and rush-hour cycles to ensure correct model generalization." },
                      { aspect: "Data Normalization & Processing (Scikit-Learn)", desc: "Scikit-Learn's MinMaxScaler normalizes all traffic inputs to prevent gradient explosion. Strict temporal train/test splitting avoids data leakage." }
                    ].map(item => (
                      <div key={item.aspect} className="stack-list-item">
                        <div style={{ fontSize: "16px", fontWeight: "700", color: colors.textMain, marginBottom: "8px" }}>{item.aspect}</div>
                        <div style={{ fontSize: "15px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bento-card" style={{ marginBottom: "64px" }}>
                  <div className="section-header">Pipeline Analytics & Visualizations</div>
                  
                  <div style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "8px", color: "#1D4ED8", fontSize: "13px", fontWeight: "600", marginBottom: "32px" }}>
                    <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Models trained and evaluated on high-fidelity synthetic data generation scripts.
                  </div>
                  
                  <div className="grid-plots" style={{ marginBottom: "40px" }}>
                    <div>
                      <img src="/ml/plots/prediction_vs_actual.png" alt="LSTM Prediction vs Actual" className="plot-img" />
                      <p style={{ fontSize: "14px", fontWeight: "600", color: colors.textMain, marginTop: "16px", textAlign: "center" }}>LSTM: Prediction vs Actual Tracking</p>
                    </div>
                    <div>
                      <img src="/ml/plots/xgboost_feature_importance.png" alt="XGBoost Feature Importance" className="plot-img" />
                      <p style={{ fontSize: "14px", fontWeight: "600", color: colors.textMain, marginTop: "16px", textAlign: "center" }}>XGBoost: Decision Tree Feature Weights</p>
                    </div>
                    <div>
                      <img src="/ml/plots/congestion_over_time.png" alt="Congestion Over Time" className="plot-img" />
                      <p style={{ fontSize: "14px", fontWeight: "600", color: colors.textMain, marginTop: "16px", textAlign: "center" }}>Simulated Temporal Congestion Distribution</p>
                    </div>
                  </div>

                  <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: "32px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: colors.textMain, marginBottom: "24px" }}>Understanding the Visualizations</h3>
                    
                    <div className="grid-2">
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: "700", color: colors.textMain, marginBottom: "8px" }}>1. LSTM Tracking</div>
                        <p style={{ color: colors.textSec, fontSize: "15px", lineHeight: "1.7" }}>
                          Compares the neural network's forecasted congestion scores against ground-truth data. Tight alignment indicates the LSTM model successfully learned temporal patterns.
                        </p>
                      </div>
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: "700", color: colors.textMain, marginBottom: "8px" }}>2. XGBoost Feature Weights</div>
                        <p style={{ color: colors.textSec, fontSize: "15px", lineHeight: "1.7" }}>
                          Shows which data the decision tree relied on most. <strong>lag_1</strong> and <strong>lag_2</strong> are crucial, representing traffic scores 2 and 4 minutes prior.
                        </p>
                      </div>
                      <div style={{ gridColumn: "1 / -1" }}>
                        <div style={{ fontSize: "15px", fontWeight: "700", color: colors.textMain, marginBottom: "8px" }}>3. Temporal Distribution</div>
                        <p style={{ color: colors.textSec, fontSize: "15px", lineHeight: "1.7" }}>
                          Plots the raw synthetic dataset over a simulated 24-hour period, verifying the integrity of the data engineering script and rush-hour peak generation.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "32px", marginTop: "24px", borderTop: `1px dashed ${colors.border}` }}>
                      <a href={ML_REPO_URL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                        View Landing Page & ML Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* NEXUS + LEX3D TAB */}
            {activeTab === "nexus" && (
              <div style={{ animation: "revealAnim 0.6s ease forwards" }}>
                <div className="bento-card" style={{ marginBottom: "32px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ maxWidth: "850px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                        <h2 style={{ fontSize: "40px", fontWeight: "800", margin: "0", letterSpacing: "-0.03em", color: colors.green }}>
                          Nexus + Lex3D Suite
                        </h2>
                        <span style={{ fontSize: "12px", fontWeight: "800", padding: "6px 12px", background: "#ECFDF5", border: `1px solid ${colors.green}`, borderRadius: "8px", color: colors.green, textTransform: 'uppercase', letterSpacing: '0.05em' }}>LOCAL COMPUTE</span>
                      </div>
                      <p style={{ color: colors.textSec, fontSize: "18px", lineHeight: "1.7", margin: "0" }}>
                        An offline, cross-modal generative framework engineered for local execution on consumer hardware. It utilizes PyTorch's Metal Performance Shaders (MPS) backend for Apple Silicon acceleration. Nexus chains multiple diffusion models for multimedia generation, while Lex3D synthesizes printable 3D topologies directly from semantic prompts via Neural Radiance Fields.
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px" }}>
                      <a href={NEXUS_GITHUB_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Repository</a>
                    </div>
                  </div>
                </div>

                <div className="bento-card" style={{ marginBottom: "32px", overflowX: 'auto' }}>
                  <div className="section-header" style={{ marginBottom: '32px' }}>Inference Pipelines</div>
                  
                  <div style={{ marginBottom: '40px' }}>
                    <div style={{fontSize: '15px', fontWeight: '700', color: colors.textMain, marginBottom: '16px'}}>A. Nexus Multimedia Pipeline (Chained Inference)</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', padding: '10px 0', minWidth: '800px' }}>
                      <FlowNode label="Text Prompt" type="input" />
                      <FlowNode label="CLIP Encoder" type="process" />
                      <FlowNode label="Stable Diffusion v1.5" type="ai" />
                      <FlowNode label="Generated image latent" type="process" />
                      <FlowNode label="Stable Video Diffusion" type="ai" />
                      <FlowNode label="MP4 Output" type="output" isLast={true} />
                    </div>
                  </div>
                  <div>
                    <div style={{fontSize: '15px', fontWeight: '700', color: colors.textMain, marginBottom: '16px'}}>B. Lex3D 3D Shape Generation (NeRF)</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', padding: '10px 0', minWidth: '800px' }}>
                      <FlowNode label="Descriptive Text Prompt" type="input" />
                      <FlowNode label="CLIP Text Embed" type="process" />
                      <FlowNode label="OpenAI Shap-E Diffusion" type="ai" />
                      <FlowNode label="Implicit NeRF Field" type="process" />
                      <FlowNode label="Trimesh Mesh Export" type="process" />
                      <FlowNode label="STL File Output" type="output" isLast={true} />
                    </div>
                  </div>
                </div>

                <div className="grid-2" style={{ marginBottom: "64px" }}>
                  <div className="bento-card">
                    <div className="section-header">Engineering Specs</div>
                    {[
                      { aspect: "Apple MPS Backend", desc: "Custom PyTorch configuration casting all tensors to the `mps` device, enabling hardware-accelerated matrix multiplication directly on Apple Silicon GPUs." },
                      { aspect: "Memory Management", desc: "Automated VRAM clearing via `gc.collect()` and `torch.mps.empty_cache()` executed between model modality shifts to prevent persistent memory leaks and OOM faults." },
                      { aspect: "Attention Slicing", desc: "Implements `pipe.enable_attention_slicing()` to chunk high-memory attention computation into sequential sub-ops, enabling large model execution on constrained VRAM." },
                      { aspect: "CPU Offloading", desc: "Utilizes `enable_sequential_cpu_offload()` to dynamically shift inactive neural network weights back to system RAM during iterative inference steps." },
                      { aspect: "Zero-API Architecture", desc: "Designed to run 100% offline without reliance on external cloud inference APIs, ensuring absolute data privacy and eliminating recurring costs." }
                    ].map(item => (
                      <div key={item.aspect} className="stack-list-item">
                        <div style={{ fontSize: "16px", fontWeight: "700", color: colors.textMain, marginBottom: "6px" }}>{item.aspect}</div>
                        <div style={{ fontSize: "15px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bento-card">
                    <div className="section-header">Generative Pipelines</div>
                    {[
                      { aspect: "Nexus: T2I (SD v1.5)", desc: "Stable Diffusion v1.5 pipeline utilizing CLIP text encoding and DPMSolver++ scheduler for accelerated inference, generating high-fidelity baseline 2D tensor arrays." },
                      { aspect: "Nexus: Cross-Modal Conditioning", desc: "Feeds the SDv1.5 latent output array directly into Stable Video Diffusion (img2vid-xt) conditioning, maintaining temporal coherence across 7 generated video frames." },
                      { aspect: "Nexus: Text to Audio", desc: "AudioLDM (s-full-v2) architecture synthesizing continuous 16kHz waveforms mapped to the semantic original prompt input." },
                      { aspect: "Lex3D: NeRF Fields", desc: "Utilizes OpenAI Shap-E to generate Implicit Neural Radiance Fields via diffusion, processing text prompts into 3D latent space over 32 inference steps." },
                      { aspect: "Lex3D: STL Geometry Export", desc: "Converts volumetric NeRF field data into continuous mesh boundary vertices/faces using Trimesh, exporting standardized STL topologies for CAD compatibility." }
                    ].map(item => (
                      <div key={item.aspect} className="stack-list-item">
                        <div style={{ fontSize: "16px", fontWeight: "700", color: colors.textMain, marginBottom: "6px" }}>{item.aspect}</div>
                        <div style={{ fontSize: "15px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PLACEHOLDERS */}
            {["p1", "p2", "p3", "p4"].includes(activeTab) && (
              <div style={{ animation: "revealAnim 0.6s ease forwards" }}>
                <div className="placeholder-card">
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${activeColor}40, transparent)`,
                    border: `1px solid ${activeColor}60`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={activeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "24px", fontWeight: "800", color: colors.textMain, marginBottom: "12px", letterSpacing: "-0.02em" }}>
                    {portfolioTabs.find(t => t.id === activeTab)?.label}
                  </h3>
                  <p style={{ fontSize: "16px", color: colors.textSec, maxWidth: "400px", lineHeight: "1.6" }}>
                    Details for this project are currently being documented. Check back soon for the complete architecture, source code, and live demo.
                  </p>
                </div>
              </div>
            )}
          </div>

          <footer style={{ padding: "40px 0", marginTop: 'auto', display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", color: colors.textSec, fontSize: "14px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            <div style={{ fontWeight: '700', color: colors.textMain, display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: activeColor, transition: "background 0.3s ease" }}></div>
              Aryan Rajesh
            </div>
            <div>© {new Date().getFullYear()} — Source code licensed under respective repository terms.</div>
          </footer>

        </div>
      </div>
    </>
  );
}
