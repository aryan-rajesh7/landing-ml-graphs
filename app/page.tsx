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
    <span className="text-[11px] font-mono text-indigo-400 tracking-widest">{number}</span>
    <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
    <span className="text-[11px] tracking-[0.25em] uppercase text-indigo-300 font-medium">{label}</span>
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
    <div className="exp-row group border-b border-zinc-900/50 py-10 cursor-default">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
        <h3 className="text-xl font-medium text-zinc-200 tracking-tight group-hover:text-indigo-300 transition-colors">
          {role}
        </h3>
        <span className="text-[11px] text-zinc-500 font-mono tracking-widest shrink-0 group-hover:text-purple-400 transition-colors">{period}</span>
      </div>
      <div className="text-[13px] text-zinc-400 mb-4 font-medium uppercase tracking-wider">
        {company} <span className="text-zinc-700 mx-1">/</span> {location}
      </div>
      <p className="text-[15px] text-zinc-500 leading-relaxed max-w-2xl group-hover:text-zinc-300 transition-colors">
        {description}
      </p>
    </div>
  </Reveal>
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
}) => (
  <Reveal delay={delay}>
    <div className="group grid grid-cols-12 gap-8 items-center">
      {/* Image container */}
      <div className="col-span-12 lg:col-span-7 aspect-[16/10] bg-zinc-900/40 rounded-xl overflow-hidden relative glow-card border border-zinc-800/50">
        <div className="project-img-inner absolute inset-0 w-full h-full">
           <Image
             src={imagePath}
             alt={title}
             fill
             className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
           />
        </div>
        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-between py-2 lg:pl-4">
        <div>
          <h3 className="text-3xl font-medium text-zinc-100 tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
            {title}
          </h3>
          <p className="text-[15px] text-zinc-400 leading-relaxed mb-8 text-pretty">
            {description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-mono tracking-wider mb-10">
            {stack.map((s) => (
              <span key={s} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">{s}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-[12px] tracking-[0.15em] uppercase text-zinc-300 hover:text-white font-medium transition-colors"
            >
              Live Demo <span className="arrow">↗</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-[12px] tracking-[0.15em] uppercase text-zinc-300 hover:text-white font-medium transition-colors"
            >
              Source <span className="arrow">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </Reveal>
);

// ══════════════════════════════════════════════════════════════════
// PAGE
// ══════════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="min-h-screen flex items-end px-6 md:px-12 lg:px-24 pb-24 pt-32 relative">
          
          {/* Subtle glowing orb in background */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="grid grid-cols-12 gap-x-6 gap-y-16 w-full items-end relative z-10">
            {/* Name */}
            <Reveal className="col-span-12">
              <h1 className="text-[clamp(3rem,11vw,9rem)] font-medium tracking-[-0.04em] text-zinc-100 leading-[0.85]">
                Aryan
                <br />
                <span className="text-gradient-ai">Rajesh</span>
              </h1>
            </Reveal>

            {/* Intro */}
            <Reveal delay={150} className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-7 lg:col-span-6">
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed text-balance">
                AI Engineer specializing in Large Language Models, Generative Agents, and Machine Learning Architecture. 
                Currently building at the intersection of LLM evaluation pipelines and advanced computer vision research.
              </p>
            </Reveal>

            {/* Links */}
            <Reveal delay={250} className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-7 lg:col-span-6">
              <div className="flex items-center gap-8">
                <a href="#work" className="link-reveal text-[12px] tracking-[0.2em] uppercase font-semibold text-indigo-300">
                  Selected Work
                </a>
                <a
                  href="https://github.com/aryan-rajesh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-reveal text-[12px] tracking-[0.2em] uppercase font-semibold text-indigo-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/aryan-rajesh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-reveal text-[12px] tracking-[0.2em] uppercase font-semibold text-indigo-300"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────── */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="01" label="About" />
          </Reveal>

          <div className="grid grid-cols-12 gap-6 relative">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

            <Reveal delay={100} className="col-span-12 lg:col-span-10">
              <p className="text-2xl md:text-[2.2rem] text-zinc-200 font-light leading-[1.4] tracking-tight text-balance mb-16">
                I am obsessed with the architecture of intelligence. Whether I am orchestrating multi-agent LLM systems, engineering RAG pipelines, or optimizing deep neural networks for real-time computer vision, my focus is always on building models that scale and reason accurately.
              </p>
            </Reveal>

            <Reveal delay={200} className="col-span-12 lg:col-start-5 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[16px] text-zinc-400 leading-relaxed font-light">
                <p>
                  At Flowers Foods, I architect and evaluate complex AI agent pipelines powered by LLMs — strictly testing multi-turn reasoning, intent recognition, and hallucination bounds. I validate end-to-end generative workflows to ensure system reliability and context retention across proprietary enterprise architectures.
                </p>
                <p>
                  At UC Irvine, my research dives deep into applied machine learning. I develop denoising neural networks for a MiniAn-based pipeline, analyzing massive 1-photon neuron imaging datasets to extract high-fidelity biological signals and benchmark advanced preprocessing techniques.
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
            {/* NOTE TO USER: Ensure images are placed in your public/ folder */}
            <ProjectCard
              title="AI Traffic Optimizer"
              description="A full-stack machine learning system integrating real-time API streaming to visualize live congestion. Architected a stateless Retrieval-Augmented Generation (RAG) pipeline ingesting live sensor data with Gemini 2.0 Flash to generate precise signal timing recommendations. Deployed predictive PyTorch LSTM networks to forecast congestion spikes."
              stack={["PyTorch", "Generative AI", "RAG", "Gemini 2.0", "Next.js", "Python"]}
              liveUrl="https://ai-traffic-optimizer.vercel.app"
              githubUrl="https://github.com/aryan-rajesh7/ai-traffic-optimizer"
              imagePath="/traffic-optimizer.png" // User should place this image in public/
            />

            <ProjectCard
              title="Lex3D"
              description="A generative text-to-3D asset engine deploying OpenAI's Shap-E model. Maps natural language prompts to implicit Neural Radiance Fields (NeRF), enabling the generation of 3D objects directly from text. Engineered a custom rendering pipeline that generates rotating video previews natively from neural network weights."
              stack={["Deep Learning", "PyTorch", "OpenAI Shap-E", "NeRF", "Python"]}
              githubUrl="https://github.com/aryan-rajesh7/nexus-lex3d"
              imagePath="/lex3d.png" // User should place this image in public/
              delay={100}
            />

            <ProjectCard
              title="Nexus Multimedia AI"
              description="An autonomous multimedia AI generation pipeline that chains text-to-image, image-to-video, and audio generation models. Transforms zero-shot text prompts into complete multimedia assets. Engineered specialized memory management for Apple Silicon (MPS) to handle sequential neural network execution and heavy tensor offloading."
              stack={["Generative Models", "PyTorch", "MPS", "React", "Transformers"]}
              githubUrl="https://github.com/aryan-rajesh7/nexus-lex3d"
              imagePath="/nexus.png" // User should place this image in public/
              delay={200}
            />
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────────────── */}
        <section id="experience" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="03" label="Experience" />
          </Reveal>

          <div className="border-t border-zinc-900/50">
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
          
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

          <Reveal>
            <SectionLabel number="04" label="AI Toolkit" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-12 gap-6 relative z-10">
              <div className="col-span-12 lg:col-span-10 space-y-12">
                <p className="text-xl md:text-[1.7rem] text-zinc-300 font-light leading-relaxed text-balance">
                  Machine Learning — <span className="text-indigo-300 font-medium">PyTorch</span>, <span className="text-indigo-300 font-medium">TensorFlow</span>, <span className="text-indigo-300 font-medium">Scikit-learn</span>, <span className="text-indigo-300 font-medium">XGBoost</span>, <span className="text-indigo-300 font-medium">NumPy</span>, <span className="text-indigo-300 font-medium">Pandas</span>
                </p>
                <p className="text-xl md:text-[1.7rem] text-zinc-400 font-light leading-relaxed text-balance">
                  LLMs & Generative AI — LangChain, Retrieval-Augmented Generation (RAG), OpenAI APIs, Transformer Architectures, Prompt Engineering, Agentic Workflows
                </p>
                <p className="text-xl md:text-[1.7rem] text-zinc-500 font-light leading-relaxed text-balance">
                  Core Languages — Python, TypeScript, Java, SQL, C++
                </p>
                <p className="text-xl md:text-[1.7rem] text-zinc-600 font-light leading-relaxed text-balance">
                  Infrastructure & Cloud — Docker, Kubernetes, Vector Databases, PostgreSQL, AWS, Azure, REST APIs
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
                <p className="text-2xl md:text-4xl text-zinc-200 font-light leading-[1.3] mb-16 text-balance">
                  Open to opportunities in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI/ML engineering</span>, generative research, and applied machine learning.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-12">
              <a
                href="mailto:aryan.raj@hotmail.com"
                className="contact-link text-indigo-300 hover:text-white transition-colors text-lg font-medium tracking-wide"
              >
                aryan.raj@hotmail.com <span className="arrow">↗</span>
              </a>
              <a
                href="https://github.com/aryan-rajesh7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-indigo-300 hover:text-white transition-colors text-lg font-medium tracking-wide"
              >
                GitHub <span className="arrow">↗</span>
              </a>
              <a
                href="https://linkedin.com/in/aryan-rajesh7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-indigo-300 hover:text-white transition-colors text-lg font-medium tracking-wide"
              >
                LinkedIn <span className="arrow">↗</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-zinc-900/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-[13px] text-zinc-400 font-medium">Aryan Rajesh</span>
            <span className="text-zinc-800 mx-3">/</span>
            <span className="text-[13px] text-zinc-600">U.S. Citizen</span>
          </div>
          <span className="text-[11px] text-zinc-600 font-mono tracking-widest">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
