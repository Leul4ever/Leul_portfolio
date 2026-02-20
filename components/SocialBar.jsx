"use client";
import React from 'react';
import {
    RiLinkedinFill,
    RiTwitterFill,
    RiGithubFill,
    RiInstagramFill,
    RiTelegramFill,
} from "react-icons/ri";
import Link from "next/link";
import { Socials as SocialLinks } from "@/constants";
import { motion } from "framer-motion";

const iconMap = {
    linkedin: {
        icon: <RiLinkedinFill />,
        color: "bg-[#0077b5]",
    },
    github: {
        icon: <RiGithubFill />,
        color: "bg-[#333]",
    },
    twitter: {
        icon: <RiTwitterFill />,
        color: "bg-[#1da1f2]",
    },
    instagram: {
        icon: <RiInstagramFill />,
        color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    },
    send: {
        icon: <RiTelegramFill />,
        color: "bg-[#0088cc]",
    },
};

const SocialBar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="fixed left-8 bottom-12 z-50 hidden xl:flex flex-col gap-y-3"
        >
            {SocialLinks.map((item, index) => {
                const brand = iconMap[item.icon] || { icon: <RiGithubFill />, color: "bg-primary" };
                return (
                    <Link
                        href={item.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className={`w-12 h-12 ${brand.color} rounded-[12px] flex items-center justify-center text-2xl text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20`}>
                            {brand.icon}
                        </div>
                        {/* Tooltip */}
                        <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
                            {item.name}
                        </span>
                    </Link>
                );
            })}
        </motion.div>
    );
};

export default SocialBar;
