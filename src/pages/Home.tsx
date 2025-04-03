import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      <div
        className="w-full md:w-[60%] h-[40vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/profile.jpg')" }}
      >
        <div className="w-full h-full bg-black bg-opacity-20"></div>
      </div>

      <div className="w-full md:w-[40%] flex flex-col justify-center items-start p-6 md:p-12 space-y-8 bg-white">
        <div>
          <p className="text-base sm:text-lg tracking-wide text-gray-500">Hi, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black">Aditya Kuchhal</h1>
          <p className="text-lg sm:text-xl mt-2 text-indigo-600">Python Developer & Data Analyst</p>
        </div>
            <nav className="space-y-3 text-base sm:text-lg font-semibold">
                <Link to="/about" className="block underline hover:text-indigo-600 transition">ABOUT</Link>
                <Link to="/experience" className="block underline hover:text-indigo-600 transition">WORK EXP</Link>
                <Link to="/projects" className="block underline hover:text-indigo-600 transition">PROJECTS</Link>
                <Link to="/contact" className="block underline hover:text-indigo-600 transition">CONTACT</Link>
            </nav>
      </div>
    </div>
  );
}
