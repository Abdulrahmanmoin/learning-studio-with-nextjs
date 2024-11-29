"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BackgroundBeamsDemo() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', { email, message });
  }

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">

      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl mt-40 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We’re here to support you with any questions about our courses, programs, or upcoming events. Reach out to us, and let’s take the next step in your creative journey together!
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-12 placeholder:pl-2"
            required
          />

          <label className="mt-16" htmlFor="text">Message</label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            id="text"
            placeholder="Enter Your Message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:pt-2 placeholder:pl-2"
            rows={5}
            required
          />

          <button
            type="submit"
            className="px-6 mt-4 cursor-pointer py-2 rounded-lg bg-zinc-500 text-white font-medium hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
