import React from "react";
import { experiences } from "@/data/experiences";

const Experience = () => {
  return (
    <div id="experience" className="w-full flex justify-center py-12 md:py-32">
      <div className="w-full max-w-[1200px] px-6 component-px">
        <div className="flex flex-col gap-12">
          {/* Section Title */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold ">
              My Experience
            </h2>
          </div>

          {/* Experience List */}
          <div className="flex flex-col gap-12">
            {experiences.map((experience, index) => (
              <div key={index} className="flex flex-col gap-3">
                {/* Period */}
                <div className="text-primary-dark text-base font-medium">
                  ({experience.period})
                </div>

                {/* Job Title and Company */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-primary text-lg md:text-xl font-semibold">
                    {experience.title}
                    {experience.company && (
                      <>
                        {" | "}
                        <span className="text-primary">
                          {experience.company}
                        </span>
                        {experience.location && (
                          <>
                            {" | "}
                            <span className="text-primary">
                              {experience.location}
                            </span>
                          </>
                        )}
                      </>
                    )}
                  </h3>
                </div>

                {/* Description Points */}
                <div className="ml-10">
                  <ul className="list-disc space-y-3 text-gray-600 leading-relaxed">
                    {experience.description.map((point, index) => (
                      <li key={index} className="text-base">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
