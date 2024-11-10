"use client"

import Hero from "@/components/hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";



export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,

    });
    AOS.refresh();
  }, []);

  return (
    <main className="max-w-screen-2xl mx-auto">

      <Hero />
      <About />
      <Portfolio />
      <Contact />

    </main>
  );
}
