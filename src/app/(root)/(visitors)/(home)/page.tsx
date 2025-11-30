import React from "react";
import Head from "next/head";
import Hero from "@/components/visitors/home/Hero";
import Services from "@/components/visitors/home/Services";
import Products from "@/components/visitors/home/Products";
import Projects from "@/components/visitors/home/Projects";
import About from "@/components/visitors/home/About";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Fleebug | Leading Software Development Company</title>
        <meta
          name="description"
          content="Fleebug creates scalable software, AI solutions, web scraping tools, custom web development, and automation that empower businesses to grow and innovate."
        />
        <meta
          name="keywords"
          content="software development, web development, automation, AI, web scraping, scalable software, custom software solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Hero />
        <Services />
        <Products />
        <Projects />
        <About />
      </main>
    </>
  );
};

export default HomePage;
