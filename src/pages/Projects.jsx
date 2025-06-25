// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import ventasImg from "../assets/ventas.png";
import prestamosImg from "../assets/prestamos.png";
import excelImg from "../assets/excel.png";
import venusImg from "../assets/venus.png";

const projects = [
  {
    title: "Sistema de Ventas",
    description:
      "Gestión completa de productos, ventas, impresión de tickets, e informes contables. Arquitectura en capas con impresión ESC/POS.",
    tech: ["C#", "SQL Server", "WinForms"],
    image: ventasImg,
    github: "#",
  },
  {
    title: "Gestor de Préstamos",
    description:
      "Seguimiento de clientes, pagos, intereses, amortización e historial. Interfaz clara y práctica.",
    tech: ["C#", "SQL Server", "WinForms"],
    image: prestamosImg,
    github: "#",
  },
  {
    title: "Automatizaciones en Excel VBA",
    description:
      "Reportes contables automatizados, balance general, estado de resultados, diario y mayor con formularios.",
    tech: ["Excel", "VBA"],
    image: excelImg,
    github: "#",
  },
  {
    title: "Asistente Virtual Venus",
    description:
      "Reconocimiento de voz, control por comandos, integración con APIs y visualización animada. Proyecto en desarrollo.",
    tech: ["Python", "edge-tts", "PySide6"],
    image: venusImg,
    github: "#",
  },
];

const Projects = () => {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1c1c] p-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="h-28 w-auto mx-auto mb-4 rounded shadow-md"
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-700 text-white px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
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
