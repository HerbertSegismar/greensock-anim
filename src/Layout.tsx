import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import type { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <div className="text-lg flex text-center items-center justify-center text-amber-300">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
