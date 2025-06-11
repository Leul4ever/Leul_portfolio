"use client";

import {
  RiLinkedinFill,
  RiTwitterFill,
  RiGithubFill,
  RiInstagramFill,
  RiMediumFill,
  RiFacebookFill,
  RiTiktokFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/leul-abera-418791259/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Leul4ever",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/leul45",
    name: <RiTwitterFill />,
  },
  {
    path: "https://www.facebook.com/leul.abera.3910",
    name: <RiFacebookFill />,
  },
  {
    path: "https://instagram.com/leul5225",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.tiktok.com/@leulab01",
    name: <RiTiktokFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
