import { skills } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-10 rounded" />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-indigo-500 hover:text-white transition-colors">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
