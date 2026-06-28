"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={ref} 
      className={className}
      style={{ transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`, opacity: 0, transform: "translateY(20px)" }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ultra-fast minimal loader
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-transparent min-h-screen">
      {/* MINIMAL LOADER */}
      <div 
        className={`fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loading ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-48 h-[1px] bg-zinc-800 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-zinc-100 w-full animate-[loading_0.5s_ease-in-out_forwards]" />
        </div>
      </div>

      <main className="w-full overflow-hidden">
        
        {/* HERO */}
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-24 relative">
          <div className="grid grid-cols-12 gap-6 w-full">
            <div className="col-span-12 lg:col-span-10 xl:col-span-9">
              <Reveal>
                <h1 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter text-zinc-100 leading-[0.9] mb-12">
                  Aryan Rajesh.
                </h1>
              </Reveal>
            </div>
            
            <div className="col-span-12 lg:col-start-6 lg:col-span-6 xl:col-start-7 xl:col-span-5 flex flex-col gap-12 pt-8 lg:pt-0">
              <Reveal delay={100}>
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed text-balance">
                  Software & AI Engineering. Architecting complex, scalable machine learning systems and real-time optimization pipelines.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-medium">
                  Building the bridge between theory and production.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap items-center gap-8 mt-4">
                  <a href="#projects" className="link-editorial text-sm tracking-widest uppercase font-semibold">
                    Explore Work
                  </a>
                  <a href="mailto:aryan.raj@hotmail.com" className="link-editorial text-sm tracking-widest uppercase font-semibold">
                    Get in touch
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ABOUT (Typographic Pull Quote) */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <Reveal>
            <h2 className="text-xs font-semibold text-zinc-600 tracking-[0.2em] uppercase mb-24 border-b border-zinc-900 pb-6">01. Manifesto</h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-6">
            <Reveal delay={100} className="col-span-12 lg:col-start-2 lg:col-span-10">
              <h3 className="text-3xl md:text-5xl lg:text-6xl text-zinc-100 font-light leading-[1.2] tracking-tight mb-24 text-balance">
                "I do not believe in boilerplate solutions. Whether optimizing core congestion algorithms in C++ or orchestrating cloud-native architectures, the focus is always on building systems that are resilient, elegant, and uncompromisingly fast."
              </h3>
            </Reveal>
            
            <Reveal delay={200} className="col-span-12 lg:col-start-7 lg:col-span-5">
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                Currently, I evaluate complex LLM agent pipelines at Flowers Foods, rigorously testing multi-turn reasoning and tool-calling accuracy. Concurrently, as an ML Research Assistant at UC Irvine, I develop computer vision algorithms for 1-photon mouse neuron imaging datasets.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS (Offset Editorial Layout) */}
        <section id="projects" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
          <Reveal>
            <h2 className="text-xs font-semibold text-zinc-600 tracking-[0.2em] uppercase mb-24 pb-6">02. Selected Work</h2>
          </Reveal>
          
          <div className="space-y-48 md:space-y-64">
            
            {/* Project 1 */}
            <div className="grid grid-cols-12 gap-6 relative group">
              <Reveal className="col-span-12 lg:col-start-2 lg:col-span-8">
                <div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                  {/* Subtle hover zoom on image placeholder */}
                  <div className="absolute inset-0 bg-zinc-800 opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest relative z-10">[ AI Traffic Optimizer ]</span>
                </div>
              </Reveal>
              
              <Reveal delay={150} className="col-span-12 lg:col-start-7 lg:col-span-5 lg:-mt-32 relative z-20 pt-12 lg:pt-0">
                <div className="bg-zinc-950/80 backdrop-blur-xl lg:p-12">
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-500 mb-8 uppercase tracking-wider">
                    <span>C++</span>
                    <span>PyTorch</span>
                    <span>WebSockets</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-medium text-zinc-100 mb-8 tracking-tight">AI Traffic Optimizer</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-lg text-pretty">
                    A real-time full-stack application that ingests live sensor data via the TomTom Flow API over WebSockets. By architecting a RAG-style pipeline powered by Gemini 2.0 Flash, the system generates instantaneous, highly optimized traffic signal timing recommendations. Core congestion scoring algorithms were rewritten in C++ and pybind11, drastically reducing computation time.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* EXPERIENCE (Brutalist Hover List) */}
        <section id="experience" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
          <div className="grid grid-cols-12 gap-6">
            <Reveal className="col-span-12 lg:col-span-4">
              <h2 className="text-xs font-semibold text-zinc-600 tracking-[0.2em] uppercase mb-16 pb-6">03. Experience</h2>
            </Reveal>
            
            <div className="col-span-12 lg:col-span-8">
              <div className="border-t border-zinc-900">
                
                {/* Role 1 */}
                <Reveal>
                  <div className="group border-b border-zinc-900 py-12 transition-all duration-500 hover:pl-8 cursor-default">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-medium text-zinc-100 tracking-tight transition-colors group-hover:text-white">AI Engineer Intern</h3>
                      <span className="text-sm text-zinc-500 font-mono tracking-widest">2024 — Pres</span>
                    </div>
                    <div className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">Flowers Foods</div>
                    <p className="text-zinc-500 font-light leading-relaxed max-w-2xl text-lg group-hover:text-zinc-400 transition-colors">
                      Evaluating and architecting complex LLM agent pipelines. Focused on benchmarking multi-turn reasoning and optimizing tool-calling precision across proprietary enterprise architectures.
                    </p>
                  </div>
                </Reveal>

                {/* Role 2 */}
                <Reveal delay={100}>
                  <div className="group border-b border-zinc-900 py-12 transition-all duration-500 hover:pl-8 cursor-default">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-medium text-zinc-100 tracking-tight transition-colors group-hover:text-white">ML Research Assistant</h3>
                      <span className="text-sm text-zinc-500 font-mono tracking-widest">2023 — Pres</span>
                    </div>
                    <div className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">UC Irvine</div>
                    <p className="text-zinc-500 font-light leading-relaxed max-w-2xl text-lg group-hover:text-zinc-400 transition-colors">
                      Engineering sophisticated computer vision and denoising pipelines. Processing and analyzing massive 1-photon mouse neuron imaging datasets to extract high-fidelity biological signals.
                    </p>
                  </div>
                </Reveal>

              </div>
            </div>
          </div>
        </section>

        {/* TOOLKIT */}
        <section id="education" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
          <div className="grid grid-cols-12 gap-6">
            <Reveal className="col-span-12 lg:col-span-4">
              <h2 className="text-xs font-semibold text-zinc-600 tracking-[0.2em] uppercase mb-16 pb-6">04. Foundation</h2>
            </Reveal>
            
            <Reveal delay={100} className="col-span-12 lg:col-span-8 lg:col-start-6">
              <div className="space-y-12">
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed text-balance">
                  My technical foundation is built on mastering low-level execution and high-level architectural design. I write primary logic in <span className="text-white font-medium">C++</span>, <span className="text-white font-medium">Python</span>, and <span className="text-white font-medium">TypeScript</span>.
                </p>
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed text-balance">
                  For machine learning, I leverage <span className="text-zinc-200">PyTorch</span>, <span className="text-zinc-200">TensorFlow</span>, and <span className="text-zinc-200">XGBoost</span>, deploying models across cloud-native architectures using <span className="text-zinc-200">Docker</span> and highly optimized <span className="text-zinc-200">pybind11</span> bindings.
                </p>
                <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed text-balance">
                  On the frontend, I build strict, performant interfaces using React, Next.js, and Tailwind CSS, prioritizing absolute control over the DOM.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <footer className="px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 text-xs text-zinc-600 font-mono uppercase tracking-widest">
        <span>Aryan Rajesh</span>
        <span>© {new Date().getFullYear()} All Rights Reserved</span>
      </footer>
    </div>
  );
}
