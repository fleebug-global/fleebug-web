import React from "react";
import { CgFileDocument } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="w-full bg-primary min-h-[650px] sm:min-h-[550px] md:h-screen flex justify-center py-12 md:py-0 "
    >
      <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-20 w-full max-w-[1200px] h-full px-6">
        <div className="md:col-span-2 flex flex-col justify-center items-center gap-6 sm:px-12">
          <div className="h-96 w-80 bg-secondary flex flex-col justify-start items-end gap-5">
            <h2 className="text-9xl scale-150 text-primary font-semibold">
              2.5
            </h2>

            <h2 className="font-semibold text-lg ">Years of Experience</h2>

            <h2 className="text-[50px] font-bold text-primary">WEB DEV</h2>
          </div>
        </div>

        <div className="col-span-3 border-0 border-green-500 h-full flex flex-col justify-center items-center sm:px-2">
          <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-semibold text-white">About Me</h2>
              <div className="w-24 h-[1px] bg-white mt-5"></div>
            </div>

            <p className="text-[#b9a2f9]">
              Software engineer with 2.5+ years of experience in software
              development. I have a passion for coding and love to create new
              things. I am a quick learner, always looking for new challenges.
            </p>

            <div className="flex flex-wrap items-center text-nowrap gap-8 my-2">
              <Link
                href="/documents/about.pdf"
                download={true}
                className="bg-white py-3.5 px-10 rounded-2xl font-semibold text-[#323232] flex items-center gap-2.5 hover:bg-[#323232] hover:text-white transition"
              >
                <h2>Download CV</h2>
                <CgFileDocument size={22} />
              </Link>

              <Image src="/signature.png" alt={""} height={10} width={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
