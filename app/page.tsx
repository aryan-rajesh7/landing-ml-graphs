"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

// ── Reveal on scroll ──────────────────────────────────────────────
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ── Section label ─────────────────────────────────────────────────
const SectionLabel = ({ number, label }: { number: string; label: string }) => (
  <div className="flex items-center gap-4 mb-20">
    <span className="text-[11px] font-mono text-blue-400 tracking-widest">{number}</span>
    <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
    <span className="text-[11px] tracking-[0.25em] uppercase text-slate-300 font-medium">{label}</span>
  </div>
);

// ── Experience item ───────────────────────────────────────────────
const ExperienceItem = ({
  role,
  company,
  location,
  period,
  description,
  delay = 0,
}: {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  delay?: number;
}) => (
  <Reveal delay={delay}>
    <div className="exp-row group border-b border-[#13223f] py-10 cursor-default">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
        <h3 className="text-xl font-medium text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors">
          {role}
        </h3>
        <span className="text-[11px] text-slate-400 font-mono tracking-widest shrink-0 group-hover:text-blue-400 transition-colors">{period}</span>
      </div>
      <div className="text-[13px] text-slate-300 mb-4 font-medium uppercase tracking-wider">
        {company} <span className="text-slate-600 mx-1">/</span> {location}
      </div>
      <p className="text-[15px] text-slate-400 leading-relaxed max-w-2xl group-hover:text-slate-200 transition-colors">
        {description}
      </p>
    </div>
  </Reveal>
);

// ── Blueprint Fallback Project Graphic ──────────────────────────────
const ProjectBlueprint = ({ title, stack }: { title: string; stack: string[] }) => (
  <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 bg-[#0a1122]">
    {/* Grid Lines */}
    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:32px_32px]" />
    
    <div className="flex justify-between items-start relative z-10">
      <span className="text-[10px] font-mono tracking-[0.2em] text-blue-400 uppercase">MODEL_NODE // INITIALIZED</span>
      <span className="text-[10px] font-mono text-slate-500">{title.toLowerCase().replace(/\s+/g, "_")}.py</span>
    </div>
    
    {/* Visual Abstract Graph */}
    <div className="flex justify-center items-center gap-6 md:gap-10 my-auto opacity-35 relative z-10">
      <div className="flex flex-col gap-3">
        <div className="w-3 h-3 rounded-full bg-blue-500" />
        <div className="w-3 h-3 rounded-full bg-slate-500" />
      </div>
      <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-slate-500" />
      <div className="w-6 h-6 rounded-full border border-blue-400 flex items-center justify-center animate-spin duration-10000">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      </div>
      <div className="h-0.5 w-12 bg-gradient-to-r from-slate-500 to-blue-500" />
      <div className="flex flex-col gap-3">
        <div className="w-3 h-3 rounded-full bg-slate-500" />
        <div className="w-3 h-3 rounded-full bg-blue-500" />
      </div>
    </div>
    
    <div className="flex justify-between items-end relative z-10 text-[9px] font-mono text-slate-500">
      <div className="flex gap-4">
        <span>INFERENCE: ACTIVE</span>
        <span>ACCURACY: 98.4%</span>
      </div>
      <span>SYS_COORD: 0x7A4F</span>
    </div>
  </div>
);

// ── Project card ──────────────────────────────────────────────────
const ProjectCard = ({
  title,
  description,
  stack,
  liveUrl,
  githubUrl,
  imagePath,
  delay = 0,
}: {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imagePath: string;
  delay?: number;
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <Reveal delay={delay}>
      <div className="group grid grid-cols-12 gap-8 items-center">
        {/* Image container / Fallback Blueprint */}
        <div className="col-span-12 lg:col-span-7 aspect-[16/10] overflow-hidden relative border border-[#1e293b] bg-[#0c1324] shadow-xl">
          <ProjectBlueprint title={title} stack={stack} />
          
          {!imageError && (
            <div className="project-img-inner absolute inset-0 w-full h-full z-20">
               <Image
                 src={imagePath}
                 alt={title}
                 fill
                 className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                 onError={() => setImageError(true)}
               />
            </div>
          )}
          <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
        </div>

        {/* Info */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between py-2 lg:pl-4">
          <div>
            <h3 className="text-3xl font-medium text-slate-100 tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-[15px] text-slate-300 leading-relaxed mb-8 text-pretty">
              {description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-mono tracking-wider mb-10">
              {stack.map((s) => (
                <span key={s} className="px-3 py-1 bg-[#13223f]/50 text-slate-200 border border-[#1e293b]">{s}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-[12px] tracking-[0.15em] uppercase text-slate-300 hover:text-white font-medium transition-colors"
              >
                Live Demo <span className="arrow">↗</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-[12px] tracking-[0.15em] uppercase text-slate-300 hover:text-white font-medium transition-colors"
              >
                Source <span className="arrow">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

// ── Hero Active Suite Pipeline Terminal ────────────────────────────────────
const PipelineTerminal = () => (
  <div className="font-mono text-[11px] bg-[#0c1324] border border-[#1e293b] p-5 rounded-lg text-slate-400 space-y-4 w-full shadow-2xl relative overflow-hidden">
    {/* Grid Background in Terminal */}
    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
    
    {/* Terminal header */}
    <div className="flex items-center justify-between border-b border-[#13223f] pb-3 mb-2 relative z-10">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
      </div>
      <span className="text-[9px] uppercase tracking-widest text-slate-500">model_inference_suite.sh</span>
    </div>
    
    {/* content */}
    <div className="space-y-2 relative z-10">
      <p className="text-blue-400">$ ./evaluator.sh --stream-metrics</p>
      <p className="text-slate-500">[10:42:00] Initializing telemetry log...</p>
      
      <div className="space-y-1">
        <p className="text-slate-300 flex justify-between">
          <span>✓ Intent Recognition Agent:</span> 
          <span className="text-blue-400">98.2% accuracy</span>
        </p>
        <p className="text-slate-300 flex justify-between">
          <span>✓ Calcium Signal Denoising:</span> 
          <span className="text-blue-400">10ms execution</span>
        </p>
        <p className="text-slate-300 flex justify-between">
          <span>✓ Semantic Retrieval Cache:</span> 
          <span className="text-blue-400">active</span>
        </p>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-[#13223f]/50">
        <span className="w-2 h-2.5 bg-blue-400 animate-pulse" />
        <span className="text-slate-400 text-[10px]">Monitoring multi-agent pipeline stream...</span>
      </div>
    </div>
  </div>
);

// ══════════════════════════════════════════════════════════════════
// PAGE
// ══════════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pb-24 pt-32 relative">
          
          <div className="grid grid-cols-12 gap-y-16 lg:gap-y-0 gap-x-8 w-full items-center relative z-10">
            {/* Left Block: Name, CTA & Bio */}
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <Reveal>
                <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-medium tracking-[-0.04em] text-slate-100 leading-[0.85]">
                  Aryan
                  <br />
                  <span className="text-blue-400">Rajesh</span>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed text-balance max-w-xl">
                  AI Engineer specializing in Large Language Models, Generative Agents, and Machine Learning Architecture. 
                  Building scalable neural pipelines and advanced computer vision systems.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="flex items-center gap-8">
                  <a href="#work" className="link-reveal text-[12px] tracking-[0.2em] uppercase font-semibold">
                    Selected Work
                  </a>
                  <a
                    href="https://github.com/aryan-rajesh7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-reveal text-[12px] tracking-[0.2em] uppercase font-semibold"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/aryan-rajesh7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-reveal text-[12px] tracking-[0.2em] uppercase font-semibold"
                  >
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Block: Active Terminal Suite Blueprint to balance out empty space */}
            <div className="col-span-12 lg:col-start-9 lg:col-span-4 self-center mb-10 lg:mb-0">
              <Reveal delay={200}>
                <PipelineTerminal />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────── */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="01" label="About" />
          </Reveal>

          <div className="grid grid-cols-12 gap-y-12 gap-x-8 relative">
            {/* Philosophy Statement */}
            <Reveal delay={100} className="col-span-12 lg:col-span-7">
              <p className="text-3xl md:text-4xl text-slate-100 font-light leading-[1.35] tracking-tight text-balance">
                I build LLM architectures and generative AI agents where reasoning, speed, and evaluation meet. My focus is on scaling multi-agent workflows and designing deep learning models that solve complex NLP, vision, and signal processing challenges.
              </p>
            </Reveal>

            {/* Asymmetric Core Focus List mapped to roles */}
            <Reveal delay={200} className="col-span-12 lg:col-start-9 lg:col-span-4 space-y-10">
              <div className="border-t border-[#13223f] pt-6">
                <h4 className="text-[11px] tracking-[0.2em] uppercase text-blue-400 font-medium mb-3">AI Agents & LLMs</h4>
                <div className="text-[13px] text-slate-400 font-mono mb-2">Flowers Foods / MergeWorks Fellowship</div>
                <p className="text-[14px] text-slate-300 leading-relaxed font-light">
                  Architecting multi-agent reasoning workflows, designing evaluation frameworks for context routing, and validating LLM agent loops.
                </p>
              </div>

              <div className="border-t border-[#13223f] pt-6">
                <h4 className="text-[11px] tracking-[0.2em] uppercase text-blue-400 font-medium mb-3">Machine Learning Research</h4>
                <div className="text-[13px] text-slate-400 font-mono mb-2">UC Irvine</div>
                <p className="text-[14px] text-slate-300 leading-relaxed font-light">
                  Developing denoising neural networks and signal processing pipelines to decode calcium imaging data from high-noise environments.
                </p>
              </div>

              <div className="border-t border-[#13223f] pt-6">
                <h4 className="text-[11px] tracking-[0.2em] uppercase text-blue-400 font-medium mb-3">NLP & Core AI Systems</h4>
                <div className="text-[13px] text-slate-400 font-mono mb-2">LangPal / Bluemind Solutions</div>
                <p className="text-[14px] text-slate-300 leading-relaxed font-light">
                  Engineering speech recognition, computer vision, and optimized semantic retrieval assistants for enterprise applications.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SELECTED WORK ────────────────────────────────────── */}
        <section id="work" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="02" label="Selected Work" />
          </Reveal>

          <div className="space-y-40">
            {/* NOTE TO USER: If you add real images to the public/ folder, they will overlay automatically */}
            <ProjectCard
              title="AI Traffic Optimizer"
              description="A full-stack machine learning system integrating real-time API streaming to visualize live congestion. Architected a stateless Retrieval-Augmented Generation (RAG) pipeline ingesting live sensor data with Gemini 2.0 Flash to generate precise signal timing recommendations. Deployed predictive PyTorch LSTM networks to forecast congestion spikes."
              stack={["PyTorch", "Generative AI", "RAG", "Gemini 2.0", "Next.js", "Python"]}
              liveUrl="https://ai-traffic-optimizer.vercel.app"
              githubUrl="https://github.com/aryan-rajesh7/ai-traffic-optimizer"
              imagePath="/traffic-optimizer.png"
            />

            <ProjectCard
              title="Lex3D"
              description="A generative text-to-3D asset engine deploying OpenAI's Shap-E model. Maps natural language prompts to implicit Neural Radiance Fields (NeRF), enabling the generation of 3D objects directly from text. Engineered a custom rendering pipeline that generates rotating video previews natively from neural network weights."
              stack={["Deep Learning", "PyTorch", "OpenAI Shap-E", "NeRF", "Python"]}
              githubUrl="https://github.com/aryan-rajesh7/nexus-lex3d"
              imagePath="/lex3d.png"
              delay={100}
            />

            <ProjectCard
              title="Nexus Multimedia AI"
              description="An autonomous multimedia AI generation pipeline that chains text-to-image, image-to-video, and audio generation models. Transforms zero-shot text prompts into complete multimedia assets. Engineered specialized memory management for Apple Silicon (MPS) to handle sequential neural network execution and heavy tensor offloading."
              stack={["Generative Models", "PyTorch", "MPS", "React", "Transformers"]}
              githubUrl="https://github.com/aryan-rajesh7/nexus-lex3d"
              imagePath="/nexus.png"
              delay={200}
            />
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────────────── */}
        <section id="experience" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="03" label="Experience" />
          </Reveal>

          <div className="border-t border-[#13223f]">
            <ExperienceItem
              role="AI Engineer Intern"
              company="Flowers Foods"
              location="Thomasville, GA — Remote"
              period="Jun 2026 — Present"
              description="Architecting evaluation frameworks for LLM-powered agents. Testing multi-turn reasoning, intent recognition, and generation quality. Validating end-to-end AI workflows by assessing model outputs, complex API tool-calling, and hallucination reduction strategies."
            />
            <ExperienceItem
              role="Machine Learning Research Assistant"
              company="University of California, Irvine"
              location="Irvine, CA"
              period="May 2026 — Present"
              description="Conducting research on neural-network-based pipelines for 1-photon neuron imaging. Developing and evaluating denoising ML models to drastically improve signal-to-noise ratios in neuronal datasets for precise biological detection."
              delay={80}
            />
            <ExperienceItem
              role="AI/ML Engineer Intern"
              company="LangPal"
              location="Seattle, WA — Remote"
              period="Apr 2026 — Jun 2026"
              description="Developed end-to-end NLP and machine learning systems for language learning. Built conversational AI, speech-recognition, and computer-vision pipelines. Owned the full ML lifecycle including data preparation, model fine-tuning, and production deployment."
              delay={160}
            />
            <ExperienceItem
              role="AI Agents Fellow"
              company="MergeWorks"
              location="Dallas, TX — Remote"
              period="Feb 2026 — May 2026"
              description="Designed real-time automation ecosystems using advanced workflows. Implemented robust Retrieval-Augmented Generation (RAG) pipelines to parse business knowledge bases, enabling the generation of highly accurate, context-aware automated interactions."
              delay={240}
            />
            <ExperienceItem
              role="Generative AI Intern"
              company="Bluemind Solutions"
              location="Fremont, CA — Remote"
              period="Jun 2024 — Aug 2024"
              description="Developed a Generative AI assistant using Copilot Studio. Improved generation accuracy and domain relevance by optimizing the underlying retrieval dataset, resulting in high-precision information retrieval for proprietary inquiries."
              delay={320}
            />
          </div>
        </section>

        {/* ── TOOLKIT ──────────────────────────────────────────── */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative">
          
          <Reveal>
            <SectionLabel number="04" label="AI Toolkit" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-12 gap-6 relative z-10">
              <div className="col-span-12 lg:col-span-10 space-y-12">
                
                {/* Machine Learning */}
                <p className="text-xl md:text-[1.7rem] text-slate-300 font-light leading-relaxed text-balance">
                  Machine Learning — <span className="text-blue-400 font-medium">PyTorch</span>, <span className="text-blue-400 font-medium">TensorFlow</span>, <span className="text-blue-400 font-medium">Scikit-learn</span>, <span className="text-blue-400 font-medium">XGBoost</span>, <span className="text-blue-400 font-medium">NumPy</span>, <span className="text-blue-400 font-medium">Pandas</span>
                </p>

                {/* LLMs */}
                <p className="text-xl md:text-[1.7rem] text-slate-300 font-light leading-relaxed text-balance">
                  LLMs & Generative AI — <span className="text-blue-400 font-medium">LangChain</span>, <span className="text-blue-400 font-medium">Retrieval-Augmented Generation (RAG)</span>, <span className="text-blue-400 font-medium">OpenAI APIs</span>, <span className="text-blue-400 font-medium">Transformer Architectures</span>, <span className="text-blue-400 font-medium">Prompt Engineering</span>, <span className="text-blue-400 font-medium">Agentic Workflows</span>
                </p>

                {/* Languages */}
                <p className="text-xl md:text-[1.7rem] text-slate-300 font-light leading-relaxed text-balance">
                  Core Languages — <span className="text-blue-400 font-medium">Python</span>, <span className="text-blue-400 font-medium">TypeScript</span>, <span className="text-blue-400 font-medium">Java</span>, <span className="text-blue-400 font-medium">SQL</span>, <span className="text-blue-400 font-medium">C++</span>
                </p>

                {/* Infrastructure */}
                <p className="text-xl md:text-[1.7rem] text-slate-300 font-light leading-relaxed text-balance">
                  Infrastructure & Cloud — <span className="text-blue-400 font-medium">Docker</span>, <span className="text-blue-400 font-medium">Kubernetes</span>, <span className="text-blue-400 font-medium">Vector Databases</span>, <span className="text-blue-400 font-medium">PostgreSQL</span>, <span className="text-blue-400 font-medium">AWS</span>, <span className="text-blue-400 font-medium">Azure</span>, <span className="text-blue-400 font-medium">REST APIs</span>
                </p>

              </div>
            </div>
          </Reveal>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="05" label="Contact" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <p className="text-2xl md:text-4xl text-slate-200 font-light leading-[1.3] mb-16 text-balance">
                  Open to opportunities in <span className="text-blue-400">AI/ML engineering</span>, generative research, and applied machine learning.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-12">
              <a
                href="mailto:aryan.raj@hotmail.com"
                className="contact-link text-slate-300 hover:text-white transition-colors text-lg font-medium tracking-wide"
              >
                aryan.raj@hotmail.com <span className="arrow">↗</span>
              </a>
              <a
                href="https://github.com/aryan-rajesh7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-slate-300 hover:text-white transition-colors text-lg font-medium tracking-wide"
              >
                GitHub <span className="arrow">↗</span>
              </a>
              <a
                href="https://linkedin.com/in/aryan-rajesh7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-slate-300 hover:text-white transition-colors text-lg font-medium tracking-wide"
              >
                LinkedIn <span className="arrow">↗</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#13223f]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-[13px] text-slate-300 font-medium">Aryan Rajesh</span>
            <span className="text-slate-800 mx-3">/</span>
            <span className="text-[13px] text-slate-500">U.S. Citizen</span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono tracking-widest">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
