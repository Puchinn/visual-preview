import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "./site-header";
import { FloatingButtons } from "@/components/ui/floating-buttons";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-white bg-white">
      <SiteHeader />
      {children}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
