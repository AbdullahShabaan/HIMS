import Slider from "react-slick";
import ArrowButton from "../ui/ArrowButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useResponsiveSlides } from "../utils/useResponsiveSlides";
import { useState } from "react";
import Title from "./Title";
import TestimonialsCard from "./TestimonialsCard";
import assets from "../assets/assets";
import { useLanguage } from "../localization/useLanguage";

const Testimonials = () => {
  const { t } = useLanguage();

  const data = [
    {
      id: 1,
      name: "أحمد علي",
      job: "طالب في قسم نظم المعلومات",
      image: assets.StudentIcon,
      message:
        "الدراسة في المعهد ساعدتني أفهم الأساسيات بشكل قوي، وخلتني أطبق عملي في المشاريع. الدكاترة ممتازين جدًا ودايمًا بيشجعونا نتطور.",
    },
    {
      id: 2,
      name: "سارة محمد",
      job: "طالبة في قسم إدارة الأعمال",
      image: assets.StudentIcon,
      message:
        "اتعلمت طرق جديدة في التسويق الرقمي وعملت أول حملة إعلانية بنفسي. المحتوى كان بسيط وواضح والدعم مستمر طول الكورس.",
    },
    {
      id: 3,
      name: "سارة محمد",
      job: "طالبة في قسم إدارة الأعمال",
      image: assets.StudentIcon,
      message:
        "اتعلمت طرق جديدة في التسويق الرقمي وعملت أول حملة إعلانية بنفسي. المحتوى كان بسيط وواضح والدعم مستمر طول الكورس.",
    },
    {
      id: 4,
      name: "سارة محمد",
      job: "طالبة في قسم إدارة الأعمال",
      image: assets.StudentIcon,
      message:
        "اتعلمت طرق جديدة في التسويق الرقمي وعملت أول حملة إعلانية بنفسي. المحتوى كان بسيط وواضح والدعم مستمر طول الكورس.",
    },
    {
      id: 5,
      name: "محمد حسام",
      job: "طالب في قسم نظم المعلومات",
      image: assets.StudentIcon,
      message:
        "المعهد وفر بيئة قوية للتعلم العملي، واشتغلنا على مشاريع حقيقة ساعدتني أكوّن بورتفوليو قوي وقدرت أبدأ شغل في التدريب الصيفي.",
    },
  ];

  const { slidesToShow, windowWidth } = useResponsiveSlides(
    [
      { width: 600, slides: 1 },
      { width: 1000, slides: 2 },
      { width: 1180, slides: 3 },
    ],
    3 // default
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = data?.length ?? 0;
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
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
      <Title title={t("testimonials_title")} desc={t("testimonials_desc")} />
      <div className="container relative py-10">
        <div className="w-full px-2">
          <Slider {...settings}>
            {data?.map((testimonial, index) => (
              <TestimonialsCard key={index} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
