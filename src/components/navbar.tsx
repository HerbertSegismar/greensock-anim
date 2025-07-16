import NavbarData from "./navbardata";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="-top-10 navBG font-semibold bg-gradient-to-r from-white to-amber-200 flex items-center justify-center fixed text-lg lg:text-xl text-slate-700 gap-2 md:gap-8">
      <NavLink to="/">
        <motion.div
          animate={{
            scale: [0.4, 0.3, 0.4],
            transition: { duration: 2, repeat: Infinity },
          }}
          className="logo -mx-4"
        />
      </NavLink>
      {NavbarData.map((link) => (
        <NavLink
          className={({ isActive }) =>
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
    </nav>
  );
};

export default navbar;
