import React from "react";
import Hero from "@/components/visitors/home/Hero";
import Services from "@/components/visitors/home/Services";
import Products from "@/components/visitors/home/Products";
import Projects from "@/components/visitors/home/Projects";
import About from "@/components/visitors/home/About";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <Projects />
      <About />
    </main>
  );
};

export default HomePage;
