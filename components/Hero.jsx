'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import Paragraph from "./ui/paragraph";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiCustomerServiceFill,
} from "react-icons/ri";

// components
// import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import HeaderText from "./ui/header-text";

const Hero = () => {
  return (
    <section className="px-4 sm:px-10 xl:px-20 py-12 sm:py-16 xl:py-28 min-h-[90vh] xl:pt-32 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-hero-dark">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8">
          <div className="xl:flex-row xl:flex gap-x-8 text-center xl:text-left justify-center mx-auto xl:mx-0">
            <div className="hidden xl:flex flex-col justify-center items-center mt-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-5 h-5 rounded-full bg-primary"
              />
              <div className="w-1 sm:h-80 h-40 orange-gradient" />
            </div>
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[10px] xs:text-xs sm:text-sm font-semibold uppercase mb-2 sm:mb-4 tracking-[3px] sm:tracking-[4px] text-primary"
              >
                Full-Stack Software Engineer
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <HeaderText className="text-3xl xs:text-4xl sm:text-5xl xl:text-[68px] mb-3 sm:mb-4">
                  Hi, I'm <span className="text-[#915EFF]">Leul Abera</span>
                </HeaderText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paragraph className="max-w-[490px] mx-auto xl:mx-0 mb-6 sm:mb-12 text-sm xs:text-base sm:text-lg px-2 sm:px-0">
                  Building the future of web and mobile! 💫 Expert in crafting cross-platform applications with Flutter
                  and powerful web solutions. Let's create something extraordinary together!
                </Paragraph>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-6 sm:mb-12 px-4 sm:px-0"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto gap-x-2 hover:scale-105 transition-transform text-sm sm:text-base">
                    Contact Me <Send size={16} className="sm:w-5 sm:h-5 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/cv/Leul_Abera_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto gap-x-2 hover:scale-105 transition-transform text-sm sm:text-base">
                    Download CV <Download size={16} className="sm:w-5 sm:h-5 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-4 sm:mb-0"
              >
                <Socials
                  containerStyles={"flex gap-x-4 sm:gap-x-6 mx-auto xl:mx-2"}
                  iconStyles={
                    "text-foreground text-[18px] sm:text-[25px] hover:text-primary transition-all hover:scale-110"
                  }
                />
              </motion.div>
            </div>
          </div>
          <div className="hidden xl:flex relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] bg-no-repeat absolute -left-[20rem] -top-10 flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                <Image
                  src={"/about/profile.png"}
                  width={260}
                  height={260}
                  priority
                  alt="Leul Abera Profile Image"
                  className="rounded-2xl object-cover border-4 border-white/50 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Badge
                containerStyles={"absolute top-[50%] -left-[35rem] scale-90 z-50 bg-white dark:bg-black border-2 border-primary shadow-lg p-4 rounded-xl flex items-center justify-center"}
                icon={<RiBriefcase4Fill />}
                endCountNum={4}
                badgeText={"Years of Experience"}
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="hidden md:flex absolute left-2/4 bottom-16 sm:bottom-24 xl:bottom-24 animate-bounce"
        >
          <RiArrowDownSLine className="text-2xl sm:text-3xl text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
