import Image from "next/image";
import ExperienceJob from "./ExperienceJob";
import { experienceData } from "@/constants";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-12 w-full overflow-hidden">
      <h1 className="text-5xl xl:text-7xl font-black text-center">My Work Experience</h1>
      <div className="experience-container flex justify-center w-full px-4">
        <div className="timeline w-1 flex flex-col items-center bg-primary/20 relative">
          <div className="line w-1 bg-primary/50 h-16"></div>
          {experienceData.map((job, index) => (
            <React.Fragment key={index}>
              <ExperienceJob
                icon={job.icon}
                title={job.title}
                company={job.company}
                direction={job.direction}
                descriptions={job.descriptions}
              />
              {index !== experienceData.length - 1 && (
                <div className="line w-1 h-32 bg-primary/30"></div>
              )}
            </React.Fragment>
          ))}
          <div className="line w-1 bg-primary/50 h-16"></div>
        </div>
      </div>
    </div>
  );
};


export default Experience;
