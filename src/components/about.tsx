import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const about = () => {

  gsap.registerPlugin(useGSAP);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#shape", {
      x: 300,
      rotation: 360,
      duration: 3,
      backgroundColor: "oklch(100% 1 320)",
      ease: "power1.in",
      yoyo: true,
      repeat: 2,
    });
    tl.to("#shape", {
      y: 100,
      rotation: 180,
      borderRadius: "100%",
      duration: 3,
      backgroundColor: "oklch(74.262% 0.8 120)",
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    });
    tl.to("#shape", {
      y: 100,
      rotation: 720,
      borderRadius: "20%",
      backgroundColor: "oklch(50% 1 200)",
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, [container]);


  return (
    <div className="h-screen w-full flex flex-col z-100 items-center justify-center">
      <div
        id="shape"
        className="size-20"
      ></div>
    </div>
  );
}

export default about