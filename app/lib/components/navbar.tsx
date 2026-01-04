import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Button from "./ui/button";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Customer Service",
    href: "/customer-service",
  },
];
export default function NavBar() {
  const [isMobileNavActive, SetIsMobileNavActive] = useState(false);
  function menuClick() {
    SetIsMobileNavActive(!isMobileNavActive);
  }

  return (
    <div className="container flex flex-row justify-between items-center relative mt-6 z-50">
      <div className="flex flex-row items-center gap-2 z-50">
        <img
          src="/caspel-hotel-icon.svg"
          alt="Caspel hotel logo"
          className="lg:w-14 lg:h-14 w-10 h-10"
        />
        <p className="text-4xl text-white lg:text-5xl font-logo">Caspel</p>
      </div>
      <ul className="hidden lg:flex absolute top-1/2 left-1/2 -translate-1/2 flex-row gap-4 bg-white py-2.5 px-5 rounded-[10px]">
        {navLinks.map((navLink, index) => (
          <li
            key={index}
            className="py-1.5 px-4 text-main relative group/navLink cursor-pointer"
          >
            <span className="absolute bottom-0 left-1/2 delay-150 -translate-x-1/2 h-0.5 w-0 transition-all duration-150 bg-main group-hover/navLink:w-full"></span>
            <a href={navLink.href}>{navLink.name}</a>
          </li>
        ))}
      </ul>
      <button
        onClick={menuClick}
        className="cursor-pointer block lg:hidden bg-main p-2 z-50 text-white"
      >
        <AnimatePresence mode="wait">
          {isMobileNavActive ? (
            <motion.div
              initial={{ opacity: 0, rotate: 40 }}
              animate={{ opacity: 1, rotate: 0 }}
              key="close"
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, rotate: 40 }}
              animate={{ opacity: 1, rotate: 0 }}
              key="open"
            >
              <Menu size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isMobileNavActive ? <MobileNavBar /> : null}
      </AnimatePresence>

      <Button
        name="Login Button"
        onClick={() => alert("doesnt do anything")}
        variants="Primary"
        className="hidden lg:block"
      >
        Login
      </Button>
    </div>
  );
}

export function MobileNavBar() {
  return (
    <motion.ul
      initial={{ translateY: -40, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: -40, opacity: 0 }}
      key="modal"
      className="top-14 lg:hidden left-1/2 -translate-x-1/2 absolute w-[calc(100%-40px)] rounded-md py-4 px-6 bg-white"
    >
      {navLinks.map((navLink, index) => (
        <li
          key={index}
          className="py-1.5 px-4 text-main relative group/navLink cursor-pointer"
        >
          <span className="absolute bottom-0 left-1/2 delay-150 -translate-x-1/2 h-0.5 w-0 transition-all duration-150 bg-main group-hover/navLink:w-full"></span>
          <a href={navLink.href}>{navLink.name}</a>
        </li>
      ))}
    </motion.ul>
  );
}
