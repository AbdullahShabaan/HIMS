import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { useLanguage } from "../localization/useLanguage";

const TrustedBy = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-8 text-gray-700 dark:text-white/80"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center font-bold text-lg sm:text-xl md:text-2xl"
      >
        {t("trusted_heading")}
      </motion.h3>
      <span className="block mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>

      {/* Logo + Description */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 w-full max-w-4xl"
      >
        {/* Ministry Logo */}
        <motion.img
          src={assets.second_logo}
          alt={t("trusted_logo_alt")}
          className="w-36 sm:w-40 md:w-40 object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        />

        {/* Description */}
        <p className="text-center md:w-[70%] md:text-left text-sm sm:text-base text-gray-500 dark:text-gray-300">
          {t("trusted_description")}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default TrustedBy;
