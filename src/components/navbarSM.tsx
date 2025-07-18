import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  const [open, setOpen] = useState(false);
  return (
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
          {!open && (
            <div className="size-8 text-amber-300">
              <Bars3Icon onClick={() => setOpen(true)} />
            </div>
          )}
          {open && (
            <div className="size-8 text-amber-300">
              <XMarkIcon onClick={() => setOpen(false)} />
            </div>
          )}
        </div>
      </NavLink>
    </nav>
  );
};

export default navbar;
