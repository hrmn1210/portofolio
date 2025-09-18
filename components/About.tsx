import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <h2 className="text-4xl font-display font-bold text-center text-white mb-16 scroll-animation">
        About <span className="text-glow-accent">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2 scroll-animation">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-jungle-green to-glow-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-tilt"></div>
            <img
              src="me2.png"
              alt="Me working"
              className="relative rounded-lg w-full h-auto object-cover shadow-2xl shadow-jungle-deep"
            />
          </div>
        </div>
        <div
          className="lg:w-1/2 text-lg text-jungle-light space-y-6 scroll-animation"
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-justify">
            Saya seorang Full-Stack Developer yang antusias dengan hasrat untuk
            membangun solusi digital yang utuh—mulai dari antarmuka pengguna
            yang{" "}
            <span className="text-glow-accent font-semibold">intuitif</span>{" "}
            hingga arsitektur backend yang{" "}
            <span className="text-glow-accent font-semibold">kokoh</span>.
            Perjalanan saya di dunia pengembangan web berawal dari kekaguman
            tentang bagaimana baris kode dapat membangun sistem yang fungsional
            secara menyeluruh, dari interaksi di layar hingga pemrosesan data di
            server.
          </p>
          <p className="text-justify mt-4">
            {" "}
            {/* Menambahkan sedikit margin atas untuk jarak antar paragraf */}
            Mengambil inspirasi dari kompleksitas dan keanggunan alam, saya
            berusaha untuk menulis kode yang{" "}
            <span className="text-white">bersih, efisien, dan terukur</span> di
            setiap lapisan aplikasi.{" "}
            <strong>
              Keahlian saya terbentang dari pengembangan antarmuka pengguna yang
              dinamis menggunakan teknologi sisi klien modern, hingga
              perancangan arsitektur sisi server yang efisien untuk mengelola
              logika bisnis, API, dan database.
            </strong>
          </p>
          <br />
          <a
            href="https://wa.me/+6285705041136"
            className="bg-jungle-green text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transform hover:-translate-y-1 transition-all duration-300"
          >
            CV Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
