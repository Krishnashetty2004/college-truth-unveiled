import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import MobileHeader from "@/components/MobileHeader";
import MobileBottomNav from "@/components/MobileBottomNav";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      {isMobile ? (
        <>
          {/* Mobile Layout */}
          <MobileHeader />
          <main className="pb-20">
            {children}
          </main>
          <MobileBottomNav />
        </>
      ) : (
        <>
          {/* Desktop Layout */}
          <Navbar />
          <main className="pl-14">
            {children}
          </main>
        </>
      )}
    </div>
  );
};

export default AppLayout;
