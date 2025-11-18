import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { useLanguage } from "../localization/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const servicesData = [
    {
      title: t("services_business_program"),
      description: t("services_business_desc"),
      icon: assets.business,
    },
    {
      title: t("services_bis_program"),
      description: t("services_bis_desc"),
      icon: assets.computer,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt={t("services_bg_alt")}
        className="absolute -top-40 -start-70 dark:hidden "
      />

      <div className="z-10">
        <Title title={t("services_title")} desc={t("services_desc")} />
      </div>
      <div className="flex flex-col lg:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
