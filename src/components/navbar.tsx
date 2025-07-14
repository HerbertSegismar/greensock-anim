import NavbarData from "./navbardata";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="w-full h-20 bg-amber-50 flex items-center justify-center gap-4 fixed top-0 drop-shadow-xl text-xl text-slate-600">
      <motion.div
        animate={{
          scale: [0.5, 0.3, 0.5],
          transition: { duration: 2, repeat: Infinity },
        }}
        className="logo"
      />
      {NavbarData.map((link) => (
        <NavLink 
        className={({ isActive }) => (isActive ? "text-amber-400 text-[22px] transition-all duration-200" : "")}
        key={link.id} to={link.url}>
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default navbar;
