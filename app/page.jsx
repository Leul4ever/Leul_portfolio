import About from "@/components/About";
import Cta from "@/components/Cta";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import StarsCanvas from "@/components/StarBackground";
import Projects from "@/components/Projects";
import Parallax from "@/components/parallax/Parallax";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <Parallax type="services" /> */}
      <section id="services">
        <Services />
      </section>
      {/* <Parallax type="work" /> */}
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
