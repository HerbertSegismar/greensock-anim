import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavbarData from "./navbardata";
import SocialMediaIcons from "./SocialMediaIcons";
import Footer from "../components/footer.tsx";
import Globe from "./globe";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Navbar with clip path */}
      <nav className="-top-10 navMD font-semibold bg-gradient-to-r from-white/0 to-amber-200/20 flex items-center justify-center fixed text-lg md:text-xl text-slate-300 gap-2 md:gap-8 z-10">
        <div>
          <div className="w-full flex flex-1 justify-between items-center gap-[60vw]">
            <NavLink to="/">
              <motion.div
                animate={{
                  scale: [0.4, 0.3, 0.4],
                  transition: { duration: 2, repeat: Infinity },
                }}
                className="logo -mx-8"
              />
            </NavLink>
            <div>
              {!open ? (
                <Bars3Icon
                  className="size-8 text-amber-300 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setOpen(true)}
                />
              ) : (
                <XMarkIcon
                  className="size-8 text-amber-300 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay with proper exit animations */}
      <AnimatePresence>
        {open && (
          <>
            {/* Semi-transparent overlay */}
            <motion.div
              key="overlay"
              animate={{ opacity: [0, 0.5] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="navbar-overlay"
              ref={sidebarRef}
              animate={{
                opacity: [0, 1],
                x: ["-100%", "0%"],
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              exit={{
                opacity: 0,
                x: "-100%",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="fixed top-0 left-0 w-3/4 h-full bg-black/90 z-50 pt-20"
            >
              <div className="h-full flex flex-col">
                <motion.div
                  animate={{
                    scale: [0.8, 0.3, 0.8],
                    transition: { duration: 2, repeat: Infinity },
                  }}
                  className="logo mx-auto mb-4 -mt-10"
                />

                <div className="flex-1 flex flex-col items-center justify-start gap-8">
                  {NavbarData.map((link) => (
                    <div key={link.url}>
                      <NavLink
                        className={({ isActive }: { isActive: boolean }) =>
                          isActive
                            ? "text-amber-400 text-xl lg:text-2xl"
                            : "text-white text-xl lg:text-2xl"
                        }
                        to={link.url}
                        onClick={() => setOpen(false)}
                      >
                        {link.text}
                      </NavLink>
                    </div>
                  ))}
                </div>
                <div className="absolute -z-100 rounded-full" style={{right: "0%", top: "33%"}}>
                  <Globe />
                </div>
                <div className="pb-72 flex flex-col items-center gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="z-100"
                  >
                    <SocialMediaIcons />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bottom-2 fixed text-center w-full px-4 text-xs"
                  >
                    <Footer />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
