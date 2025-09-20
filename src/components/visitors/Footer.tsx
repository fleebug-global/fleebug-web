import React from "react";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from "lucide-react";
import { contact, socialLinks } from "@/data/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Custom Software Development", href: "#services" },
      { name: "Mobile App Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
    ],
    products: [
      { name: "Scholar - School Management", href: "#products" },
      { name: "NeoX.js - Backend Framework", href: "#products" },
      { name: "More Coming Soon", href: "#products" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Projects", href: "#projects" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "#" },
    ],
  };

  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    instagram: Instagram,
    facebook: Facebook,
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="component-px py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Code2 className="w-8 h-8 text-primary" />
                  <Sparkles className="w-3 h-3 text-primary absolute -top-1 -right-1" />
                </div>
                <span className="text-2xl font-bold">Fleebug</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building innovative software solutions that empower businesses
                to thrive in the digital world.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">
                    {contact.professionalEmail[0]}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">
                    {contact.professionalPhone}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">{contact.address}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {Object.entries(socialLinks).map(([platform, url]) => {
                    const IconComponent =
                      socialIcons[platform as keyof typeof socialIcons];
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 mb-4 md:mb-0">
                © {currentYear} Fleebug. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
