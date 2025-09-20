import React from "react";
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Build scalable web applications, enterprise software, and digital platforms tailored to your business needs.",
      features: [
        "Full-stack Development",
        "API Integration",
        "Database Design",
        "Performance Optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Create native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "App Store Deployment",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Design intuitive and beautiful user interfaces that convert visitors into customers.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust server-side solutions with secure APIs and efficient database management.",
      features: [
        "RESTful APIs",
        "Database Optimization",
        "Authentication",
        "Scalable Architecture",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Deploy and manage your applications on modern cloud infrastructure for maximum reliability.",
      features: ["AWS/Azure", "DevOps", "CI/CD Pipelines", "Auto-scaling"],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Ongoing support and maintenance to keep your software running smoothly and securely.",
      features: [
        "24/7 Monitoring",
        "Security Updates",
        "Performance Tuning",
        "Technical Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="component-px">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Our Services
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Software
              <br />
              <span className="text-primary">Development Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end software
              development services that help your business grow and succeed in
              the digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-500 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-2xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss your project and create software solutions
                that drive your business forward.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
