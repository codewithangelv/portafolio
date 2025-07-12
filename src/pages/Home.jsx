import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 z-10 overflow-hidden">
      {/* Fondo animado simple */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20232a] via-[#1e2b3b] to-[#0a0f0f] opacity-90 -z-10 animate-background" />

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-[#61dafb] drop-shadow-[0_0_10px_#61dafb]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a <br />
        <span className="bg-gradient-to-r from-[#61dafb] to-[#4fd1c5] bg-clip-text text-transparent animate-pulse">
          Code With AngelV
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 mt-6 max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Desarrollador apasionado por crear soluciones digitales inteligentes,
        intuitivas y con estilo.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          to="/projects"
          className="bg-[#61dafb] text-[#20232a] font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-[0_0_15px_#61dafb88] transition-all duration-300"
        >
          Ver Proyectos
        </Link>
        <Link
          to="/contact"
          className="border border-[#61dafb] text-[#61dafb] px-6 py-3 rounded-lg hover:bg-[#61dafb22] transition duration-300"
        >
          Contáctame
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;

/* Agrega esto a tu CSS global o Tailwind config si no lo tienes ya:
@keyframes background {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-background {
  background-size: 200% 200%;
  animation: background 15s ease infinite;
}
*/
