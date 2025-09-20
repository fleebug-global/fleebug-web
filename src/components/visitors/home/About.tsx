import React from "react";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to delivering software solutions that create real value and drive meaningful business outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and methodologies to build solutions that are ahead of the curve.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We work closely with you to understand your needs and exceed expectations.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "We maintain the highest standards of code quality, security, and performance in every project we deliver.",
    },
  ];

  const team = [
    {
      name: "Pushkar Kumar Sah",
      role: "Co-Founder & Lead Developer",
      description:
        "Full-stack developer with expertise in modern web technologies and system architecture.",
      linkedin: "https://linkedin.com/in/pushkarcdn",
    },
    {
      name: "Shivam Kumar Thakur",
      role: "Co-Founder & Technical Lead",
      description:
        "Experienced developer passionate about building scalable solutions and innovative products.",
      linkedin: "https://linkedin.com/in/dashivam06",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="component-px">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                About Fleebug
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building the Future
              <br />
              <span className="text-primary">One Solution at a Time</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fleebug is a forward-thinking software development company
              dedicated to creating innovative solutions that empower businesses
              to thrive in the digital age.
            </p>
          </div>

          {/* Company Story */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a vision to bridge the gap between innovative
                    technology and practical business solutions, Fleebug has
                    grown from a small team of passionate developers into a
                    trusted partner for businesses worldwide.
                  </p>
                  <p>
                    We specialize in creating custom software solutions, mobile
                    applications, and innovative products that not only meet
                    current needs but anticipate future challenges. Our flagship
                    product, Scholar, revolutionizes school management systems,
                    and we have many more groundbreaking solutions in
                    development.
                  </p>
                  <p>
                    Based in Kathmandu, Nepal, we serve clients globally,
                    combining local expertise with international standards to
                    deliver exceptional results.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      2+
                    </div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      25+
                    </div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      2
                    </div>
                    <div className="text-gray-600">Core Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we
                create.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind Fleebug&apos;s innovative
                solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how we can help bring
              your vision to life with innovative software solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
