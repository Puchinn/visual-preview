import Image from "next/image";

export function FloatingWsp() {
  return (
    <a
      href="https://wa.me/5491173593738"
      target="_blank"
      className="fixed bottom-5 right-5 z-50"
    >
      <Image
        className="w-[65px] md:w-[80px] h-auto"
        src="/wpp-icon.webp"
        alt="WhatsApp"
        title="WhatsApp"
        width={80}
        height={80}
      />
    </a>
  );
}
