import React from "react"
import { Code, User, Briefcase } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-32 px-6 relative"> {/* Increased padding */}
            <div className="containter mx-auto max-w-6xl"> {/* Increased max-width */}
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center"> {/* Larger heading */}
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid gird-cols-1 md:grid-cols-2 gap-16 items-center"> {/* Increased gap */}
                    <div className="space-y-8"> {/* Increased spacing */}
                        <h3 className="text-3xl font-semibold"> {/* Larger subheading */}
                            Aspring Software Engineer
                        </h3>

                        <p className="text-lg text-muted-foreground"> {/* Larger paragraph */}
                            Entry-level Software Engineer / ML & Data enthusiast with hands-on experience shipping full-stack apps, 
                            building embedded systems on MCUs, and leading student organizations.
                        </p>

                        <p className="text-lg text-muted-foreground"> {/* Larger paragraph */}
                            Currently completing a B.S. in Computer Engineering at UCF (May 2026) and planning to pursue an M.S. immediately after; 
                            seeking SWE/ML/Data roles where I can turn product ideas into measurable outcomes. 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center"> {/* Increased gap and padding */}
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a 
                                href="https://docs.google.com/document/d/1dy4fDuPQAEgPKo0iBHzNLAZT14OOMt0E38gzEDTwPBE/edit?usp=sharing" 
                                className="px-8 py-3 rounded-full border border-primary text-primary hover:bg/10 transition-colors duration-300"
                            >
                                Resume
                            </a>
                        </div>
                    </div>  

                    <div className="grid grid-cols-1 gap-8"> {/* Increased gap */}
                        <div className="gradient-border p-8 card-hover"> {/* Increased padding */}
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Code className="h-8 w-8 text-primary"/> {/* Larger icon */}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-xl"> Web Development</h4> {/* Larger heading */}
                                    <p className="text-lg text-muted-foreground">
                                        Experienced in building full-stack web applications with modern Frameworks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-8 card-hover">
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <User className="h-8 w-8 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-xl"> UI/UX Design</h4>
                                    <p className="text-lg text-muted-foreground">
                                        Learning more on building interactive and user-friendly interfaces
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-8 card-hover">
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Briefcase className="h-8 w-8 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-xl"> Project Management</h4>
                                    <p className="text-lg text-muted-foreground">
                                        Working on many projects in a team setting and leading student organizations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}