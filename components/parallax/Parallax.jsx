"use client";
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import StarsCanvas from "../StarBackground";
import DevImg from "../DevImg";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="w-[100%] flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mb-20"
      style={{ transform: "scale(1" }}
    >
      <StarsCanvas />
      <div className="parallax" ref={ref}>
        <div
          className={`flex gap-x-4 ${
            type === "services" ? "" : "flex-row-reverse"
          }`}
        >
          <motion.h1
            style={{ y: yText }}
            className="section-title mb-12 xl:mb-24 text-center mx-auto"
          >
            {type === "services" ? "What I Do?" : "What I Did?"}
          </motion.h1>
          {type === "services" ? (
            <DevImg
              containerStyles={
                "hidden xl:flex w-[180px] h-[450px] z-10 relative bg-no-repeat bg-bottom"
              }
              imgSource={"/parallax/Meh2.svg"}
            />
          ) : (
            <DevImg
              containerStyles={
                "hidden xl:flex w-[180px] h-[450px] z-10 relative bg-no-repeat bg-bottom"
              }
              imgSource={"/parallax/Meh3.svg"}
            />
          )}
        </div>
        <motion.div className="mountains"></motion.div>
        <motion.div
          className="planets"
          style={{
            y: yBg,
            backgroundImage: `url(${
              type === "services" ? "/planets.png" : "/sun.png"
            })`,
          }}
        ></motion.div>

        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </section>
  );
};

export default Parallax;
