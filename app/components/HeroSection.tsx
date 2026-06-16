"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

const STAGGER_DELAY = 0.1;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 20,
      mass: 1,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24 relative z-10">
        
        {/* Editorial Typography Side */}
        <motion.div 
          className="w-full md:w-[55%] flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-300">
              Tersedia untuk kerja
            </span>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.95] text-zinc-100 mb-8">
            Digital<br />
            <span className="text-zinc-500 italic">Craftsman.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[50ch] mb-12">
            Halo, nama saya Mikail Yuddha Wibowo. Seorang Full Stack Developer yang berfokus membangun pengalaman web berkinerja tinggi dengan detail piksel sempurna dan transisi yang *fluid*.
          </motion.p>

          {/* Magnetic CTA Action */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="group relative inline-flex w-full sm:w-auto items-center gap-4 rounded-full bg-zinc-100 pl-6 pr-2 py-2 text-sm font-semibold text-zinc-950 transition-all ease-fluid duration-500 active:scale-[0.98] hover:bg-white"
            >
              Hubungi Saya
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/10 transition-transform duration-500 ease-fluid group-hover:bg-zinc-900/20 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <ArrowUpRight weight="bold" className="text-zinc-950" />
              </span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <LinkedinLogo weight="fill" />, href: "https://www.linkedin.com/in/mikail-yuddha-wibowo-b579b7221/" },
                { icon: <GithubLogo weight="fill" />, href: "https://github.com/DoramiDoraNobi" },
                { icon: <EnvelopeSimple weight="bold" />, href: "mailto:mikobantul@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 text-zinc-400 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Showcase Side (Double Bezel Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring" as const, stiffness: 50, damping: 20, delay: 0.4 }}
          className="w-full md:w-[45%] flex justify-center md:justify-end"
        >
          <div className="doppelrand-shell group w-full max-w-[400px] transform-gpu transition-all duration-700 hover:rotate-1 hover:scale-[1.02]">
            <div className="doppelrand-core aspect-[4/5] relative">
              <Image
                src="/gambar_saya_withbackground.png"
                alt="Mikail Yuddha Wibowo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top filter grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 p-4">
                <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Status</p>
                <p className="text-xl font-semibold text-emerald-400">Fresh Graduate</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
