import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import type { ReactNode } from "react";
import BackgroundGradientAnimation from "./components/ui/background-gradient-animation.tsx";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="">
          <BackgroundGradientAnimation>
            {children}
          </BackgroundGradientAnimation>
        </div>
      </main>
      <div className="text-sm md:text-lg flex text-center items-center justify-center text-slate-300 bg-purple-900">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
