"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      {/* Planetary Background decorations */}
      <div className="planet-ring-bg" />
      <div className="planet-glow planet-glow-1" />
      <div className="planet-glow planet-glow-2" />
      
      <div className="about-content">
        {/* Image side */}
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <div className="about-image-frame" />
            <div className="about-image-inner">
              <Image
                src="/gambar_saya_withbackground.png"
                alt="Tentang Mikail"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            
            {/* Orbital decorative elements */}
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="orbit-dot orbit-dot-1" />
            <div className="orbit-dot orbit-dot-2" />
          </div>
        </div>

        {/* Text side */}
        <div className="about-text">
          <div className="about-label">
            <span className="about-label-line" />
            Tentang Saya
          </div>
          
          <h2 className="about-title">
            Lebih Dekat dengan <br />
            <span className="about-title-highlight">Mikail</span>
          </h2>
          
          <div className="about-description">
            <p>
              Saya adalah seorang Web Developer yang memiliki passion mendalam terhadap teknologi dan desain. Saya percaya bahwa sebuah website bukan hanya sekumpulan kode, melainkan medium untuk menyampaikan cerita, memecahkan masalah, dan memberikan pengalaman yang luar biasa bagi penggunanya.
            </p>
            <p>
              Dengan pengalaman dalam membangun berbagai aplikasi web modern, saya selalu antusias mempelajari teknologi terbaru dan menerapkan praktik terbaik dalam setiap proyek yang saya kerjakan. Fokus saya adalah menciptakan antarmuka yang bersih, intuitif, dan performa yang optimal.
            </p>
          </div>

          <div className="about-skills">
            <div className="skill-tag">Frontend Development</div>
            <div className="skill-tag">UI/UX Design</div>
            <div className="skill-tag">Responsive Layouts</div>
            <div className="skill-tag">Performance Optimization</div>
          </div>
        </div>
      </div>
    </section>
  );
}
