import NavbarData from "./NavbarData";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="-top-10 navLG font-semibold bg-gradient-to-r from-white/0 to-black/40 flex items-center justify-center fixed text-lg md:text-xl text-slate-300 gap-2 md:gap-8 z-10">
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
              `transition-all duration-200 ${
                isActive
                  ? "text-amber-400 text-xl"
                  : "hover:scale-105 text-slate-100"
              }`
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
