"use client";

import { useEffect, useRef } from "react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll(".tl-card");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-section" id="experience" ref={sectionRef}>
      {/* Background effects */}
      <div className="exp-bg-glow exp-bg-glow-1" />
      <div className="exp-bg-glow exp-bg-glow-2" />

      <div className="exp-wrapper">
        {/* Header */}
        <div className="exp-header">
          <div className="exp-label">
            <span className="exp-label-line" />
            Perjalanan Saya
          </div>
          <h2 className="exp-heading">
            Pengalaman &<br />
            <span className="exp-heading-accent">Pendidikan</span>
          </h2>
        </div>

        {/* Center Timeline */}
        <div className="tl-container">
          <div className="tl-line" />

          {/* Experience Card — Left */}
          <div className="tl-row tl-row-left">
            <div className="tl-card tl-card-left">
              <div className="tl-card-glow" />
              <div className="tl-card-inner">
                <div className="tl-card-top">
                  <div className="tl-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  </div>
                  <div className="tl-badge tl-badge-live">
                    <span className="tl-pulse" />
                    On Going
                  </div>
                </div>

                <div className="tl-date">Nov 2025 — Mei 2026</div>
                <h3 className="tl-role">Web Developer Intern</h3>
                <div className="tl-company">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Trilogika Edutama
                </div>
                <p className="tl-desc">
                  Membangun dan mengembangkan sistem informasi serta platform pembelajaran berbasis web. Berpartisipasi aktif dalam perancangan, implementasi, dan pemeliharaan sistem — dari merombak total website utama, membangun LMS dari nol, hingga pembuatan web LSP.
                </p>
                <div className="tl-tags">
                  <span>Laravel</span>
                  <span>Livewire</span>
                  <span>Full Stack</span>
                </div>
              </div>
            </div>

            {/* Center Node */}
            <div className="tl-node">
              <div className="tl-node-dot" />
              <div className="tl-node-ring" />
            </div>

            <div className="tl-spacer" />
          </div>

          {/* Education Card — Right */}
          <div className="tl-row tl-row-right">
            <div className="tl-spacer" />

            {/* Center Node */}
            <div className="tl-node">
              <div className="tl-node-dot tl-node-dot-alt" />
              <div className="tl-node-ring" />
            </div>

            <div className="tl-card tl-card-right">
              <div className="tl-card-glow tl-card-glow-alt" />
              <div className="tl-card-inner">
                <div className="tl-card-top">
                  <div className="tl-icon-wrap tl-icon-wrap-alt">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  </div>
                  <div className="tl-badge tl-badge-edu">Aktif</div>
                </div>

                <div className="tl-date">Saat ini</div>
                <h3 className="tl-role">S1 Sistem Informasi</h3>
                <div className="tl-company">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Universitas Amikom Yogyakarta
                </div>
                <p className="tl-desc">
                  Mempelajari rekayasa perangkat lunak, analisis sistem informasi, dan manajemen basis data dengan fokus pada pemecahan masalah dan penciptaan solusi teknologi inovatif.
                </p>
                <div className="tl-tags">
                  <span>Software Engineering</span>
                  <span>Database</span>
                  <span>Sistem Informasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
