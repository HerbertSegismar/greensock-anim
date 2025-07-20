import NavbarSM from "./components/navbarSM";
import NavbarMD from "./components/navbarMD";
import NavbarLG from "./components/navbarLG";
import Footer from "./components/footer";
import type { ReactNode } from "react";
import BackgroundGradientAnimation from "./components/ui/background-gradient-animation";

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
      <main className="flex flex-col items-center justify-center">
        <div className="overflow-y-scroll">
          <BackgroundGradientAnimation>
            <div className="relative z-50">{children}</div>
          </BackgroundGradientAnimation>
        </div>
      </main>
      <div 
      style={{bottom: 0}}
      className="text-sm md:text-lg flex items-center justify-center text-slate-300 bg-purple-900">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
