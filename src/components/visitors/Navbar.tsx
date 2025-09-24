"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 component-px ${
        isMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm shadow-sm "
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <Image
              src="/logo.svg"
              alt="Fleebug"
              width={120}
              height={120}
              className="h-10 w-10"
            />
            <span
              className={`text-2xl font-medium text-gray-900 tracking-tight ${outfit.className}`}
            >
              Fleebug Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-gray-900 transition-all duration-300 font-light hover:scale-101 text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-sm tracking-wide shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden max-lg:component-px py-8">
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-center text-sm tracking-wide shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
