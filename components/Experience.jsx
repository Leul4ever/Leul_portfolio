import Image from "next/image";
import ExperienceJob from "./ExperienceJob";

const Experience = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-16">
      <h1 className="text-7xl">My Work Experience</h1>
      <div className="experience-container flex justify-center">
        <div className="timeline w-28 flex flex-col items-center">
          <div className="line w-0.5 bg-white h-36"></div>
          <ExperienceJob
            icon={"/company-logo.svg"}
            title="Web3 Developer"
            company="Alchemy"
            direction="left"
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              "eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ]}
          />
          <div className="line w-0.5 h-96 bg-white"></div>
          <ExperienceJob
            icon={"/company-logo.svg"}
            title="Web3 Developer"
            company="Alchemy"
            direction="right"
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              "eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ]}
          />
          <div className="line w-0.5 h-96 bg-white"></div>
          <ExperienceJob
            icon={"/company-logo.svg"}
            title="Web3 Developer"
            company="Alchemy"
            direction="left"
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              "eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ]}
          />
          <div className="line w-0.5 bg-white h-36"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
