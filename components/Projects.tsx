import React from "react";
import type { Project } from "../types";
import { GitHubIcon } from "./icons/GitHubIcon";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Eco-Tracker App",
    description:
      "A web application to track personal carbon footprint and suggest eco-friendly alternatives. Built with React and visualized with D3.js.",
    imageUrl: "me.png",
    tags: ["React", "TypeScript", "D3.js", "Firebase"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Jungle Juice eCommerce",
    description:
      "A modern eCommerce platform for a fictional exotic juice brand. Features a full cart and checkout experience.",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "GraphQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "AI Story Generator",
    description:
      "A creative writing assistant powered by Gemini API to generate story prompts and short narratives based on user input.",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    tags: ["React", "Gemini API", "Node.js", "Express"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Interactive Portfolio",
    description:
      "The very portfolio you are looking at. Designed to be a clean, modern showcase with a touch of the wild.",
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <div
      className="glass-card rounded-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg shadow-jungle-deep/50 scroll-animation relative"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-px bg-gradient-to-r from-jungle-green to-glow-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative glass-card rounded-xl p-1">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-jungle-light mb-4 text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-jungle-green/50 text-glow-accent text-xs font-semibold px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-glow-accent/20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-glow-accent hover:underline font-semibold"
            >
              Live Demo
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-jungle-light hover:text-white transition-colors"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <h2 className="text-4xl font-display font-bold text-center text-white mb-12 scroll-animation">
        My <span className="text-glow-accent">Creations</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
