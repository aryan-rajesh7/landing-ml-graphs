"use client";

import React, { useEffect, useRef } from "react";

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

export default function Experience() {
  const experiences = [
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
  ];

  return (
    <div className="main-content">
      <Reveal>
        <h1 className="page-title">Experience</h1>
      </Reveal>
      
      <div className="timeline">
        {experiences.map((exp, idx) => (
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
      
      <footer>
        <Reveal>
          © {new Date().getFullYear()} Aryan Rajesh. U.S Citizen.
        </Reveal>
      </footer>
    </div>
  );
}
