import { personalInfo } from "@/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl text-center">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I am <span className="text-indigo-400">{personalInfo.name}</span>
        </h1>
        <p className="text-xl text-gray-400 mb-4">{personalInfo.title}</p>
        <p className="text-gray-500 mb-8 leading-relaxed">{personalInfo.bio}</p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">View My Work</a>
          <a href="#contact" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">Contact Me</a>
        </div>
        <div className="flex gap-5 justify-center mt-8 text-gray-500 text-sm">
          <a href={personalInfo.github} target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={"mailto:" + personalInfo.email} className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </section>
  );
}
