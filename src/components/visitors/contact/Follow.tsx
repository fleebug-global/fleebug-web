import React from "react";
import Link from "next/link";
import { LuFacebook, LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";

function Follow() {
  return (
    <div className="flex justify-between flex-col sm:flex-row gap-3 pt-6 pb-4 items-center ">
      <p className="text-gray-600">follow me on social media</p>

      <div className="flex items-cente gap-5">
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/fleebug"
          className="hover:text-blue-500 transition-all duration-300 ease-in-out"
        >
          <LuLinkedin size={20} />
        </Link>

        <Link
          target="_blank"
          href="https://github.com/fleebug"
          className="hover:text-gray-500 transition-all duration-300 ease-in-out"
        >
          <LuGithub size={20} />
        </Link>

        <Link
          target="_blank"
          href="https://www.facebook.com/fleebug"
          className="hover:text-blue-500 transition-all duration-300 ease-in-out"
        >
          <LuFacebook size={20} />
        </Link>

        <Link
          target="_blank"
          href="https://www.instagram.com/fleebug"
          className="hover:text-pink-500 transition-all duration-300 ease-in-out"
        >
          <LuInstagram size={20} />
        </Link>
      </div>
    </div>
  );
}

export default Follow;
