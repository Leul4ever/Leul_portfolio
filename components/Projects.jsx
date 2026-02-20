"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { projectData } from "@/constants";

// Force a specific order for categories
const uniqueCategories = [
    "all projects",
    "full stack",
    "mobile app",
    "ml and ai",
];

const Projects = () => {
    const [category, setCategory] = useState("all projects");

    const filteredProjects = projectData.filter((project) => {
        return category === "all projects"
            ? project
            : project.category.toLowerCase() === category;
    });

    return (
        <section className="min-h-[600px] pt-12 xl:pt-24 pb-12 xl:pb-24">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="section-title mb-8 xl:mb-16 text-center mx-auto"
                >
                    My projects
                </motion.h2>

                <Tabs defaultValue={category} className="mb-24 xl:mb-32">
                    <TabsList className="w-full grid h-full grid-cols-2 md:grid-cols-4 lg:max-w-[700px] mb-12 mx-auto md:border dark:border-none backdrop-blur-[10px] bg-white/10 dark:bg-black/20 border border-white/20 dark:border-primary/20 shadow-xl overflow-hidden rounded-[20px] md:rounded-full p-1">
                        {uniqueCategories.map((cat, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setCategory(cat)}
                                    value={cat}
                                    key={index}
                                    className="capitalize px-4 py-3 md:py-2 text-sm md:text-base rounded-[15px] md:rounded-full data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-black transition-all duration-300 font-medium"
                                >
                                    {cat}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>

                    <TabsContent value={category}>
                        <div className="text-lg grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn("up", 0.4 + (index % 3) * 0.1)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;