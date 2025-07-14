import Heart from "./components/heart.tsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";

function App() {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#heart", {
      x: 100,
      rotation: 360,
      duration: 2,
      ease: "power1.in",
      yoyo: true,
      repeat: 2,
    });
    tl.from("#heart", {
      y: 100,
      rotation: 180,
      duration: 2,
      ease: "power1.out",
      yoyo: true,
      repeat: -1,
    });
  }, [container]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="text-3xl font-bold text-blue-500"
      >
        Hello from Tailwind
      </motion.h1>
      <div id="heart">
        <Heart />
      </div>
    </div>
  );
}

export default App;
