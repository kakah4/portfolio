"use client";
import { personalInfo } from "@/data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-white text-lg">{personalInfo.name}</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}