import React from "react";
import Link from "next/link";
import { contact } from "@/data/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="component-px py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-light text-white tracking-tight">
                Fleebug
              </span>
            </Link>
            <p className="text-gray-400 text-lg font-light mb-8">
              Premium software solutions crafted with precision.
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <Link
                href="/#services"
                className="text-gray-400 hover:text-white transition-colors font-light"
              >
                Services
              </Link>
              <Link
                href="/#products"
                className="text-gray-400 hover:text-white transition-colors font-light"
              >
                Products
              </Link>
              <Link
                href="/#projects"
                className="text-gray-400 hover:text-white transition-colors font-light"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors font-light"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
              <div className="mb-4 md:mb-0 font-light">
                © {currentYear} Fleebug. All rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-xs font-light">
                {/* <span>Made in Nepal</span> */}
                <span>•</span>
                <span>{contact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
