import React from "react";
import type { Skill } from "../types";

// Ikon yang sudah ada
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { NodeJsIcon } from "./icons/NodeJsIcon";

// ===> 1. Impor ikon baru yang akan kita buat
import { LaravelIcon } from "./icons/LaravelIcon";
import { CodeIgniterIcon } from "./icons/CodeIgniterIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { FlaskIcon } from "./icons/FlaskIcon";
import { FilamentIcon } from "./icons/FilamentIcon";

// ===> 2. Tambahkan data skill baru ke dalam array
const skillsData: Skill[] = [
  { name: "React", icon: <ReactIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Node.js", icon: <NodeJsIcon /> },
  { name: "Laravel", icon: <LaravelIcon /> },
  { name: "Filament", icon: <FilamentIcon /> },
  { name: "CodeIgniter", icon: <CodeIgniterIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "Flask", icon: <FlaskIcon /> },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => (
  <div
    className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 group transform hover:-translate-y-1 scroll-animation relative"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="absolute -inset-px rounded-xl bg-glow-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    <div className="relative z-10 w-16 h-16 text-glow-accent group-hover:text-white transition-colors duration-300 group-hover:scale-110">
      {skill.icon}
    </div>
    <p className="relative z-10 font-semibold text-white">{skill.name}</p>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <h2 className="text-4xl font-display font-bold text-center text-white mb-12 scroll-animation">
        Toolkit & <span className="text-glow-accent">Abilities</span>
      </h2>
      {/* Menambah md:grid-cols-5 agar lebih rapi di layar medium */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
