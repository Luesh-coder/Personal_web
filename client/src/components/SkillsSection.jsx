import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiPhp } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { CgCPlusPlus } from 'react-icons/cg';


const skillIcons = {
    "HTML": <FaHtml5 className="text-orange-600" />,
    "CSS": <FaCss3Alt className="text-blue-600" />,
    "JavaScript": <FaJsSquare className="text-yellow-400" />,
    "React": <FaReact className="text-cyan-400" />,
    "TypeScript": <SiTypescript className="text-blue-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
    "Python": <FaPython className="text-blue-400" />,
    "Java": <FaJava className="text-red-700" />,
    "C/C++": <CgCPlusPlus className="text-blue-700" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    "MongoDB": <SiMongodb className="text-green-700" />,
    "MySQL": <SiMysql className="text-blue-700" />,
    "PHP": <SiPhp className="text-indigo-700" />,
    "Git": <FaGitAlt className="text-orange-700" />,
    "GitHub": <FaGithub className="text-black" />,
    "VS Code": <VscVscode className="text-blue-500" />,
    "Linux": <FaLinux className="text-black" />,
    "Figma": <FaFigma className="text-pink-500" />,
};

const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "C/C++", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "MySQL", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Linux", category: "Tools" },
    { name: "Figma", category: "Tools" },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-32 px-8 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-14">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <span className="text-6xl text-primary mb-4">
                                {React.cloneElement(skillIcons[skill.name], { className: "text-primary" })}
                            </span>
                            <span className="mt-2 text-lg font-semibold text-center">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};