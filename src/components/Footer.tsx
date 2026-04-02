import { personalInfo } from "@/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-600 text-sm">
      <p>Designed & Built by <span className="text-indigo-400">{personalInfo.name}</span> · {new Date().getFullYear()}</p>
    </footer>
  );
}