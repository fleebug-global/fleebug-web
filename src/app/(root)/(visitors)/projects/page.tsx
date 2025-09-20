/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  projects.sort((a, b) => {
    // alphabetically sort by title
    return a.title.localeCompare(b.title);
  });

  const [activeCategory, setActiveCategory] = useState<
    "all" | "personal" | "official"
  >("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "personal", label: "Personal" },
    { key: "official", label: "Official" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned":
        return "bg-blue-100 text-blue-800";
      case "under-development":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const titleCase = (text: string) => {
    return text
      .replace("-", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section className="min-h-screen component-px pt-48 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            My Projects
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A showcase of my work spanning personal projects and professional
            contributions, built with cutting-edge technologies and best
            practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center divide-x-1 divide-gray-200 border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() =>
                  setActiveCategory(
                    category.key as "all" | "personal" | "official"
                  )
                }
                className={`relative px-10 py-5 font-medium text-sm transition-all duration-300 cursor-pointer ${
                  activeCategory === category.key
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900 bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                <div className="absolute inset-0 bg-black/20 transition" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {titleCase(project.status)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  {/* <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === "personal"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {titleCase(project.category)}
                  </span> */}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {project?.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-white/80 text-6xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: any, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub size={16} />
                      Code
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Used */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(projects.flatMap((p) => p.technologies))).map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
