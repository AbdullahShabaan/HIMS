import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { useLanguage } from "../localization/useLanguage";

const Footer = ({ theme }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Footer Top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt={t("footer_logo_alt")}
            className="w-32 sm:w-44"
          />

          <p className="max-w-md leading-6">{t("footer_desc")}</p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#about">
                {t("footer_about")}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#departments">
                {t("footer_departments")}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#news">
                {t("footer_news")}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact">
                {t("footer_contact")}
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">{t("footer_newsletter_title")}</h3>
          <p className="text-sm mt-2 mb-6">{t("footer_newsletter_desc")}</p>

          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder={t("footer_newsletter_placeholder")}
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6">
              {t("footer_newsletter_button")}
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>{t("footer_rights")}</p>

        <p>
          <a href="https://amdadislam.netlify.app/">
            {t("footer_developed_by")}
          </a>
        </p>

        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="facebook" />
          <img src={assets.twitter_icon} alt="twitter" />
          <img src={assets.instagram_icon} alt="instagram" />
          <img src={assets.linkedin_icon} alt="linkedin" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
