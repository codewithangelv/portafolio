// src/components/Logo.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const [text, setText] = useState("");
  const fullText = "Code With AngelV";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      className="text-[#A259FF] text-xl sm:text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_0_6px_#C084FC]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
      <span className="animate-pulse text-[#A259FF] opacity-80">|</span>
    </motion.h1>
  );
};

export default Logo;
