/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  IoBusinessOutline,
  IoChatboxOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import Follow from "./Follow";
import { sendMessage } from "@/app/actions/messages.action";

interface FormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  reality?: string;
}

export default function ContactForm() {
  const [serverResponse, setServerResponse] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setServerResponse("sending...");

      const response = await sendMessage(data);

      if (response.success) {
        setServerResponse("Message sent successfully");
        reset();
        setTimeout(() => {
          setServerResponse("");
        }, 3000);
      } else {
        setServerResponse(response.message || "An error occurred");
      }
    } catch (error: any) {
      console.error(error);
      setServerResponse(
        "Cannot connect to the server. " + String(error.message)
      );
    }
  };

  return (
    <div className="border-0 border-red-500 w-full sm:w-[50%] max-w-[650px] flex flex-col justify-center px-8 sm:px-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contactForm rounded-3xl flex flex-col gap-5 w-full py-10"
      >
        <div className="grid grid-cols-2 gap-5 justify-center w-full">
          <div className="col-span-2 lg:col-span-1 bg-[#f7f7fa] rounded-xl flex items-center relative">
            <input
              type="text"
              placeholder="full name"
              {...register("fullName", { required: "Full name is required" })}
              className="bg-transparent p-4 w-full outline-none placeholder-[#5a5a5a] focus:outline-[#7050ef] rounded-xl"
            />

            <IoPersonOutline className="absolute right-5" />
          </div>

          <div className="col-span-2 lg:col-span-1 bg-[#f7f7fa] rounded-xl flex items-center relative">
            <input
              type="email"
              placeholder="email"
              {...register("email")}
              required
              className="bg-transparent p-4 w-full outline-none placeholder-[#5a5a5a] focus:outline-[#7050ef] rounded-xl"
            />

            <IoMailOutline className="absolute right-5" />
          </div>

          <div className="col-span-2 lg:col-span-1 bg-[#f7f7fa] rounded-xl flex items-center relative">
            <input
              type="text"
              placeholder="company (optional)"
              {...register("company")}
              className="bg-transparent p-4 w-full outline-none placeholder-[#5a5a5a] focus:outline-[#7050ef] rounded-xl"
            />

            <IoBusinessOutline className="absolute right-5" />
          </div>

          <div className="col-span-2 lg:col-span-1 bg-[#f7f7fa] rounded-xl flex items-center relative">
            <input
              type="text"
              placeholder="subject (optional)"
              {...register("subject")}
              className="bg-transparent p-4 w-full outline-none placeholder-[#5a5a5a] focus:outline-[#7050ef] rounded-xl"
            />

            <IoChatboxOutline className="absolute right-5" />
          </div>

          <div className="col-span-2 bg-[#f7f7fa] rounded-xl flex items-center relative">
            <textarea
              rows={5}
              placeholder="message"
              {...register("message", {
                required: { value: true, message: "Please enter a message!" },
                minLength: {
                  value: 7,
                  message: "Please enter a valid message!",
                },
              })}
              className="bg-transparent p-4 w-full outline-none placeholder-[#5a5a5a] focus:outline-[#7050ef] rounded-xl resize-none"
            />
          </div>
        </div>

        <input type="text" {...register("reality")} className="hidden" />

        {errors.message && <p> {errors.message.message} </p>}

        <div className="flex flex-col gap-5 items-center lg:flex-row">
          <input
            type="submit"
            disabled={isSubmitting}
            value={"send message"}
            className="bg-primary hover:bg-primaryDark transition cursor-pointer text-white px-7 py-4 rounded-xl send-msg-btn disabled:bg-blue-900"
          />

          {serverResponse && <p>{serverResponse}</p>}
        </div>
      </form>

      <Follow />
    </div>
  );
}
