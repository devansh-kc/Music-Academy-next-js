"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function SubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-bold">
          {" "}
          Contact Us
        </h1>
        <p className="text-xl m-4 text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form className="space-y-4 mt-4" onSubmit={SubmitHandler}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg  border bg-white text-black      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
