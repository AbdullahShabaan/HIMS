import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { useLanguage } from "../localization/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700"
      >
        <span className="text-sm font-semibold text-gray-800 dark:text-white">
          25,023+
        </span>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-300">
          {t("hero_graduated_students")}
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[83px] font-medium xl:leading-[95px] max-w-5xl"
      >
        <span className="bg-gradient-to-r from-primary to-[#4039a1] bg-clip-text text-transparent">
          {t("hero_hims")}
        </span>{" "}
        {t("hero_hims_full")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        {t("hero_description")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={assets.hero_img}
          alt={t("hero_image_alt")}
          className="w-full max-w-6xl relative z-10 rounded-xl"
        />
        <img
          src={assets.bgImage1}
          alt={t("hero_bg_alt")}
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 z-1 dark:hidden"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
