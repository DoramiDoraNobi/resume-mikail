"use client";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Trilogika Edutama Main Web",
      url: "https://trilogikaedutama.id/",
      description: "Merombak total web utama menggunakan ekosistem Laravel modern untuk memberikan performa yang cepat, SEO yang optimal, dan pengalaman pengguna yang responsif.",
      tech: ["Laravel", "Tailwind CSS", "MySQL"],
    },
    {
      title: "Learning Management System",
      url: "http://lms.trilogikaedutama.id/",
      description: "Membangun platform LMS secara menyeluruh dari nol menggunakan Livewire. Sistem ini menangani manajemen kursus, pendaftaran siswa, dan interaksi pembelajaran secara real-time.",
      tech: ["Laravel Livewire", "Alpine.js", "Tailwind CSS"],
    },
    {
      title: "LSP Documentation Web",
      url: "https://lsp.trilogikaedutama.id/",
      description: "Membangun sistem informasi berbasis web untuk Lembaga Sertifikasi Profesi (LSP) guna mempermudah proses dokumentasi, pendaftaran asesmen, dan pelaporan yang terpusat.",
      tech: ["Laravel", "Bootstrap", "MySQL"],
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Karya & <span>Proyek</span></h2>
        <p className="projects-subtitle">Beberapa sistem dan website yang telah saya bangun dan kembangkan secara langsung.</p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className={`project-row ${index % 2 !== 0 ? 'project-row-reverse' : ''}`} key={index}>
            
            {/* Window Side */}
            <div className="project-window-wrapper">
              <div className="browser-window">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="browser-urlbar">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    {project.url.replace(/^https?:\/\//, '')}
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="browser-external" title="Buka di tab baru">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
                <div className="browser-content">
                  <iframe 
                    src={project.url} 
                    title={project.title}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="project-info">
              <div className="project-number">0{index + 1}</div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                Kunjungi Website
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
