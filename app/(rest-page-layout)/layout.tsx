import { Footer } from "@/components/layout/footer";
import { Navbar } from "./navbar";
import { FloatingWsp } from "@/components/ui/floating-wsp";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-white bg-white">
      <header className="w-full sticky top-0 text-black z-50 shadow bg-white">
        <Navbar />
      </header>
      {children}
      <Footer />
      <FloatingWsp />
    </div>
  );
}
