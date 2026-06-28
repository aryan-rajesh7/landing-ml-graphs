"use client";

import React, { useEffect, useRef } from "react";

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
    <span className="text-[11px] font-mono text-zinc-600 tracking-widest">{number}</span>
    <div className="h-px flex-1 bg-zinc-900" />
    <span className="text-[11px] tracking-[0.25em] uppercase text-zinc-600 font-medium">{label}</span>
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
    <div className="exp-row group border-b border-zinc-900 py-10 cursor-default">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
        <h3 className="text-xl font-medium text-zinc-200 tracking-tight group-hover:text-white transition-colors">
          {role}
        </h3>
        <span className="text-[11px] text-zinc-600 font-mono tracking-widest shrink-0">{period}</span>
      </div>
      <div className="text-[13px] text-zinc-500 mb-4">
        {company} <span className="text-zinc-700 mx-1">/</span> {location}
      </div>
      <p className="text-[15px] text-zinc-500 leading-relaxed max-w-2xl group-hover:text-zinc-400 transition-colors">
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
  delay = 0,
}: {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}) => (
  <Reveal delay={delay}>
    <div className="group grid grid-cols-12 gap-6 items-start">
      {/* Image placeholder */}
      <div className="col-span-12 lg:col-span-7 aspect-[16/10] bg-zinc-900/60 overflow-hidden relative">
        <div className="project-img-inner absolute inset-0 bg-zinc-800/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-zinc-700 font-mono text-[10px] uppercase tracking-[0.3em]">
            {title}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-between py-2">
        <div>
          <h3 className="text-2xl font-medium text-zinc-100 tracking-tight mb-4 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-[15px] text-zinc-500 leading-relaxed mb-6 text-pretty">
            {description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-zinc-600 tracking-wider mb-8">
            {stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-[12px] tracking-[0.15em] uppercase text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Live Demo <span className="arrow">↗</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-[12px] tracking-[0.15em] uppercase text-zinc-400 hover:text-zinc-100 transition-colors"
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
        <section className="min-h-screen flex items-end px-6 md:px-12 lg:px-24 pb-24 pt-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-16 w-full items-end">
            {/* Name — dominates */}
            <Reveal className="col-span-12">
              <h1 className="text-[clamp(3rem,11vw,9rem)] font-medium tracking-[-0.04em] text-zinc-100 leading-[0.85]">
                Aryan
                <br />
                Rajesh
              </h1>
            </Reveal>

            {/* Intro — right-aligned, offset */}
            <Reveal delay={150} className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-7 lg:col-span-6">
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed text-balance">
                Software engineer specializing in AI systems, real-time data pipelines, and machine learning infrastructure. 
                Currently building at the intersection of LLM evaluation and computer vision research.
              </p>
            </Reveal>

            {/* Links */}
            <Reveal delay={250} className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-7 lg:col-span-6">
              <div className="flex items-center gap-8">
                <a href="#work" className="link-reveal text-[12px] tracking-[0.2em] uppercase font-medium">
                  Selected Work
                </a>
                <a
                  href="https://github.com/aryan-rajesh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-reveal text-[12px] tracking-[0.2em] uppercase font-medium"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/aryan-rajesh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-reveal text-[12px] tracking-[0.2em] uppercase font-medium"
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

          <div className="grid grid-cols-12 gap-6">
            <Reveal delay={100} className="col-span-12 lg:col-span-8">
              <p className="text-2xl md:text-[2rem] text-zinc-300 font-light leading-[1.5] tracking-tight text-balance mb-16">
                I care about how systems work under pressure — the architecture beneath the interface, 
                the algorithm behind the recommendation, the milliseconds that separate a good experience from a broken one.
              </p>
            </Reveal>

            <Reveal delay={200} className="col-span-12 lg:col-start-5 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[15px] text-zinc-500 leading-relaxed">
                <p>
                  At Flowers Foods, I build and evaluate AI agent pipelines powered by LLMs — testing multi-turn reasoning, 
                  intent recognition, and system reliability across realistic conversational flows. I validate end-to-end workflows 
                  by assessing API responses, context retention, and hallucination detection.
                </p>
                <p>
                  At UC Irvine, I conduct research on a MiniAn-based machine learning pipeline for 1-photon neuron imaging, 
                  developing denoising models and benchmarking workflows to compare preprocessing methods across varying noise conditions.
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

          <div className="space-y-32">
            <ProjectCard
              title="AI Traffic Optimizer"
              description="Full-stack real-time traffic monitoring system integrating TomTom Flow API via WebSockets 
              to visualize live congestion on custom MapLibre GL maps across 5 major US cities. Architected a stateless 
              RAG-style pipeline ingesting live sensor data with Gemini 2.0 Flash to generate precise signal timing 
              recommendations. Optimized congestion scoring in C++ with pybind11, reducing computation time by 10%."
              stack={["Python", "TypeScript", "C++", "PyTorch", "Next.js 14", "FastAPI", "Docker", "RAG"]}
              liveUrl="https://ai-traffic-optimizer.vercel.app"
              githubUrl="https://github.com/aryan-rajesh7/ai-traffic-optimizer"
            />

            <ProjectCard
              title="Lex3D"
              description="Text-to-3D asset generator deploying OpenAI's Shap-E model to map natural language prompts 
              to implicit Neural Radiance Fields, enabling generation of 3D models directly from text. Engineered a custom 
              rendering engine that generates rotating video previews directly from neural network data. Designed a Python 
              backend with seamless CPU, GPU, and Apple Silicon switching."
              stack={["PyTorch", "OpenAI Shap-E", "NeRF", "Python", "React"]}
              githubUrl="https://github.com/aryan-rajesh7/nexus-lex3d"
              delay={100}
            />

            <ProjectCard
              title="Nexus"
              description="Multimedia AI generation system that chains text-to-image, image-to-video, and audio generation 
              models, automatically transforming text prompts into complete multimedia assets. Built a React frontend visualizing 
              real-time generation progress with video and audio streaming. Engineered a custom memory management engine for 
              Apple Silicon (MPS) with sequential CPU offloading and aggressive garbage collection."
              stack={["PyTorch", "React", "Apple Silicon MPS", "FFmpeg"]}
              githubUrl="https://github.com/aryan-rajesh7/nexus-lex3d"
              delay={200}
            />
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────────────── */}
        <section id="experience" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="03" label="Experience" />
          </Reveal>

          <div className="border-t border-zinc-900">
            <ExperienceItem
              role="AI Engineer Intern"
              company="Flowers Foods"
              location="Thomasville, GA — Remote"
              period="Jun 2026 — Present"
              description="Building evaluation scenarios for AI agents powered by LLMs — testing multi-turn reasoning, intent recognition, and response quality. Validating end-to-end AI workflows by assessing LLM outputs, API responses, context retention, and system reliability under varied prompts."
            />
            <ExperienceItem
              role="Machine Learning Research Assistant"
              company="University of California, Irvine"
              location="Irvine, CA"
              period="May 2026 — Present"
              description="Conducting research on a MiniAn-based machine learning pipeline for 1-photon neuron imaging. Developing and evaluating denoising models to improve image quality in noisy neuronal imaging datasets for neuron detection."
              delay={80}
            />
            <ExperienceItem
              role="AI/ML Engineer Intern"
              company="LangPal"
              location="Seattle, WA — Remote"
              period="Apr 2026 — Jun 2026"
              description="Developed end-to-end machine learning and NLP systems for a language-learning platform. Built conversational AI, speech-recognition, and computer-vision capabilities enabling personalized learning experiences. Owned the full ML lifecycle including data pipelines, model training, evaluation, and production deployment."
              delay={160}
            />
            <ExperienceItem
              role="AI Agents Fellow"
              company="MergeWorks"
              location="Dallas, TX — Remote"
              period="Feb 2026 — May 2026"
              description="Designed real-time Instagram DM automation using webhooks and n8n workflows to capture, process, and route incoming client inquiries, reducing manual workload by ~60%. Implemented RAG pipelines to retrieve relevant business knowledge and generate accurate, context-aware automated responses."
              delay={240}
            />
            <ExperienceItem
              role="Software Application Development Intern"
              company="Bluemind Solutions"
              location="Fremont, CA — Remote"
              period="Jun 2024 — Aug 2024"
              description="Developed a Generative AI chatbot using Microsoft Copilot Studio. Improved response accuracy and domain relevance by ~30% using public company datasets to optimize query resolution and high-precision information retrieval."
              delay={320}
            />
          </div>
        </section>

        {/* ── TOOLKIT ──────────────────────────────────────────── */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="04" label="Toolkit" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8 space-y-12">
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed text-balance">
                  Languages — <span className="text-zinc-100">Python</span>, <span className="text-zinc-100">Java</span>, <span className="text-zinc-100">JavaScript</span>, <span className="text-zinc-100">TypeScript</span>, <span className="text-zinc-100">C++</span>, <span className="text-zinc-100">SQL</span>
                </p>
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed text-balance">
                  ML &amp; AI — PyTorch, TensorFlow, Scikit-learn, XGBoost, LangChain, RAG, Pandas, NumPy
                </p>
                <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed text-balance">
                  Infrastructure — Docker, Kubernetes, AWS, Azure, PostgreSQL, Redis, Celery, REST APIs
                </p>
                <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed text-balance">
                  Frontend — React, Next.js, Node.js, Tailwind CSS, MapLibre GL
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── EDUCATION ────────────────────────────────────────── */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="05" label="Education" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-12 gap-6 items-baseline">
              <div className="col-span-12 md:col-span-7">
                <h3 className="text-2xl font-medium text-zinc-100 tracking-tight mb-2">University of California, Irvine</h3>
                <p className="text-[15px] text-zinc-400">Bachelor of Science in Computer Science, AI Specialization</p>
              </div>
              <div className="col-span-12 md:col-span-5 md:text-right">
                <span className="text-[13px] text-zinc-600 font-mono tracking-widest">Expected Dec 2027</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <SectionLabel number="06" label="Contact" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed mb-16 text-balance">
                  Open to opportunities in AI/ML engineering, research, and full-stack development. 
                  Let&apos;s talk about what we can build.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-12">
              <a
                href="mailto:aryan.raj@hotmail.com"
                className="contact-link text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-light"
              >
                aryan.raj@hotmail.com <span className="arrow">↗</span>
              </a>
              <a
                href="https://github.com/aryan-rajesh7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-light"
              >
                GitHub <span className="arrow">↗</span>
              </a>
              <a
                href="https://linkedin.com/in/aryan-rajesh7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-light"
              >
                LinkedIn <span className="arrow">↗</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-[13px] text-zinc-500 font-medium">Aryan Rajesh</span>
            <span className="text-zinc-800 mx-3">/</span>
            <span className="text-[13px] text-zinc-600">U.S. Citizen</span>
          </div>
          <span className="text-[11px] text-zinc-700 font-mono tracking-widest">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
