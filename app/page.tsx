"use client";

import React, { useState, useEffect } from "react";

const TRAFFIC_DEMO_URL = "https://ai-traffic-optimizer.vercel.app/";
const TRAFFIC_GITHUB_URL = "https://github.com/aryan-rajesh7/ai-traffic-optimizer";
const HF_URL = "https://huggingface.co/spaces/aryan-rajesh7/ai-traffic-optimizer";
const NEXUS_GITHUB_URL = "https://github.com/aryan-rajesh7/nexus-lex3d";

const colors = {
  blue: "#3B82F6",
  green: "#10B981",
  orange: "#F97316",
  purple: "#8B5CF6",
  bg: "#FFFFFF",
  cardBg: "#F9FAFB",
  border: "#E5E7EB",
  textMain: "#111827",
  textSec: "#4B5563",
};

type TabId = "traffic" | "nexus";

export default function BeautifulLightPortfolio() {
  const [activeTab, setActiveTab] = useState<TabId>("traffic");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const portfolioTabs: { id: TabId; label: string; color: string }[] = [
    { id: "traffic", label: "AI Traffic Optimizer", color: colors.blue },
    { id: "nexus", label: "Nexus + Lex3D Framework", color: colors.green }
  ];

  const FlowNode = ({ label, type, isLast = false }: { label: string; type: 'input' | 'process' | 'ai' | 'output'; isLast?: boolean }) => {
    const getTypeStyling = () => {
      switch (type) {
        case 'input': return { bg: '#EFF6FF', border: colors.blue, color: colors.blue };
        case 'ai': return { bg: '#F5F3FF', border: colors.purple, color: colors.purple };
        case 'process': return { bg: '#F3F4F6', border: '#6B7280', color: '#374151' };
        case 'output': return { bg: '#FFF7ED', border: colors.orange, color: colors.orange };
      }
    };
    const style = getTypeStyling();
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          padding: '10px 16px',
          borderRadius: '8px',
          background: style.bg,
          border: `1px solid ${style.border}`,
          color: style.color,
          fontSize: '12px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: 'ui-monospace, SFMono-Regular, monospace',
          whiteSpace: 'nowrap'
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
        .fade-in {
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .bento-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid ${colors.border};
          border-radius: 12px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .bento-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.04);
          transform: translateY(-4px);
        }

        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.15);
        }

        .btn-traffic { background: ${colors.blue}; color: white; }
        .btn-nexus { background: ${colors.green}; color: white; }
        .btn-secondary { background: white; color: ${colors.textMain}; border: 1px solid ${colors.border}; }
        .btn-secondary:hover { border-color: ${colors.textMain}; }

        .section-header {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: ${colors.textSec};
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        .stack-list-item {
          padding: 16px 0;
          border-bottom: 1px solid ${colors.border};
        }
        .stack-list-item:last-child { border-bottom: none; }

        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 24px; }
        .grid-plots { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }

        .plot-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          border: 1px solid ${colors.border};
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        .plot-img:hover {
          transform: scale(1.02);
        }

        .synthetic-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 6px;
          color: #1D4ED8;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        @keyframes gridFlow {
          from { background-position: 0 0; }
          to { background-position: 30px 30px; }
        }
      `}} />

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: 'relative', overflow: 'hidden' }}>
        
        {/* --- Background UI Layers --- */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.1, 
          animation: 'gridFlow 60s linear infinite', 
          pointerEvents: 'none',
          zIndex: -2,
        }} />

        <div style={{
          position: "fixed", top: "-10%", right: "-10%", width: "60vw", height: "60vw",
          background: activeTab === "traffic" ? `radial-gradient(circle, ${colors.blue}20 0%, transparent 60%)` : `radial-gradient(circle, ${colors.green}20 0%, transparent 60%)`,
          filter: "blur(80px)", zIndex: -1, transition: "background 0.8s ease", pointerEvents: "none"
        }} />

        <div style={{
          position: "fixed", bottom: "-10%", left: "-10%", width: "50vw", height: "50vw",
          background: `radial-gradient(circle, ${colors.orange}15 0%, transparent 60%)`,
          filter: "blur(80px)", zIndex: -1, pointerEvents: "none"
        }} />

        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, maxWidth: "1300px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 0", borderBottom: `1px solid ${colors.border}`, marginBottom: "56px" }}>
            <div style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.1em", color: colors.textMain }}>ARYAN RAJESH</div>
            <div style={{ fontSize: "12px", color: colors.textSec, fontWeight: "500" }}>Systems & AI Engineering</div>
          </header>

          <section className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ marginBottom: "56px" }}>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 84px)", fontWeight: "900", letterSpacing: "-0.04em", lineHeight: "1.0", margin: "0 0 24px 0", color: colors.textMain }}>
              AI Projects
            </h1>
            <p style={{ fontSize: "20px", color: colors.textSec, maxWidth: "800px", lineHeight: "1.6", margin: "0" }}>
              Building and deploying full-stack AI solutions that integrate data, models, and applications. Focused on creating scalable and efficient AI pipelines for both cloud and local environments.
            </p>
          </section>

          <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: "100ms", marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", background: colors.cardBg, padding: "4px", borderRadius: "8px", border: `1px solid ${colors.border}`, boxShadow: `0 2px 4px rgba(0,0,0,0.03)` }}>
              {portfolioTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id ? tab.color : "transparent",
                    color: activeTab === tab.id ? "#ffffff" : colors.textSec,
                    border: "none", padding: "10px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: "700",
                    cursor: "pointer", transition: "all 0.2s ease"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "traffic" && (
            <div className="fade-in visible" style={{ animation: "fadeIn 0.3s ease forwards" }}>
              
              <div className="bento-card" style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ maxWidth: "900px" }}>
                    <h2 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 16px 0", letterSpacing: "-0.02em", color: colors.blue }}>
                      AI Traffic Optimizer
                    </h2>
                    <p style={{ color: colors.textSec, fontSize: "16px", lineHeight: "1.7", margin: "0 0 16px 0" }}>
                      The AI Traffic Optimizer is a full-stack predictive modeling platform designed to evaluate and optimize street-level vehicle flow. By integrating direct API telemetry with deep learning, it replaces static timing models with dynamically generated signal strategies based on live network conditions.
                    </p>
                    <p style={{ color: colors.textSec, fontSize: "16px", lineHeight: "1.7", margin: "0" }}>
                      The architecture establishes persistent WebSocket connections to the TomTom API to ingest live speed, flow, and incident data for any custom global address. This data is visualized via MapLibre GL JS and processed through a hybrid PyTorch LSTM and XGBoost pipeline to forecast congestion volatility, while Google's Gemini 2.5 Flash operates as a Reasoning Engine to generate human-readable mitigation strategies.
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href={TRAFFIC_DEMO_URL} className="btn btn-traffic" target="_blank" rel="noopener noreferrer">Live App</a>
                    <a href={TRAFFIC_GITHUB_URL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={HF_URL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Hugging Face Backend</a>
                  </div>
                </div>
              </div>

              <div className="bento-card" style={{ marginBottom: "24px", overflowX: 'auto' }}>
                <div className="section-header" style={{ color: colors.blue }}>Live Application Architecture</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0', padding: '16px 0', minWidth: '900px' }}>
                  <FlowNode label="User Input (Next.js)" type="input" />
                  <FlowNode label="Nominatim Geocoding" type="process" />
                  <FlowNode label="TomTom Traffic API" type="input" />
                  <FlowNode label="FastAPI (Python)" type="process" />
                  <FlowNode label="Gemini 2.5 Flash RAG" type="ai" />
                  <FlowNode label="WebSocket Stream" type="process" />
                  <FlowNode label="MapLibre GL Client" type="output" isLast={true} />
                </div>
              </div>

              <div className="bento-card" style={{ marginBottom: "24px" }}>
                <div className="section-header" style={{ color: colors.blue }}>Deep Dive: System Architecture & Data Pipeline</div>
                <div className="grid-2">
                  {[
                    { 
                      aspect: "1. Global Address Resolution (Nominatim API)", 
                      desc: "The system supports queries for any valid address worldwide. To facilitate this, the frontend implements asynchronous forward-geocoding via the Nominatim OpenStreetMap API, translating user-provided natural language addresses into precise floating-point latitude and longitude coordinates required for spatial indexing." 
                    },
                    { 
                      aspect: "2. Dynamic Telemetry Ingestion (TomTom API)", 
                      desc: "Upon resolving the coordinates, the FastAPI backend queries the TomTom Traffic Flow API. It retrieves highly granular JSON payloads containing current street speeds, designated free-flow speeds, road closure booleans, and data confidence metrics for the immediate radius surrounding the target coordinates." 
                    },
                    { 
                      aspect: "3. Persistent WebSocket Orchestration", 
                      desc: "To bypass the HTTP overhead of continuous client-side polling, the backend establishes a duplex WebSocket connection. A background `asyncio` task polls the TomTom endpoints every 30 seconds, instantly pushing localized JSON dataframes over the active socket connection to maintain strict real-time parity." 
                    },
                    { 
                      aspect: "4. Reasoning Engine Integration (Gemini 2.5 Flash RAG)", 
                      desc: "The platform utilizes Google's Gemini 2.5 Flash model to execute Retrieval-Augmented Generation. Live numerical traffic data is serialized and injected into a structured system prompt, forcing the LLM to ground its output in current street reality and generate specific, actionable signal timing modifications." 
                    },
                    { 
                      aspect: "5. Geospatial Vector Rendering (MapLibre GL JS)", 
                      desc: "The React client implements MapLibre GL JS to handle computationally heavy geospatial rendering natively in the browser. It fetches base map tiles from OpenFreeMap and dynamically plots the target coordinates, automatically adjusting camera bearing, pitch, and zoom." 
                    },
                    { 
                      aspect: "6. Stream State Management (React Hooks)", 
                      desc: "To process the incoming 30-second WebSocket payloads without dropping frames or triggering unnecessary DOM re-renders, the frontend isolates stream management using `useRef` and `useEffect` hooks. This allows seamless updates of the MapLibre color-coded traffic vectors." 
                    },
                    { 
                      aspect: "7. Asynchronous API Gateway (FastAPI/Uvicorn)", 
                      desc: "Python's FastAPI serves as the routing layer, selected for its ASGI compatibility and Pydantic validation. Deployed via Uvicorn, the asynchronous event loop prevents I/O blocking when managing concurrent TomTom API network requests, LLM inferences, and active WebSocket clients." 
                    },
                    { 
                      aspect: "8. Request Throttling & Security (SlowAPI/CORS)", 
                      desc: "To mitigate external API exhaustion and protect the TomTom/Gemini API keys, the backend implements SlowAPI for strict IP-based rate limiting (10 requests per minute). It also enforces restrictive CORS middleware, explicitly isolating access to the Vercel frontend and Hugging Face domains." 
                    }
                  ].map(item => (
                    <div key={item.aspect} className="stack-list-item" style={{ borderBottom: 'none', padding: '12px 0' }}>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: colors.textMain, marginBottom: "8px" }}>{item.aspect}</div>
                      <div style={{ fontSize: "14px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bento-card" style={{ marginBottom: "24px" }}>
                <div className="section-header" style={{ color: colors.purple }}>Pipeline Analytics & Visualizations</div>
                
                <div className="synthetic-badge">
                  <svg style={{ width: '16px', height: '16px', marginRight: '6px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Note: Models trained and evaluated on high-fidelity synthetic data generation scripts.
                </div>
                
                <div className="grid-plots" style={{ marginTop: "16px" }}>
                  <div>
                    <img src="/ml/plots/prediction_vs_actual.png" alt="LSTM Prediction vs Actual" className="plot-img" />
                    <p style={{ fontSize: "13px", fontWeight: "600", color: colors.textMain, marginTop: "12px", textAlign: "center" }}>LSTM: Prediction vs Actual Tracking</p>
                  </div>
                  <div>
                    <img src="/ml/plots/xgboost_feature_importance.png" alt="XGBoost Feature Importance" className="plot-img" />
                    <p style={{ fontSize: "13px", fontWeight: "600", color: colors.textMain, marginTop: "12px", textAlign: "center" }}>XGBoost: Decision Tree Feature Weights</p>
                  </div>
                  <div>
                    <img src="/ml/plots/congestion_over_time.png" alt="Congestion Over Time" className="plot-img" />
                    <p style={{ fontSize: "13px", fontWeight: "600", color: colors.textMain, marginTop: "12px", textAlign: "center" }}>Simulated Temporal Congestion Distribution</p>
                  </div>
                </div>
              </div>

              <div className="bento-card" style={{ marginBottom: "64px", background: "linear-gradient(to bottom right, #ffffff, #F5F3FF)" }}>
                <div className="section-header" style={{ color: colors.purple }}>Machine Learning Training Architecture</div>
                <p style={{ color: colors.textSec, fontSize: "15px", lineHeight: "1.6", marginBottom: "32px", maxWidth: "900px" }}>
                  Distinct from the live web application's routing logic, the core predictive capabilities were designed, evaluated, and compiled in an isolated Python pipeline before endpoint deployment. This dual-model architecture processes both sequential time-series events and static tabular features.
                </p>
                
                <div className="grid-2">
                  {[
                    { 
                      aspect: "Time-Series Forecasting (PyTorch LSTM)", 
                      desc: "A Long Short-Term Memory (LSTM) recurrent neural network was built in PyTorch to identify temporal congestion buildup. By passing a rolling window of historical flow metrics (sequence_length=10) through the network's hidden states, it predicts impending traffic volume spikes before they reach critical density." 
                    },
                    { 
                      aspect: "Feature Importance Regressor (XGBoost)", 
                      desc: "To process non-linear tabular data, an XGBoost Regressor was implemented. The gradient-boosted decision trees analyze static and engineered features, including hour of day, day of week, and moving averages, establishing a highly interpretable baseline probability for congestion severity." 
                    },
                    { 
                      aspect: "Synthetic Data Engineering (Pandas/NumPy)", 
                      desc: "To validate the models prior to live deployment, a data generation script was engineered using Pandas and NumPy. It mathematically simulates 1,000+ localized readings, injecting standard deviation noise, base gridlock parameters, and diurnal rush-hour cycles to ensure correct model generalization." 
                    },
                    { 
                      aspect: "Data Normalization & Processing (Scikit-Learn)", 
                      desc: "The pipeline utilizes Scikit-Learn's MinMaxScaler to normalize all traffic inputs to a uniform scale (0 to 1), preventing gradient explosion during PyTorch backpropagation. Strict temporal train/test splitting is enforced to avoid data leakage during evaluation." 
                    }
                  ].map(item => (
                    <div key={item.aspect} className="stack-list-item" style={{ borderBottom: 'none', padding: '8px 0' }}>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: colors.textMain, marginBottom: "8px" }}>{item.aspect}</div>
                      <div style={{ fontSize: "14px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

   
          {activeTab === "nexus" && (
            <div className="fade-in visible" style={{ animation: "fadeIn 0.3s ease forwards" }}>
              
              <div className="bento-card" style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ maxWidth: "850px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <h2 style={{ fontSize: "32px", fontWeight: "800", margin: "0", letterSpacing: "-0.02em", color: colors.green }}>
                        Nexus + Lex3D Suite
                      </h2>
                      <span style={{ fontSize: "11px", fontWeight: "800", padding: "4px 8px", background: "#ECFDF5", border: `1px solid ${colors.green}`, borderRadius: "4px", color: colors.green, textTransform: 'uppercase' }}>LOCAL COMPUTE</span>
                    </div>
                    <p style={{ color: colors.textSec, fontSize: "16px", lineHeight: "1.7", margin: "0" }}>
                      An offline, cross-modal generative framework engineered for local execution on consumer hardware. It utilizes PyTorch's Metal Performance Shaders (MPS) backend for Apple Silicon acceleration. Nexus chains multiple diffusion models for multimedia generation, while Lex3D synthesizes printable 3D topologies directly from semantic prompts via Neural Radiance Fields.
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href={NEXUS_GITHUB_URL} className="btn btn-nexus" target="_blank" rel="noopener noreferrer">View Repository</a>
                  </div>
                </div>
              </div>

              <div className="bento-card" style={{ marginBottom: "24px", overflowX: 'auto' }}>
                <div className="section-header" style={{ color: colors.green, marginBottom: '24px' }}>Inference Pipelines</div>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{fontSize: '13px', fontWeight: '700', color: colors.textMain, marginBottom: '12px'}}>A. Nexus Multimedia Pipeline (Chained Inference)</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0', padding: '10px 0', minWidth: '700px' }}>
                    <FlowNode label="Text Prompt" type="input" />
                    <FlowNode label="CLIP Encoder" type="process" />
                    <FlowNode label="Stable Diffusion v1.5" type="ai" />
                    <FlowNode label="Generated image latent" type="process" />
                    <FlowNode label="Stable Video Diffusion" type="ai" />
                    <FlowNode label="MP4 Output" type="output" isLast={true} />
                  </div>
                </div>
                <div>
                  <div style={{fontSize: '13px', fontWeight: '700', color: colors.textMain, marginBottom: '12px'}}>B. Lex3D 3D Shape Generation (NeRF)</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0', padding: '10px 0', minWidth: '700px' }}>
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
                  <div className="section-header" style={{ color: colors.orange }}>Engineering Specs</div>
                  
                  {[
                    { aspect: "Apple MPS Backend", desc: "Custom PyTorch configuration casting all tensors to the `mps` device, enabling hardware-accelerated matrix multiplication directly on Apple Silicon GPUs." },
                    { aspect: "Memory Management", desc: "Automated VRAM clearing via `gc.collect()` and `torch.mps.empty_cache()` executed between model modality shifts to prevent persistent memory leaks and OOM faults." },
                    { aspect: "Attention Slicing", desc: "Implements `pipe.enable_attention_slicing()` to chunk high-memory attention computation into sequential sub-ops, enabling large model execution on constrained VRAM." },
                    { aspect: "CPU Offloading", desc: "Utilizes `enable_sequential_cpu_offload()` to dynamically shift inactive neural network weights back to system RAM during iterative inference steps." },
                    { aspect: "Zero-API Architecture", desc: "Designed to run 100% offline without reliance on external cloud inference APIs, ensuring absolute data privacy and eliminating recurring costs for heavy multimodal computation." }
                  ].map(item => (
                    <div key={item.aspect} className="stack-list-item">
                      <div style={{ fontSize: "15px", fontWeight: "700", color: colors.textMain, marginBottom: "4px" }}>{item.aspect}</div>
                      <div style={{ fontSize: "14px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="bento-card">
                  <div className="section-header" style={{ color: colors.orange }}>Generative Pipelines</div>
                  
                  {[
                    { aspect: "Nexus: T2I (SD v1.5)", desc: "Stable Diffusion v1.5 pipeline utilizing CLIP text encoding and DPMSolver++ scheduler for accelerated inference, generating high-fidelity baseline 2D tensor arrays." },
                    { aspect: "Nexus: Cross-Modal Conditioning", desc: "Feeds the SDv1.5 latent output array directly into Stable Video Diffusion (img2vid-xt) conditioning, maintaining temporal coherence across 7 generated video frames." },
                    { aspect: "Nexus: Text to Audio", desc: "AudioLDM (s-full-v2) architecture synthesizing continuous 16kHz waveforms mapped to the semantic original prompt input." },
                    { aspect: "Lex3D: NeRF Fields", desc: "Utilizes OpenAI Shap-E to generate Implicit Neural Radiance Fields via diffusion, processing text prompts into 3D latent space over 32 inference steps." },
                    { aspect: "Lex3D: STL Geometry Export", desc: "Converts volumetric NeRF field data into continuous mesh boundary vertices/faces using Trimesh, exporting standardized STL topologies for CAD compatibility." }
                  ].map(item => (
                    <div key={item.aspect} className="stack-list-item">
                      <div style={{ fontSize: "15px", fontWeight: "700", color: colors.textMain, marginBottom: "4px" }}>{item.aspect}</div>
                      <div style={{ fontSize: "14px", color: colors.textSec, lineHeight: "1.6" }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <footer style={{ padding: "40px 0", borderTop: `1px solid ${colors.border}`, marginTop: 'auto', display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", color: colors.textSec, fontSize: "13px" }}>
            <div style={{fontWeight: '700', color: colors.textMain}}>Aryan Rajesh</div>
            <div>© {new Date().getFullYear()} — Source code licensed under respective repository terms.</div>
          </footer>

        </div>
      </div>
    </>
  );
}