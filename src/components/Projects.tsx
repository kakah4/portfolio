import { projects } from "@/data";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-10 rounded" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-indigo-500/50 transition-colors">
              <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 text-gray-400">
                <a href={project.github} target="_blank" className="text-sm hover:text-white transition-colors">Code</a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" className="flex items-center gap-1 text-sm hover:text-white transition-colors"><ExternalLink size={15} /> Live</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
