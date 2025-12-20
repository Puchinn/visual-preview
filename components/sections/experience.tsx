import { CheckIcon, QualityIcon, TimeIcon } from "@/components/feature-icons";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("@/components/video"), { ssr: false });

export function Experience() {
  return (
    <section
      id="experience"
      className="text-center py-6 overflow-hidden relative py-3 lg:py-10 text-white"
    >
      <h2 className="sr-only">Experiencia</h2>
      <p className="text-[68px] leading-14 lg:leading-none lg:text-9xl font-dirtylane">
        Somos Expertos
      </p>
      <p className="text-xl lg:text-4xl uppercase">
        Más de 30 años imprimiendo calidad
      </p>

      <div className="w-full max-w-6xl mx-auto my-10">
        <div className="relative object-cover w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-900">
          <Video />
        </div>
      </div>

      <div className="flex pt-5 items-center md:flex-row flex-wrap md:items-stretch justify-center pb-8 gap-3 lg:gap-10">
        <div className="md:w-full max-w-[350px] rounded-md py-4 px-6 space-y-5">
          <div className="w-full text-slate-400 flex justify-center">
            <QualityIcon variant="dot" scale={3} />
          </div>
          <p className="text-white text-base font-bold lg:text-2xl">Calidad</p>
        </div>

        <div className="md:w-full max-w-[350px] rounded-md py-4 px-6 space-y-5">
          <div className="w-full text-slate-400 flex justify-center">
            <TimeIcon variant="orbit" scale={3} />
          </div>
          <p className="text-white text-base font-bold lg:text-2xl">
            Cumplimiento
          </p>
        </div>

        <div className="md:w-full max-w-[350px] rounded-md py-4 px-6 space-y-5">
          <div className="w-full text-slate-400 flex justify-center">
            <CheckIcon variant="pulse" scale={3} />
          </div>
          <p className="text-white text-base font-bold lg:text-2xl">
            Compromiso
          </p>
        </div>
      </div>

      <p className="max-w-6xl mx-auto px-2 lg:px-0">
        Visual Design es una empresa gráfica que funciona desde 1996. Dedicada a
        la producción de impresiones de gran formato / banners / cartelería /
        decoración de vidrieras / vehículos. Respondiendo a todo servicio de
        comunicación visual que requiera su empresa.
      </p>
    </section>
  );
}
