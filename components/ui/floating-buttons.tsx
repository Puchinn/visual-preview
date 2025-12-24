import { FloatingWsp } from "@/components/ui/floating-wsp";
import { InstagramFloatButton } from "@/components/ui/floating-instagram";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 items-center z-50 flex gap-3">
      <InstagramFloatButton />
      <FloatingWsp />
    </div>
  );
}
