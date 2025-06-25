// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="px-4 max-w-3xl mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-6 text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre mí
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        ¡Hola! Soy Ángel Victoriano, desarrollador autodidacta con más de 6 años
        de experiencia escribiendo código y resolviendo problemas reales. Aunque
        no tengo un título formal en informática, he construido sistemas
        funcionales para ventas, préstamos, automatizaciones y asistentes
        virtuales que mejoran la productividad.
      </motion.p>

      <motion.p
        className="text-gray-400 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Comencé desde cero, aprendiendo por pasión y necesidad, combinando
        lógica, práctica y mucha perseverancia. Hoy puedo crear soluciones en
        C#, Excel VBA, SQL, Python y React. Me gusta construir software útil,
        elegante y eficiente.
      </motion.p>

      <motion.p
        className="text-gray-500 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        "No importa de dónde vengas, sino lo que eres capaz de construir con tus
        propias manos."
      </motion.p>
    </div>
  );
};

export default About;
