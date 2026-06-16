"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Palette, RocketLaunch, Code, Cube } from "@phosphor-icons/react";

const bentoVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100">
            Arsitektur & <span className="text-zinc-500 italic">Filosofi</span>
          </h2>
          <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-emerald-500/50 to-transparent mt-6" />
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
          
          {/* Main Bio - Spans 2 cols, 2 rows on large screens */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="doppelrand-shell col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 group"
          >
            <div className="doppelrand-core h-full w-full p-8 md:p-12 flex flex-col justify-end relative">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Terminal size={120} weight="thin" className="text-zinc-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-100 mb-6">Tentang Saya</h3>
              <p className="text-zinc-400 leading-relaxed md:text-lg">
                Saya percaya bahwa kode bukan sekadar instruksi untuk mesin, melainkan jembatan antara masalah kompleks dan solusi elegan. Dengan latar belakang kuat di pengembangan Full Stack, saya memadukan logika rekayasa perangkat lunak dengan kepekaan desain visual (design engineering) untuk menciptakan produk yang tidak hanya berfungsi optimal, tetapi juga terasa "hidup".
              </p>
            </div>
          </motion.div>

          {/* Core Stack */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="doppelrand-shell col-span-1 md:col-span-1 lg:col-span-2 row-span-1 group"
          >
            <div className="doppelrand-core h-full w-full p-8 bg-gradient-to-br from-[#0A0A0A] to-zinc-900/20">
              <h3 className="text-lg font-medium text-zinc-100 mb-6 flex items-center gap-3">
                <Code className="text-emerald-400" size={24} />
                Tech Stack Utama
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "Livewire", "CodeIgniter", "Node.js", "PostgreSQL", "Prisma", "Framer Motion"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-sm text-zinc-300 font-medium tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Design Engineering */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="doppelrand-shell col-span-1 md:col-span-1 lg:col-span-1 row-span-1 group"
          >
            <div className="doppelrand-core h-full w-full p-8 flex flex-col justify-between">
              <Palette size={32} className="text-emerald-400 mb-4" />
              <div>
                <h3 className="text-lg font-medium text-zinc-100 mb-2">Design Engineering</h3>
                <p className="text-sm text-zinc-400">Menjembatani kesenjangan antara UI statis dan prototipe interaktif berkinerja tinggi.</p>
              </div>
            </div>
          </motion.div>

          {/* Systems Architecture */}
          <motion.div 
            variants={bentoVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="doppelrand-shell col-span-1 md:col-span-2 lg:col-span-1 row-span-1 group"
          >
            <div className="doppelrand-core h-full w-full p-8 flex flex-col justify-between bg-gradient-to-tr from-emerald-900/10 to-transparent">
              <Database size={32} className="text-zinc-100 mb-4" />
              <div>
                <h3 className="text-lg font-medium text-zinc-100 mb-2">Backend & Database</h3>
                <p className="text-sm text-zinc-400">Merancang arsitektur data yang skalabel dan API yang *resilient*.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
