import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative bg-[#20232a] min-h-screen overflow-hidden text-white px-4 py-16 md:px-12">
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle left-[10%] top-[20%] opacity-50"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle left-[40%] top-[60%] opacity-60"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle left-[70%] top-[30%] opacity-40"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle left-[80%] top-[80%] opacity-70"></div>
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#61dafb] mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mis Proyectos
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {Array.isArray(projects) &&
          projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#282c34] rounded-xl p-6 border border-[#61dafb33] shadow-md hover:shadow-[0_0_16px_#61dafb66] hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <img
                src={project.image_url}
                alt={project.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-[#61dafb] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {typeof project.tags === "string"
                  ? project.tags.split(",").map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#61dafb] text-[#20232a] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag.trim()}
                      </span>
                    ))
                  : Array.isArray(project.tags) &&
                    project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#61dafb] text-[#20232a] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#61dafb] hover:underline text-sm"
              >
                Ver en GitHub
              </a>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;

// 👇 Agrega esto en tu index.css o tailwind.css
// @keyframes twinkle {
//   0%, 100% { opacity: 0.2; transform: scale(1); }
//   50% { opacity: 0.8; transform: scale(1.2); }
// }
// .animate-twinkle {
//   animation: twinkle 2s ease-in-out infinite;
// }
