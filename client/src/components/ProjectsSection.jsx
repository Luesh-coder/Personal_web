import React from "react";
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Travel Genie",
    description: "AI travel itinerary planner built using MERN Stack",
    image: "/projects/travelinggenie.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS", "Gemini"],
    demoUrl: "http://travelinggenie.com",
    githubUrl: "https://github.com/jermachong/COP4331_LP",
  },
  {
    id: 2,
    title: "Social Loafer",
    description: "Contact manager built using a LAMP stack",
    image: "/projects/socialloafers.png",
    tags: ["Linux", "Apache", "MySQL", "PHP", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/mmamdouh4370/G17-SmallProject",
  },
  {
    id: 3,
    title: "Range Finder",
    description: "MSP430-based ultrasonic range finder in C/C++",
    image: "/projects/rangefinder.png",
    tags: ["MSP430", "C/C++"],
    demoUrl: "#",
    githubUrl: "https://github.com/Luesh-coder/Range-Finder",
  },
];

export const ProjectsSection = () => {
return (
    <section id="projects" className="py-28 px-2 md:px-10 relative">
        <div className="container mx-auto max-w-[90vw]">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto">
                Here are some projects that I've worked on in the past
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-card rounded-xl overflow-hidden shadow-md card-hover text-lg flex flex-col"
                    >
                    {/* Image on top */}
                    <div className="w-full h-48 md:h-56 overflow-hidden">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-4 flex-1">
                        <div>
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-base">{project.description}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                            <span
                            key={`${project.id}-${tag}`}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>

                        {/* Links — stay inside the card and wrap neatly */}
                        <div className="mt-auto flex items-center gap-3 flex-wrap">
                        {project.demoUrl && project.demoUrl !== "#" && (
                            <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:opacity-90 transition"
                            >
                            Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-md border border-primary text-primary text-sm hover:bg-primary hover:text-white transition"
                            >
                            GitHub
                            </a>
                        )}
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className = "text-center mt-12">
                <a 
                    className = "cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank" 
                    href="https://github.com/Luesh-coder"
                > 
                    Check my GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
);
};
