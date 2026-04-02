import { personalInfo } from "@/data";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-6 rounded mx-auto" />
        <p className="text-gray-400 mb-8">I am currently open to new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.</p>
        <a href={"mailto:" + personalInfo.email} className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-medium transition-colors mb-10">
          Say Hello
        </a>
        <div className="flex justify-center gap-6 text-gray-500 text-sm">
          <a href={personalInfo.github} target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={"mailto:" + personalInfo.email} className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </section>
  );
}
