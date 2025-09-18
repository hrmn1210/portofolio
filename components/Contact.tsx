import React from "react";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { EmailIcon } from "./icons/EmailIcon";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 text-center">
      <div className="glass-card rounded-2xl p-8 md:p-12 lg:p-16 scroll-animation">
        <h2 className="text-4xl font-display font-bold text-white mb-4">
          Let's <span className="text-glow-accent">Connect</span>
        </h2>
        <p
          className="text-lg text-jungle-light max-w-2xl mx-auto mb-12"
          style={{ transitionDelay: "150ms" }}
        >
          Saya saat ini terbuka untuk peluang dan kolaborasi baru. Jika Anda
          memiliki proyek atau hanya ingin menyapa, jangan ragu untuk
          menghubungi saya. Mari kita ciptakan sesuatu yang luar biasa bersama!
        </p>
        <div
          className="flex justify-center items-center gap-8"
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="mailto:hrmnfrmnsyh1210@gmail.com"
            className="text-jungle-light hover:text-glow-accent transform hover:scale-110 transition-all duration-300 flex flex-col items-center gap-2 group"
          >
            <EmailIcon className="w-10 h-10" />
            <span className="text-sm font-medium group-hover:text-white transition-colors">
              Email
            </span>
          </a>
          <a
            href="https://github.com/hrmn1210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jungle-light hover:text-glow-accent transform hover:scale-110 transition-all duration-300 flex flex-col items-center gap-2 group"
          >
            <GitHubIcon className="w-10 h-10" />
            <span className="text-sm font-medium group-hover:text-white transition-colors">
              GitHub
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jungle-light hover:text-glow-accent transform hover:scale-110 transition-all duration-300 flex flex-col items-center gap-2 group"
          >
            <LinkedInIcon className="w-10 h-10" />
            <span className="text-sm font-medium group-hover:text-white transition-colors">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
