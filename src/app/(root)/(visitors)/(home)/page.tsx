import Hero from "@/components/visitors/home/Hero";
import About from "@/components/visitors/home/About";
import Experience from "@/components/visitors/home/Experience";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
