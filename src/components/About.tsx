import { personalInfo } from "@/data";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-8 rounded" />
        <div className="grid md:grid-cols-2 gap-10 text-gray-400">
          <div>
            <p className="leading-relaxed mb-4">{personalInfo.bio}</p>
            <p className="leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source, or sharpening my problem-solving skills.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-indigo-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-indigo-400 font-medium">Email:</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-indigo-400 font-medium">Status:</span>
              <span className="text-green-400">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}