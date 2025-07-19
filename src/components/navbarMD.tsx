import NavbarData from "./navbardata";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="-top-10 navMD font-semibold bg-gradient-to-r from-white/0 to-amber-200/20 flex items-center justify-center fixed text-lg md:text-xl text-slate-300 gap-2 md:gap-8 z-10">
      <NavLink to="/">
        <div className="w-full flex flex-1 justify-between items-center">
          <motion.div
            animate={{
              scale: [0.4, 0.3, 0.4],
              transition: { duration: 2, repeat: Infinity },
            }}
            className="logo -mx-4"
          />
        </div>
      </NavLink>
      <div className="hidden md:flex gap-8">
        {NavbarData.map((link) => (
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "text-amber-400 text-xl lg:text-2xl transition-all duration-200"
                : "hover:scale-105 transition-all duration-200"
            }
            key={link.id}
            to={link.url}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default navbar;
