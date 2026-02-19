"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

// components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const scrolYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrolYPos);
  });

  return (
    <header
      className={`${header
        ? "py-4 bg-white shadow-lg dark:bg-accent"
        : "py-6 dark:bg-transparent"
        } sticky top-0 z-20 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            Leul Abera
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <nav className="hidden xl:flex gap-4">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
