import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Palette, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute top-32 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div> */}
        {/* <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce"></div> */}
        <div className="absolute bottom-12 left-1/4 w-16 h-16 bg-primary/10 rounded-full opacity-5 animate-pulse"></div>
        {/* <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-yellow-100 rounded-full opacity-20 animate-bounce"></div> */}
      </div>

      <div className="component-px relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-12 items-center pt-16">
            {/* Left side - Content */}
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-600">
                  Software Company
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We Build
                <br />
                <span className="md:text-[3.4rem] bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {/* Digital Dreams */}
                  Scalable Software
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Transforming ideas into powerful software solutions that drive
                innovation and growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 select-none">
                <Link
                  href="/contact"
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-3 text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span>Get your software</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#projects"
                  className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold text-base sm:text-lg text-center bg-white/50 backdrop-blur-sm"
                >
                  Explore Our Work
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    70+
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    55+
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    2+
                  </div>
                  <div className="text-sm text-gray-500 font-medium">Years</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual Elements */}
            <div className="hidden lg:block relative select-none">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Code editor mockup */}
                <div className="bg-gray-900 rounded-2xl p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-400 rounded w-3/4 animate-pulse"></div>
                    <div
                      className="h-2 bg-slate-300 rounded w-1/2 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="h-2 bg-slate-500 rounded w-2/3 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="h-2 bg-slate-400 rounded w-1/3 animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </div>
                </div>

                {/* Service icons */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-center group hover:bg-gray-100 transition-colors cursor-pointer">
                    <Palette className="w-8 h-8 text-gray-700 mx-auto mb-2 group-hover:scale-108 transition-transform" />
                    <div className="text-xs font-medium text-gray-600">
                      Design
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl text-center group hover:bg-slate-100 transition-colors cursor-pointer">
                    <Code className="w-8 h-8 text-slate-700 mx-auto mb-2 group-hover:scale-108 transition-transform" />
                    <div className="text-xs font-medium text-gray-600">
                      Development
                    </div>
                  </div>

                  <div className="bg-zinc-50 p-4 rounded-xl text-center group hover:bg-zinc-100 transition-colors cursor-pointer">
                    <Smartphone className="w-8 h-8 text-zinc-700 mx-auto mb-2 group-hover:scale-108 transition-transform" />
                    <div className="text-xs font-medium text-gray-600">
                      Mobile
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl shadow-lg animate-bounce"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-bl from-secondary to-gray-800 rounded-xl shadow-lg animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/30 to-gray-300/30 rounded-3xl transform -rotate-6 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
