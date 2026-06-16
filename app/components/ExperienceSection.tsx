"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "@phosphor-icons/react";

const experiences = [
  {
    type: "work",
    date: "Nov 2025 — Mei 2026",
    status: "Selesai",
    role: "Web Developer Intern",
    company: "Trilogika Edutama",
    description: "Membangun dan mengembangkan sistem informasi serta platform pembelajaran berbasis web. Berpartisipasi aktif dalam perancangan, implementasi, dan pemeliharaan sistem — dari merombak total website utama, membangun LMS dari nol, hingga pembuatan web LSP.",
    tags: ["Laravel", "Livewire", "Full Stack"]
  },
  {
    type: "education",
    date: "Ags 2021 — Ags 2025",
    status: "Lulus",
    role: "S1 Sistem Informasi",
    company: "Universitas Amikom Yogyakarta",
    description: "Mempelajari rekayasa perangkat lunak, analisis sistem informasi, dan manajemen basis data dengan fokus pada pemecahan masalah dan penciptaan solusi teknologi inovatif.",
    tags: ["Software Engineering", "Database", "Sistem Informasi"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-24 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-emerald-500" />
            <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest">
              Perjalanan Saya
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-100">
            Pengalaman & <span className="text-zinc-500 italic">Pendidikan</span>
          </h2>
        </motion.div>

        {/* Minimalist Timeline */}
        <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-4 md:ml-6 space-y-24">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#050505] border border-emerald-500/50 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-500" />
              </div>

              {/* Content Box */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Meta Column */}
                <div className="w-full md:w-[200px] flex-shrink-0 pt-1">
                  <div className="text-emerald-400 font-mono text-sm mb-2">{exp.date}</div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-zinc-300 uppercase tracking-widest font-medium">
                    {exp.status === "On Going" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                    {exp.status}
                  </div>
                </div>

                {/* Main Detail Column */}
                <div className="flex-1 doppelrand-shell bg-transparent ring-0 p-0 shadow-none group-hover:ring-white/10 group-hover:bg-white/[0.02] transition-all duration-500 rounded-2xl md:-mt-6 md:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    {exp.type === "work" ? (
                      <Briefcase size={20} className="text-zinc-500" />
                    ) : (
                      <GraduationCap size={20} className="text-zinc-500" />
                    )}
                    <h3 className="text-2xl font-medium text-zinc-100">{exp.role}</h3>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-zinc-400 mb-6">
                    <MapPin size={16} />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
