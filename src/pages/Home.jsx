import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col justify-center items-center text-white px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Code with AngelV
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Soluciones modernas en desarrollo web, automatización y contabilidad
        computarizada. 🚀
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/projects"
          className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Ver Proyectos
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
