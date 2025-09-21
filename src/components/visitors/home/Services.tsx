import React from "react";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="component-px">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              What We Do
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Fleebug specializes in creating premium digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
