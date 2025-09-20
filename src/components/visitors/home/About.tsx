import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="component-px">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            About Fleebug
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed font-light mb-12">
            We are a boutique software development studio based in Kathmandu,
            Nepal. Founded by passionate developers, we create premium digital
            solutions for businesses worldwide.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">70+</div>
              <div className="text-gray-500 font-light">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">55+</div>
              <div className="text-gray-500 font-light">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">2+</div>
              <div className="text-gray-500 font-light">Years Experience</div>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center bg-gray-900 text-white px-12 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
