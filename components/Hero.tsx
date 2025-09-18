import React, { useState, useEffect, useMemo } from "react";

const Firefly: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute rounded-full bg-glow-accent/70 shadow-glow-md"
    style={style}
  />
);

const HeroBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallax = (factor: number) => {
    if (typeof window !== "undefined") {
      const x = (mousePos.x - window.innerWidth / 2) * factor;
      const y = (mousePos.y - window.innerHeight / 2) * factor;
      return { transform: `translate3d(${x}px, ${y}px, 0)` };
    }
    return {};
  };

  const fireflies = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite ${
          Math.random() * 2
        }s`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-jungle-deep opacity-0 animate-fade-in"
      style={{ animationDuration: "2s" }}
    >
      {/* Aurora Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-accent/10 rounded-full blur-3xl transition-transform duration-500 ease-out"
        style={parallax(0.02)}
      ></div>

      {/* Fireflies */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={parallax(0.04)}
      >
        {fireflies.map((f) => (
          <Firefly key={f.id} style={{ ...f }} />
        ))}
      </div>

      {/* Foreground blurred leaves */}
      <div
        className="absolute -left-20 -top-20 w-96 h-96 transition-transform duration-500 ease-out opacity-20"
        style={parallax(0.08)}
      >
        <Leaf1 className="w-full h-full text-glow-accent blur-xl rotate-12" />
      </div>
      <div
        className="absolute -right-20 -bottom-40 w-96 h-96 transition-transform duration-500 ease-out opacity-30"
        style={parallax(0.1)}
      >
        <Leaf2 className="w-full h-full text-glow-accent blur-lg -rotate-45" />
      </div>
    </div>
  );
};

const Leaf1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path
      fill="currentColor"
      d="M189.4,32.1c-28.8,11.3-52.4,32.5-72,59.3c-23-23.3-40.4-51.8-49.8-84.2C61,3.2,52.1-1.3,43,0.2c-12.2,2-21.7,11.9-24.1,24.1c-2,10.2,2.3,20,9.8,26.7C50.2,74.1,69.5,95,94.9,110.1c-13.3,13.9-28.7,26.3-45.9,36.5c-9.4,5.6-14.7,16.4-13.5,27.5c1.4,13.1,12.3,23.3,25.4,23.3c7.2,0,13.9-3,18.7-8.3c27-29.6,44.9-66.2,50.7-105.4c21.2,5.2,42.4,5.1,63.1-0.2c11-2.8,18.7-12.7,18.5-24.1C211.7,46.5,201.7,36.3,189.4,32.1z"
    />
  </svg>
);

const Leaf2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path
      fill="currentColor"
      d="M199.1,118.3c-23.7,2.8-44.5-5.5-62.7-17.7c-21-14.2-36.8-33.8-46.7-56.5c-4.5-10.3-11.4-19-20.3-25.2c-10.4-7.2-23.1-9.4-35.3-6.5C18.3,15.6,4.6,28.8,1.4,44.9c-2.8,14.1,2.8,28.5,13.5,37.3c22.1,18.1,49.9,29,79.8,31.3c-3,21.9-12.8,42.2-28.1,58.3c-6.8,7.2-9.4,17.4-6.8,27.1c3.1,11.5,13.6,19.6,25.6,19.6c8.4,0,16.1-3.9,21.1-10.6c18.3-24.5,28.3-54.8,29.1-86.8c25.2,1.3,51-2.9,74.5-12.6c12.3-5,20.5-17.3,19.2-30.2C227.3,128.7,214.5,117.3,199.1,118.3z"
    />
  </svg>
);

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center md:text-left transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div
            className="opacity-0 animate-fade-in-up"
            style={{
              animationDelay: "0.6s",
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          >
            <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 group">
              <div className="absolute inset-0 bg-glow-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-float"></div>
              <img
                src="me.png"
                alt="Kyoze"
                className="relative rounded-full w-full h-full object-cover border-4 border-jungle-green/50 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div
            className="md:w-1/2"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-4">
              <span
                className="text-jungle-light block text-2xl font-sans font-light opacity-0 animate-fade-in-down"
                style={{ animationDelay: "0.4s" }}
              >
                Halo, saya
              </span>
              <span
                className="block"
                style={{ clipPath: "polygon(0 0,100% 0,100%, 0%100%)" }}
              >
                <span
                  className="block opacity animate-text-reveal"
                  style={{ animationDelay: "0.8s" }}
                >
                  Herman Firmansyah
                </span>
              </span>
            </h1>
            <p
              className="text-lg lg:text-xl text-jungle-light mb-8 max-w-lg mx-auto md:mx-0 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              Seorang Full-Stack Developer yang ahli dalam merancang dan
              mengembangkan solusi web end-to-end. Terampil dalam membangun
              antarmuka pengguna yang dinamis di sisi klien serta arsitektur
              backend yang kokoh, aman, dan skalabel.
            </p>
            <div
              className="flex justify-center md:justify-start gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1.4s" }}
            >
              <button
                onClick={scrollToProjects}
                className="bg-glow-accent text-jungle-deep font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 shadow-glow-lg"
              >
                Lihat Karya Saya
              </button>
              <a
                href="https://wa.me/+6285705041136"
                className="bg-jungle-green text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transform hover:-translate-y-1 transition-all duration-300"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
