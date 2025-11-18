import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { useResponsiveSlides } from "../utils/useResponsiveSlides";
import ArrowButton from "../ui/ArrowButton";
import Slider from "react-slick";
import { useLanguage } from "../localization/useLanguage";

const LatestNews = () => {
  const { t } = useLanguage();

  const workData = [
    {
      title: t("news_programming_course"),
      description: t("news_programming_date"),
      image: assets.asp_logo,
    },
    {
      title: t("news_mobile_app"),
      description: t("news_mobile_description"),
      image: assets.work_mobile_app,
    },
    {
      title: t("news_mobile_course"),
      description: t("news_mobile_description"),
      image: assets.work_mobile_app,
    },
    {
      title: t("news_mobile_app"),
      description: t("news_mobile_description"),
      image: assets.work_mobile_app,
    },
    {
      title: t("news_mobile_course"),
      description: t("news_mobile_description"),
      image: assets.work_mobile_app,
    },
    {
      title: t("news_mobile_app"),
      description: t("news_mobile_description"),
      image: assets.work_mobile_app,
    },
    {
      title: t("news_mobile_course"),
      description: t("news_mobile_description"),
      image: assets.work_mobile_app,
    },
    {
      title: t("news_frontend_course"),
      description: t("news_frontend_description"),
      image: assets.work_dashboard_management,
    },
    {
      title: t("news_fitness_promotion"),
      description: t("news_fitness_description"),
      image: assets.work_fitness_app,
    },
  ];

  const { slidesToShow, windowWidth } = useResponsiveSlides(
    [
      { width: 600, slides: 1 },
      { width: 1000, slides: 2 },
      { width: 1180, slides: 3 },
    ],
    3
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = workData.length;
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= totalSlides - slidesToShow;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: windowWidth >= 1180 ? 3 : 1,
    accessibility: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    nextArrow:
      windowWidth >= 1180 ? (
        <ArrowButton direction="right" disabled={isLastSlide} />
      ) : (
        <></>
      ),
    prevArrow:
      windowWidth >= 1180 ? (
        <ArrowButton direction="left" disabled={isFirstSlide} />
      ) : (
        <></>
      ),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center z-100 gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title title={t("news_latest_title")} desc={t("news_latest_desc")} />

      <div className="w-full max-w-5xl z-10">
        <Slider {...settings}>
          {workData.map((work, index) => (
            <div key={index} className="px-2 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full hover:scale-102 duration-500 transition-all cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden h-[250px] bg-gray-300 shadow">
                  <img
                    src={work.image}
                    className="w-full h-full "
                    alt={work.title || t("news_default_alt")}
                  />
                </div>
                <h3 className="mt-3 mb-2 text-lg font-semibold">
                  {work.title}
                </h3>
                <p className="text-sm opacity-60">{work.description}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default LatestNews;
