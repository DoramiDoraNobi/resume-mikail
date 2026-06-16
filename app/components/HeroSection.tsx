"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      {/* Main content */}
      <div className="hero-content">
        {/* Text side */}
        <div className="hero-text">
          <div className="hero-greeting animate-slide-up">
            <span className="hero-greeting-dot" />
            Tersedia untuk kerja
          </div>

          <h1 className="hero-name animate-slide-up-delay-1">
            Halo, Nama saya{" "}
            <span className="hero-name-highlight">Mikail Yuddha Wibowo</span>
          </h1>

          <p className="hero-role animate-slide-up-delay-2">
            Seorang Full Stack Web Developer yang bersemangat dalam membangun pengalaman
            digital yang modern, responsif, dan bermakna.
          </p>

          <div className="hero-actions animate-slide-up-delay-3">
            <a href="#contact" className="hero-btn hero-btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hubungi Saya
            </a>
            <a href="#projects" className="hero-btn hero-btn-secondary">
              Lihat Portfolio
            </a>
          </div>

          {/* Social links */}
          <div className="hero-socials animate-slide-up-delay-4">
            <a
              href="https://www.linkedin.com/in/mikail-yuddha-wibowo-b579b7221/"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/DoramiDoraNobi"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mikobantul@gmail.com"
              className="hero-social-link"
              aria-label="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats animate-slide-up-delay-4">
            <div className="hero-stat">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Tahun Pengalaman</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">5+</span>
              <span className="hero-stat-label">Project Selesai</span>
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className="hero-image-wrapper animate-scale-in">
          <div className="hero-image-container">
            {/* Decorative rings */}
            <div className="hero-image-ring" />
            <div className="hero-image-ring-2" />

            {/* Floating particles */}
            <div className="hero-particle hero-particle-1" />
            <div className="hero-particle hero-particle-2" />
            <div className="hero-particle hero-particle-3" />
            <div className="hero-particle hero-particle-4" />

            {/* Image */}
            <div className="hero-image-blob">
              <Image
                src="/gambar_saya.png"
                alt="Foto Mikail"
                width={360}
                height={440}
                style={{ objectFit: "cover", objectPosition: "center top" }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
