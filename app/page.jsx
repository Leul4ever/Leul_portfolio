import About from "@/components/About";
import Cta from "@/components/Cta";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import StarsCanvas from "@/components/StarBackground";
import Work from "@/components/Work";
import Parallax from "@/components/parallax/Parallax";
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
      <section id="skills">
        <Skills />
      </section>
      {/* <Parallax type="services" /> */}
      <section id="services">
        <Services />
      </section>
      {/* <Parallax type="work" /> */}
      <section id="projects">
        <Work />
      </section>
      <section id="contact">
        <Cta />
      </section>
    </main>
  );
}
