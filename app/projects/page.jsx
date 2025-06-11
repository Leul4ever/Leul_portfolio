"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/ssgi.png",
    category: "fullstack",
    name: "SSGI NET",
    description:
      "SSGI-NET is a platform that would revolutionize research collaboration within SSGI, and then meticulously brought it to life with industry-standard practices like TDD and clean architecture.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/addis.png",
    category: "fullstack",
    name: "Addis Ride",
    description:
      "Hop on Addis Ride, the app redefining Addis Ababa's transportation landscape. Experience the convenience of ride-sharing with a reliable network of drivers, all at your fingertips.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/nexus-deep.png",
    category: "Fintech, AI",
    name: "Nexus Deep",
    description:
      "Investment Link isn't just a platform; it's a groundbreaking bridge connecting Ethiopian diaspora investors with the homeland's promising ventures.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

function Projects(props) {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none
          "
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Projects;
