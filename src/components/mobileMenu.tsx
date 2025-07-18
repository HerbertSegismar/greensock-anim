import { useState } from "react";
import SideMenu from "./SideMenu";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false); // Start closed

  return (
    <div>
      <div className="md:hidden flex">
        <NavLink to="/">
          <div className="w-[80vw] md:w-full flex flex-1 justify-between items-center">
            <motion.div
              animate={{
                scale: [0.4, 0.3, 0.4],
                transition: { duration: 2, repeat: Infinity },
              }}
              className="logo mx-0 md:-mx-4"
            />
          </div>
        </NavLink>
        <button onClick={() => setIsSideMenuOpen(true)}>
          <Bars3Icon className="size-8 project-yellow mx-8" />
        </button>
      </div>
      <div className="md:hidden">
        {isSideMenuOpen && (
          <SideMenu
            isOpen={isSideMenuOpen}
            onClose={() => setIsSideMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
