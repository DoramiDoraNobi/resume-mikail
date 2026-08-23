"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Browser, Code, ShieldCheck, GithubLogo, CheckCircle } from "@phosphor-icons/react";

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
  },
  {
    title: "Document OCR",
    url: "https://smart-document-reader.deagabriella9.workers.dev/login",
    description: "Aplikasi Document OCR yang memanfaatkan LLM Open Router Qwen untuk mengekstrak dan menganalisis teks dari dokumen secara cerdas dan akurat.",
    tech: ["Open Router", "Qwen LLM", "OCR", "Cloudflare Workers"],
  }
];

const personalProjects = [
  {
    title: "Decarabian",
    url: "https://github.com/DoramiDoraNobi/decarabian",
    description: "AI Security Gateway & Secret Vault — proxy transparan untuk AI Agent. Alih-alih memberikan API key asli ke LLM, Decarabian menyimpannya di encrypted vault (AES-256), mengelola permission per-agent, dan mencatat setiap transaksi secara otomatis.",
    tech: ["Next.js", "TypeScript", "AES-256 Encryption", "REST API Proxy"],
    features: [
      "Encrypted credential vault untuk menyimpan API key dengan aman",
      "Granular permission system per AI Agent",
      "Dynamic URL routing untuk reusable API tool definitions",
      "Full audit log untuk setiap request yang diproses",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-zinc-100">
              Karya & <span className="text-emerald-500 italic">Eksplorasi</span>
            </h2>
            <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-emerald-500/50 to-transparent mt-6" />
          </div>
          <p className="text-zinc-400 max-w-md text-lg leading-relaxed">
            Sistem dan produk digital yang telah saya arsitekturi dan kembangkan, berfokus pada skala dan pengalaman pengguna.
          </p>
        </motion.div>

        {/* Project List: Z-Axis Cascade / Staggered Grid */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className={`flex flex-col gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              
              {/* Visual Side (Double-Bezel iframe container) */}
              <div className="w-full md:w-[60%]">
                <div className="doppelrand-shell group relative transform-gpu transition-all duration-700 hover:scale-[1.01]">
                  <div className="doppelrand-core aspect-video w-full relative bg-[#0A0A0A] flex flex-col overflow-hidden">
                    {/* Faux Browser Header */}
                    <div className="h-10 w-full bg-zinc-900/50 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md absolute top-0 z-20">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-black/50 rounded-md text-[10px] text-zinc-500 font-mono tracking-wider border border-white/5">
                        <Browser size={12} />
                        {project.url.replace(/^https?:\/\//, '')}
                      </div>
                    </div>
                    {/* Iframe Content */}
                    <div className="flex-1 mt-10 relative bg-zinc-950">
                      {/* Placeholder overlay to prevent iframe stealing scroll events too aggressively */}
                      <div className="absolute inset-0 z-10 bg-transparent" />
                      <iframe 
                        src={project.url} 
                        title={project.title}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-[40%] flex flex-col items-start">
                <span className="text-emerald-500 font-mono text-sm tracking-widest mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-zinc-100 mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 font-medium tracking-wide flex items-center gap-1.5">
                      <Code size={12} className="text-emerald-500" />
                      {t}
                    </span>
                  ))}
                </div>

                {/* Magnetic Button */}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 rounded-full bg-zinc-900 border border-white/10 pl-6 pr-2 py-2 text-sm font-semibold text-zinc-100 transition-all ease-fluid duration-500 hover:bg-zinc-800 hover:border-emerald-500/30 active:scale-[0.98]"
                >
                  Live Preview
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 transition-transform duration-500 ease-fluid group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                    <ArrowUpRight weight="bold" />
                  </span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ===== Personal Projects Subsection ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-32 md:mt-40 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-zinc-100">
              Proyek <span className="text-emerald-500 italic">Personal</span>
            </h2>
            <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-emerald-500/50 to-transparent mt-6" />
          </div>
          <p className="text-zinc-400 max-w-md text-lg leading-relaxed">
            Open-source project yang saya bangun untuk menyelesaikan masalah nyata di dunia AI & keamanan.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {personalProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative block w-full max-w-3xl mx-auto"
            >
              {/* Card shell using Doppelrand style */}
              <div className="doppelrand-shell transition-all duration-700 group-hover:scale-[1.01] group-hover:ring-emerald-500/20">
                <div className="doppelrand-core p-8 md:p-10">

                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck size={28} weight="duotone" />
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 font-medium tracking-wide">
                      <GithubLogo size={14} weight="bold" />
                      Open Source
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-medium text-zinc-100 mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle size={18} weight="fill" className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 font-medium tracking-wide flex items-center gap-1.5">
                        <Code size={12} className="text-emerald-500" />
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="inline-flex items-center gap-4 rounded-full bg-zinc-900 border border-white/10 pl-6 pr-2 py-2 text-sm font-semibold text-zinc-100 transition-all ease-fluid duration-500 group-hover:bg-zinc-800 group-hover:border-emerald-500/30">
                    Lihat di GitHub
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 transition-transform duration-500 ease-fluid group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                      <ArrowUpRight weight="bold" />
                    </span>
                  </div>

                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

