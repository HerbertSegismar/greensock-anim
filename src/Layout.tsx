import NavbarSM from "./components/navbarSM.tsx";
import NavbarMD from "./components/navbarMD.tsx";
import NavbarLG from "./components/navbarLG.tsx";
import Footer from "./components/footer.tsx";
import type { ReactNode } from "react";
import BackgroundGradientAnimation from "./components/ui/background-gradient-animation.tsx";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children}: LayoutProps) {

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto">
      <div className="md:hidden flex items-center justify-center">
        <NavbarSM />
      </div>
      <div className="hidden lg:hidden md:flex items-center justify-center">
        <NavbarMD />
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <NavbarLG />
      </div>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="overflow-y-scroll">
          <BackgroundGradientAnimation>
            <div className="relative z-50">{children}</div>
          </BackgroundGradientAnimation>
        </div>
      </main>
      <div 
      style={{bottom: 0}}
      className="text-sm md:text-lg flex text-center items-center justify-center text-slate-300 bg-purple-900">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
