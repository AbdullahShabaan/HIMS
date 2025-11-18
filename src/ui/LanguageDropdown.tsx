import { useClickOutside } from "../hooks/useClickOutside";
import type { Language } from "../localization/LanguageContext";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from "../svgr/RightArrow.svg?react";
import ArrowForLightMode from "../svgr/ArrowForLightMode.svg?react";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

type LanguageDropdownProps = {
  currentLang: Language;
  onChange: (lang: Language) => void;
};

const LanguageDropdown = ({ currentLang, onChange }: LanguageDropdownProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => setOpen(false));

  const dropdownVariants = {
    hidden: { opacity: 0, y: -6, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -6,
      scale: 0.97,
      transition: { duration: 0.12, ease: "easeIn" },
    },
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
           items-center gap-2 px-2 text-sm py-2 flex rounded-xl border 
          border-gray-300 dark:border-gray-600 
          bg-white dark:bg-[#1f1f1f]
          text-gray-700 dark:text-gray-200 
          hover:bg-gray-50 dark:hover:bg-gray-700
          transition-all shadow-sm
        "
      >
        {languages.find((l) => l.code === currentLang)?.label ?? "Select"}

        <motion.span
          animate={{ rotate: open ? 270 : 90 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <>
            {/* Light Mode Icon */}
            <ArrowForLightMode className="w-5 h-6 block dark:hidden" />

            {/* Dark Mode Icon */}
            <ArrowIcon className="w-5 h-5 hidden dark:block" />
          </>
        </motion.span>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="
              absolute end-0 mt-2 w-44 rounded-xl overflow-hidden 
              bg-white dark:bg-[#1f1f1f] 
              border border-gray-200 dark:border-gray-700 
              shadow-lg z-50
            "
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {languages.map((lang, index) => (
              <li key={lang.code}>
                <button
                  onClick={() => {
                    onChange(lang.code);
                    setOpen(false);
                  }}
                  className={`
                    block w-full px-4 py-2 text-start 
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    transition 
                    ${lang.code === currentLang ? "font-bold" : ""}
                    ${
                      index < languages.length - 1
                        ? "border-b border-gray-200 dark:border-gray-700"
                        : ""
                    }
                  `}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageDropdown;
