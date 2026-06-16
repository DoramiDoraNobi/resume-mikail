"use client";

import { motion } from "framer-motion";
import { EnvelopeSimple, LinkedinLogo, GithubLogo, ArrowUpRight } from "@phosphor-icons/react";

const contacts = [
  {
    platform: "Email",
    value: "mikobantul@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mikobantul@gmail.com",
    icon: <EnvelopeSimple size={24} weight="regular" />
  },
  {
    platform: "LinkedIn",
    value: "Mikail Yuddha Wibowo",
    href: "https://www.linkedin.com/in/mikail-yuddha-wibowo-b579b7221/",
    icon: <LinkedinLogo size={24} weight="regular" />
  },
  {
    platform: "GitHub",
    value: "DoramiDoraNobi",
    href: "https://github.com/DoramiDoraNobi",
    icon: <GithubLogo size={24} weight="regular" />
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        
        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest">
              Mari Berkolaborasi
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-100 mb-8 leading-[1.1]">
            Punya ide menarik? <br />
            <span className="text-zinc-500 italic">Mari bicara.</span>
          </h2>
          
          <p className="text-zinc-400 text-lg leading-relaxed max-w-[45ch]">
            Saya selalu terbuka untuk peluang baru, kolaborasi menarik, atau sekadar berdiskusi tentang rekayasa perangkat lunak dan desain.
          </p>
        </motion.div>

        {/* Cards Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {contacts.map((contact, idx) => (
            <motion.a 
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative flex items-center justify-between p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-colors duration-500">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">{contact.platform}</div>
                  <div className="text-lg md:text-xl font-medium text-zinc-100">{contact.value}</div>
                </div>
              </div>

              <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                <ArrowUpRight size={20} weight="bold" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
