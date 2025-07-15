import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import type { ReactNode } from "react";
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
        {children}
      </main>
      <div className="text-sm md:text-lg flex text-center items-center justify-center text-slate-300">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
