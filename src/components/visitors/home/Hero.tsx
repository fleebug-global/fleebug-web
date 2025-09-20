import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export default function HeroSection() {
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

  return (
    <section className="relative w-full h-[100dvh] flex justify-center component-px">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full h-full">
        <div className="h-full flex flex-col justify-center gap-6 max-sm:px-0 px-16">
          <div className="flex flex-col justify-center gap-6 ">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-2xl sm:text-4xl sm:tracking-wide">
                Fleebug
              </h1>
              <div className="flex items-center gap-2 font-medium text-nowrap">
                <div className="pt-[1.5px] bg-[#323232] w-16"></div>
                <h2>Software Company</h2>
              </div>
            </div>

            <h3 className="text-[#5a5a5a] text-sm sm:text-base leading-relaxed">
              Specializing in Node.js & Next.js, I transform ideas into scalable
              software solutions.
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-12">
              <Link rel="stylesheet" href="/contact">
                <button className="bg-primary py-3 px-7 font-medium text-white rounded-xl flex items-center gap-2.5 hover:bg-primary-dark transition cursor-pointer">
                  <h4>Hire</h4>
                  <CiLocationArrow1 size={22} />
                </button>
              </Link>

              <Link rel="stylesheet" href="/projects">
                <button className="py-3 font-semibold rounded-xl flex items-center gap-3 text-nowrap cursor-pointer group">
                  <h4>Featured Works</h4>
                  <GoArrowUpRight
                    size={20}
                    className="rotate-45 group-hover:rotate-0 transition-all duration-300"
                  />
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-12 sm:bottom-14 flex flex-col sm:flex-row sm:items-center gap-4 font-medium text-sm sm:tracking-wide ">
            <h4>Connect with me:</h4>

            <div className="flex items-center gap-2">
              {links.map((link, index) => (
                <Link href={link.href} target="_blank" key={index}>
                  <div className="h-10 w-10 rounded-full bg-[#f6f6f6] flex items-center justify-center hover:bg-[#323232] hover:text-white transition-all duration-300 cursor-pointer">
                    {link.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
