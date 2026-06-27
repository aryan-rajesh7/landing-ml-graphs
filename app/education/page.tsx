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

export default function Education() {
  const certs = [
    {
      title: "Microsoft Azure Services and Lifecycles",
      issuer: "Microsoft",
      date: "Jun 2024",
      id: "QCN5LYLLHWCB"
    },
    {
      title: "AI Infrastructure and Operations Fundamentals",
      issuer: "NVIDIA",
      date: "Jul 2024",
      id: "5VZAVFMEMR6C"
    },
    {
      title: "Trust and Security with Google Cloud",
      issuer: "Google Cloud Skills Boost",
      date: "Jul 2024",
      id: "BZ3BR9SUBLHT"
    },
    {
      title: "Modernize Infrastructure and Applications with Google Cloud",
      issuer: "Google Cloud Skills Boost",
      date: "Jul 2024",
      id: "RLC6YW4AFE7Z"
    },
    {
      title: "Innovating with Google Cloud Artificial Intelligence",
      issuer: "Google Cloud Skills Boost",
      date: "Jul 2024",
      id: "NTJAH8D7TY4D"
    },
    {
      title: "Exploring Data Transformation with Google Cloud",
      issuer: "Google Cloud Skills Boost",
      date: "Jul 2024",
      id: "S958SRKSPFAE"
    },
    {
      title: "Digital Transformation with Google Cloud",
      issuer: "Google Cloud Skills Boost",
      date: "Jul 2024",
      id: "GT4F4N7QTN2N"
    }
  ];

  return (
    <div className="main-content">
      <Reveal>
        <h1 className="page-title">Education & Certifications</h1>
      </Reveal>
      
      <div style={{ marginBottom: '80px' }}>
        <Reveal delay={100}>
          <div className="edu-card">
            <div>
              <div className="edu-school">University of California, Irvine</div>
              <div className="edu-degree">Bachelor of Science in Computer Science (AI Specialization)</div>
              <div className="edu-meta">
                <p><strong>Grade:</strong> Senior</p>
                <p><strong>Activities:</strong> Artificial Intelligence Club, Hack at UCI</p>
                <p style={{ marginTop: '8px' }}>Pursuing the Artificial Intelligence (AI) specialization which directs me to take a series of AI-related courses.</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Aug 2025 – Dec 2027</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="edu-card">
            <div>
              <div className="edu-school">San Joaquin Delta College</div>
              <div className="edu-degree">Intersegmental General Education Transfer Curriculum (IGETC)</div>
              <div className="edu-meta">
                <p style={{ marginTop: '8px' }}>Successfully finished the Early College Pathway at Mountain House High School and completed the IGETC by taking college-level courses in addition to high school courses throughout my four years in high school.</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Aug 2021 – May 2025</div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="section-header">Licenses & Certifications</div>
      </Reveal>

      <div className="cert-grid">
        {certs.map((cert, idx) => (
          <Reveal key={idx} delay={(idx % 3) * 100}>
            <div className="cert-card">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer} · {cert.date}</p>
              <p className="cert-id">Credential ID: {cert.id}</p>
            </div>
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
