import React from "react";
import { motion } from "framer-motion";

const Title = ({ title, desc }) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl text-center font-medium"
      >
        {title}
      </motion.h1>
      <span className="block w-24 h-1 mx-auto my-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6"
      >
        {desc}
      </motion.p>
    </>
  );
};

export default Title;
