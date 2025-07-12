import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="px-4 max-w-3xl mx-auto py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-[#61dafb]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre mí
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        ¡Hola! Soy <strong>Ángel Victoriano</strong>, desarrollador con más de{" "}
        <strong>6 años de experiencia</strong> escribiendo código con el
        objetivo de crear soluciones reales y efectivas. Mi trayectoria comenzó
        con <strong>Excel VBA</strong>, donde descubrí el poder de automatizar
        procesos. Desde entonces, fue naciendo en mí la necesidad y la
        curiosidad por crear cosas nuevas e interesantes, lo que me motivó a
        seguir aprendiendo y buscando nuevas tecnologías para evolucionar y
        mantenerme a la vanguardia.
      </motion.p>

      <motion.p
        className="text-gray-400 mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        A lo largo del camino he realizado diversos cursos especializados,
        fortaleciendo mis habilidades en <strong>C#</strong>,{" "}
        <strong>SQL Server</strong>, <strong>React</strong>,{" "}
        <strong>Python</strong>, <strong>VBA</strong> y más. Me enfoco en
        construir herramientas funcionales, modernas y bien pensadas que
        resuelvan problemas del mundo real.
      </motion.p>

      <motion.p
        className="text-[#61dafb] italic border-l-4 border-[#61dafb] pl-4 text-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        “La tecnología es el puente entre lo que imaginas y lo que haces
        posible.”
      </motion.p>
    </div>
  );
};

export default About;
