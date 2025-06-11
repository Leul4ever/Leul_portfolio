import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Github, Globe } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with Next.js and Flutter, featuring real-time inventory management and secure payment processing.",
        tech: ["Next.js", "Flutter", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/ecommerce",
        live: "https://ecommerce-demo.com",
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
        tech: ["React", "Firebase", "Material-UI"],
        github: "https://github.com/yourusername/task-manager",
        live: "https://task-manager-demo.com",
    },
    {
        title: "Portfolio Website",
        description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/yourusername/portfolio",
        live: "https://portfolio-demo.com",
    },
];

const Projects = () => {
    return (
        <section className="section relative">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    {/* text */}
                    <div className="text-center xl:text-left mb-12 xl:mb-0">
                        <motion.h2
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 mb-4"
                        >
                            My Projects <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-8 max-w-[400px] mx-auto xl:mx-0"
                        >
                            Check out some of my recent projects that showcase my skills and experience in web and mobile development.
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            <Button className="w-full xs:w-auto">
                                View all projects
                                <ArrowRight className="ml-2" />
                            </Button>
                        </motion.div>
                    </div>
                    {/* projects */}
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <Card key={index} className="group">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                                        <CardDescription className="text-base">{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <Button variant="outline" size="sm" className="w-full" asChild>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="mr-2 h-4 w-4" />
                                                    GitHub
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="sm" className="w-full" asChild>
                                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                    <Globe className="mr-2 h-4 w-4" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects; 