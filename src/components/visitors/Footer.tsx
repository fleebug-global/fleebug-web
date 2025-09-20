import Link from "next/link";
import { Play, Send } from "lucide-react";
import { FaBriefcase, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";
import { contact } from "@/data/contact";

const links = [
  {
    name: "Linkedin",
    icon: <FiLinkedin />,
    href: "https://linkedin.com/company/fleebug",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    href: "https://github.com/fleebug",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/fleebug",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    href: "https://facebook.com/fleebug",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        <div className="absolute top-20 left-16">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
            <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
          </div>
          <div className="flex space-x-1 mt-1 ml-2">
            <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
            <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Circle */}
        <div className="absolute top-16 right-1/3 w-3 h-3 border-2 border-purple-500 rounded-full opacity-60"></div>

        {/* Curved line bottom left */}
        <div className="absolute bottom-32 left-8">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="opacity-20"
          >
            <path
              d="M10 50 Q30 30 50 50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Lightning bolt top right */}
        <div className="absolute top-32 right-16">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-yellow-400 opacity-60"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="component-px py-10 relative z-10">
        <div className="">
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Logo and text */}
            <div className="space-y-8 flex flex-col items-center md:items-start">
              {/* Circular logo */}
              <div className="w-32 h-32 bg-yellow-400 rounded-full items-center justify-center relative hidden md:flex">
                <div className="absolute inset-2 border border-yellow-600 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-yellow-800 fill-current ml-1" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 128 128">
                    <defs>
                      <path
                        id="circle"
                        d="M 64,64 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      />
                    </defs>
                    <text className="text-xs font-medium fill-yellow-800">
                      <textPath href="#circle" startOffset="0%">
                        Fleebug
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
                  Let&apos;s work together
                </h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-lg text-center md:text-left">
                  Ready to bring your ideas to life? I&apos;m here to help you
                  create something amazing. Let&apos;s collaborate and build
                  your next project together.
                </p>
              </div>
            </div>

            {/* Right side - CTA button */}
            <div className="flex justify-center md:justify-end">
              <Link rel="stylesheet" href="/contact">
                <button className="bg-primary py-5 px-10 font-medium text-white rounded-xl flex items-center gap-2.5 hover:bg-primary-dark transition cursor-pointer">
                  <h4>Hire</h4>
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Contact and social info */}
          <div className="grid md:grid-cols-3 gap-8 items-end justify-center ">
            {/* Contact info */}
            <div className="flex flex-col gap-3 text-gray-300">
              <Link
                href={`tel:${contact.professionalPhone}`}
                target="_blank"
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <LuPhone size={20} className="" />
                <p className=" font-medium">{contact.professionalPhone}</p>
              </Link>
              <Link
                href={`mailto:${contact.personalEmail[1]}`}
                target="_blank"
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <HiOutlineMail size={20} className="" />
                <p className="font-medium">{contact.personalEmail[1]}</p>
              </Link>
              <Link
                href={`mailto:${contact.professionalEmail[0]}`}
                target="_blank"
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <FaBriefcase size={20} className="" />
                <p className="font-medium">{contact.professionalEmail[0]}</p>
              </Link>
            </div>

            {/* Social links */}
            <div className="md:col-span-2 flex flex-col md:flex-row items-center md:items-end md:justify-end space-y-4 space-x-4">
              <span className="text-gray-400 mr-4 hidden md:block">
                Follow me:
              </span>
              <div className="flex items-center gap-4">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-slate-800 text-gray-200 px-6 py-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} by Fleebug. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
