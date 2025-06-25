// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Automatización en Excel",
    description:
      "Macros y formularios personalizados para contabilidad, reportes y procesos administrativos.",
    tools: ["Excel", "VBA"],
  },
  {
    title: "Sistemas de Escritorio en C#",
    description:
      "Aplicaciones completas para ventas, préstamos, contabilidad y gestión.",
    tools: ["C#", "WinForms", "SQL Server"],
  },
  {
    title: "Asistentes Virtuales",
    description:
      "Asistentes con reconocimiento de voz, integración con APIs y respuestas personalizadas.",
    tools: ["Python", "edge-tts", "PySide6"],
  },
  {
    title: "Reportes y Consultas SQL",
    description:
      "Análisis de datos, creación de reportes contables, auditoría y optimización de bases de datos.",
    tools: ["SQL Server", "PostgreSQL"],
  },
];

const Services = () => {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">
        Servicios que ofrezco
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1c1c] p-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-300 mb-2">{service.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {service.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-white px-2 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
