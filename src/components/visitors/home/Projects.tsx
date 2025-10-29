import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  // Filter to show only 3 featured projects
  const featuredProjects = projects
    .filter(
      (project) =>
        project.category === "official" && project.status === "completed"
    )
    .slice(0, 3);

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="component-px">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Featured Works
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              A curated selection of our finest projects.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="bg-gray-200 rounded-xl overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-gray-400 font-bold text-4xl">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors font-medium"
                    >
                      View
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
