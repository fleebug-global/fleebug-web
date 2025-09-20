import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";

const Hero = () => {
  const features = [
    "Custom Software Development",
    "Mobile App Development",
    "UI/UX Design",
    "Product Development",
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="component-px">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Trusted Software Development Partner</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Software Solutions
              <br />
              <span className="text-primary">That Scale</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build modern, scalable software solutions and innovative
              products that help businesses thrive in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center space-x-2 text-lg"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#projects"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-all duration-200 font-medium text-lg"
              >
                View Our Work
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 text-gray-600"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Preview */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Software
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored software solutions built with modern technologies to
                meet your specific business needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mobile Apps
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Native and cross-platform mobile applications that deliver
                exceptional user experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Innovative products like Scholar school management system, with
                more coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
