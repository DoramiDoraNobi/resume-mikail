"use client";

export default function ExperienceSection() {
  return (
    <section className="exp-section" id="experience">
      {/* Ambient background blobs */}
      <div className="exp-bg-blob exp-bg-blob-1" />
      <div className="exp-bg-blob exp-bg-blob-2" />

      <div className="exp-container">
        {/* Header */}
        <div className="exp-header">
          <div className="exp-label">
            <span className="exp-label-line" />
            Perjalanan Saya
          </div>
          <h2 className="exp-heading">
            Pengalaman &amp; <span>Pendidikan</span>
          </h2>
        </div>

        {/* Vertical Center Timeline */}
        <div className="timeline">
          <div className="timeline-line" />

          {/* Item 1 — Experience (Left) */}
          <div className="timeline-entry timeline-left">
            <div className="timeline-node">
              <div className="timeline-node-ring" />
            </div>
            <div className="timeline-card glass-card">
              <div className="card-badge badge-ongoing">On Going</div>
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <span className="card-date">November 2025 — Mei 2026</span>
              <h3 className="card-title">Web Developer Internship</h3>
              <h4 className="card-place">Trilogika Edutama</h4>
              <p className="card-desc">
                Membangun dan mengembangkan sistem informasi serta platform pembelajaran berbasis web. Berpartisipasi aktif dalam perancangan, implementasi, dan pemeliharaan beberapa sistem seperti LMS, LSP, dan Main Web perusahaan.
              </p>
              <div className="card-tags">
                <span>Laravel</span>
                <span>Livewire</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Item 2 — Education (Right) */}
          <div className="timeline-entry timeline-right">
            <div className="timeline-node">
              <div className="timeline-node-ring" />
            </div>
            <div className="timeline-card glass-card">
              <div className="card-badge badge-active">Aktif</div>
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <span className="card-date">Saat Ini</span>
              <h3 className="card-title">S1 Sistem Informasi</h3>
              <h4 className="card-place">Universitas Amikom Yogyakarta</h4>
              <p className="card-desc">
                Mempelajari rekayasa perangkat lunak, analisis sistem informasi, basis data, dan jaringan komputer dengan fokus pada pemecahan masalah serta penciptaan solusi teknologi yang inovatif.
              </p>
              <div className="card-tags">
                <span>Software Engineering</span>
                <span>Database</span>
                <span>UI/UX</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
