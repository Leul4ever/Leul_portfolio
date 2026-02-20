"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "@/components/ProjectCard";
import { Pagination } from "swiper/modules";

import { projectData } from "@/constants";

function Work(props) {
  return (
    <section className="relative mb-8 xl:mb-32">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 gap-8 items-center">
          {/* Left side - Latest Projects section */}
          <div className="text-center xl:text-left">
            <h2 className="projects-title mb-3">Latest Projects</h2>
            <p className="subtitle mb-6">Bold Innovations. Real-World Impact.</p>
            <Link href={"/projects"}>
              <Button>All projects</Button>
            </Link>
          </div>

          {/* Right side - Project Cards */}
          <div className="w-full">
            <Swiper
              className="h-[420px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={20}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
