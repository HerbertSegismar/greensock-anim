import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarData from "./navbardata";
import SocialMediaIcons from "./SocialMediaIcons";
import Footer from "../components/footer.tsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar with clip path */}
      <nav className="-top-10 navMD font-semibold bg-gradient-to-r from-white/0 to-amber-200/20 flex items-center justify-center fixed text-lg md:text-xl text-slate-300 gap-2 md:gap-8 z-10">
        <NavLink to="/">
          <div className="w-full flex flex-1 justify-between items-center gap-[60vw]">
            <motion.div
              animate={{
                scale: [0.4, 0.3, 0.4],
                transition: { duration: 2, repeat: Infinity },
              }}
              className="logo -mx-8"
            />
            <div>
              {!open ? (
                <Bars3Icon
                  className="size-8 text-amber-300 cursor-pointer"
                  onClick={() => setOpen(true)}
                />
              ) : (
                <XMarkIcon
                  className="size-8 text-amber-300 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              )}
            </div>
          </div>
        </NavLink>
      </nav>

      {/* Overlay - separate from the clipped navbar */}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          className="fixed top-0 left-0 w-3/4 h-full bg-black/90 bg-opacity-90 z-50 pt-20"
        >
          <motion.div
            animate={{
              scale: [0.8, 0.3, 0.8],
              transition: { duration: 2, repeat: Infinity },
            }}
            className="logo place-self-center"
          />
          <div className="flex flex-col items-center justify-start gap-8 h-full">
            {NavbarData.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 text-xl lg:text-2xl transition-all duration-200"
                    : "text-white hover:scale-105 transition-all duration-200"
                }
                key={link.id}
                to={link.url}
                onClick={() => setOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
          <SocialMediaIcons className="absolute place-self-center bottom-20 z-100" />
          <div className="text-sm absolute bottom-0 flex text-center items-center justify-center text-white w-full">
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
