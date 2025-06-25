import React from "react";
import { Mail, Youtube, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Code With AngelV. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:angelvictoriano422@gmail.com"
            className="hover:text-white"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/codewithangelv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.youtube.com/@CodeWithAngel-m5m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
