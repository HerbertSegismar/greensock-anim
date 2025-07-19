import NavbarData from "./navbardata";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="-top-15 navLG font-semibold bg-gradient-to-r from-white/0 to-amber-200/20 hidden lg:flex items-center justify-center fixed text-2xl text-slate-300 gap-10 z-10">
      <NavLink to="/">
        <motion.div
          animate={{
            scale: [0.6, 0.4, 0.6],
            transition: { duration: 2, repeat: Infinity },
          }}
          className="logo -mx-4"
        />
      </NavLink>
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
    </nav>
  );
};

export default navbar;
