import Link from "next/link";
import { contact } from "../../../data/contact";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";

function Intro() {
  return (
    <div className="border-0 border-blue-600 w-full sm:w-[45%] flex justify-center px-12 sm:px-5">
      <div className="flex flex-col gap-3 py-10">
        <div className="w-[70px] h-[4px] bg-[#7050ef]"></div>

        <h1 className="font-bold text-5xl tracking-wide">
          let&apos;s work <br /> together
        </h1>

        <p className=" py-5 max-w-[400px] leading-7">
          {" "}
          Need a Software Developer for your company or organization ? Please
          leave a message here. We will contact you asap.{" "}
        </p>

        <div className="flex flex-col gap-3 text-gray-700">
          <Link
            href={`tel:${contact.professionalPhone}`}
            target="_blank"
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <LuPhone size={20} className="text-primary" />
            <p className=" font-medium">{contact.professionalPhone}</p>
          </Link>
          <Link
            href={`mailto:${contact.personalEmail[1]}`}
            target="_blank"
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <HiOutlineMail size={20} className="text-primary" />
            <p className="font-medium">{contact.personalEmail[1]}</p>
          </Link>
          <Link
            href={`mailto:${contact.professionalEmail[0]}`}
            target="_blank"
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <FaBriefcase size={20} className="text-primary" />
            <p className="font-medium">{contact.professionalEmail[0]}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
