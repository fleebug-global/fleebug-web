/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { contact } from "@/data/contact";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState("pending") as any;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xvgbeygk", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }

    setTimeout(() => {
      setIsSubmitted("pending");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-32">
      <section className="py-20 bg-white">
        <div className="component-px">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
                Let&apos;s Talk
              </h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Ready to create something exceptional? We&apos;d love to discuss
                your project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-8 tracking-tight">
                  Get in touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 font-light mb-2">Email</p>
                    <a
                      href={`mailto:${contact.professionalEmail[0]}`}
                      className="text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {contact.professionalEmail[0]}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 font-light mb-2">Phone</p>
                    <a
                      href={`tel:${contact.professionalPhone}`}
                      className="text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {contact.professionalPhone}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 font-light mb-2">Location</p>
                    <p className="text-gray-900">{contact.address}</p>
                  </div>
                </div>
              </div>

              <div>
                {isSubmitted === true ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                      Thank you
                    </h3>
                    <p className="text-gray-500 font-light">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none bg-transparent placeholder-gray-400 text-gray-900 font-light"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none bg-transparent placeholder-gray-400 text-gray-900 font-light"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none bg-transparent placeholder-gray-400 text-gray-900 font-light"
                        placeholder="Project subject"
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none bg-transparent placeholder-gray-400 text-gray-900 font-light resize-none"
                        placeholder="Tell us about your business..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gray-900 text-white px-12 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium flex items-center space-x-3 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>

                    {isSubmitted === false && (
                      <p className="text-red-500 text-center mt-3 bg-red-50 py-4 px-6 rounded-lg font-light">
                        Failed to submit form!
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
