"use client";
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTiktokFill,
  RiTelegramFill,
} from "react-icons/ri";

import Link from "next/link";
import { Socials as SocialLinks } from "@/constants";

const iconMap = {
  linkedin: { icon: <RiLinkedinFill />, color: "bg-[#0077b5]" },
  github: { icon: <RiGithubFill />, color: "bg-[#333]" },
  twitter: { icon: <RiTwitterFill />, color: "bg-[#1da1f2]" },
  facebook: { icon: <RiFacebookFill />, color: "bg-[#1877f2]" },
  instagram: { icon: <RiInstagramFill />, color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
  tiktok: { icon: <RiTiktokFill />, color: "bg-black" },
  send: { icon: <RiTelegramFill />, color: "bg-[#0088cc]" },
};

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {SocialLinks.map((icon, index) => {
        const brand = iconMap[icon.icon] || { icon: <RiGithubFill />, color: "bg-primary" };
        return (
          <Link href={icon.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className={`${iconStyles} ${brand.color} text-white p-2 rounded-[8px] flex items-center justify-center transition-all duration-300 hover:scale-110`}>
              {brand.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
