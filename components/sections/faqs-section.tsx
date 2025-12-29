"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Simplified categories as requested
const CATEGORIES = [
  "Vinilos y Vidrieras",
  "Gráfica Vehicular",
  "Cartelería y Corpóreos",
  "Impresión y Gran Formato",
  "Servicios y Técnica",
];

type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

const FAQ_DATA: Record<string, FaqItem[]> = {
  "Vinilos y Vidrieras": [
    {
      id: "v-1",
      question: "¿Qué servicios de gráfica, impresión y ploteo ofrecen?",
      answer: (
        <span>
          Somos una empresa especializada en{" "}
          <strong>gráfica en gran formato</strong>, <strong>ploteo</strong>,{" "}
          <strong>impresión UV</strong>, solvente, vinilos, corpóreos,
          cartelería exterior, gráfica vehicular, señalética, vidrieras
          comerciales, lonas, banners, backlights, frontlights y más. Atendemos
          locales comerciales, franquicias, agencias, empresas, shoppings,
          eventos, stands y proyectos corporativos.
        </span>
      ),
    },
    {
      id: "v-2",
      question: "¿Qué tipos de vinilos trabajan para vidrieras y exteriores?",
      answer:
        "Trabajamos vinilo mate o brillo de alta calidad, base blanca negra y gris, vinilo clear (transparente), vinilo vehicular, vinilo microperforado, vinilo esmerilado, vinilo de corte, vinilos premium para exteriores, vinilos alta resistencia, y materiales importados.",
    },
    {
      id: "v-3",
      question: "¿Qué vinilo me conviene para un local comercial?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Para decoración, branding u ofertas temporales:{" "}
            <strong>vinilo de corte</strong>.
          </li>
          <li>
            Para cubrir grandes superficies: <strong>vinilo impreso UV</strong>.
          </li>
          <li>
            Para privacidad: <strong>esmerilado</strong>.
          </li>
          <li>
            Para no cubrir totalmente: <strong>microperforado</strong>.
          </li>
        </ul>
      ),
    },
    {
      id: "v-4",
      question: "¿Hacen ploteo completo de vidrieras?",
      answer:
        "Sí. Realizamos ploteo total, parcial, diseño personalizado, instalación, retirado de vinilos viejos, renovación estética y branding completo de locales y comercios.",
    },
    {
      id: "v-5",
      question: "¿Cuánto cuesta plotear una vidriera?",
      answer:
        "El costo depende del tipo de vinilo, tamaño, instalación y diseño. Cotizamos por m² y ofrecemos opciones en UV, solvente, vinilos premium y vinilos económicos.",
    },
  ],
  "Gráfica Vehicular": [
    {
      id: "gv-1",
      question: "¿Hacen ploteo de autos, camionetas y flotas?",
      answer:
        "Sí. Realizamos ploteo o gráfica vehicular para vehículos comerciales o flotas de vehiculos, branding para flotas, rotulación comercial, vinilo premium, logos, datos comerciales, gráfica reflectiva y más.",
    },
    {
      id: "gv-2",
      question: "¿Qué vinilo se usa para plotear vehículos?",
      answer:
        "Depende el uso, usamos vinilo de alta durabilidad, especiales para curvas, exposición solar y lavado frecuente.",
    },
    {
      id: "gv-3",
      question: "¿Cuánto dura el ploteo de un auto?",
      answer:
        "Depende del material y del cuidado, pero utilizamos vinilos con excelente resistencia a sol, lluvia, lavado y desgaste.",
    },
    {
      id: "gv-4",
      question: "¿Pueden plotear flotas corporativas completas?",
      answer:
        "Sí ploteamos flotas de vehiculos. Trabajamos con empresas, franquicias, agencias de publicidad y marcas que necesitan mantener estética uniforme en varios vehículos.",
    },
  ],
  "Cartelería y Corpóreos": [
    // Merged Cartelería Exterior + Corpóreos y 3D
    {
      id: "ce-1",
      question: "¿Qué tipo de carteles exteriores producen?",
      answer:
        "Fabricamos e instalamos carteles en lona, backlights, banners, rollup, frontlights, totems, marquesinas, carteles rígidos, rótulos comerciales, banderolas, señalética corporativa, carteles para fachadas y estructuras para vía pública.",
    },
    {
      id: "ce-2",
      question: "¿Qué lona conviene para exterior?",
      answer: (
        <span>
          Imprimimos en <strong>lona front</strong> para carteles generales, y{" "}
          <strong>lona backlight</strong> para cajas de luz o estructuras
          iluminadas.
        </span>
      ),
    },
    {
      id: "ce-3",
      question: "¿Cuánto tarda la impresión de una lona?",
      answer:
        "Dependiendo del tamaño y la complejidad. Contamos con entregas rápidas (24hs si se envían los archivos listos).",
    },
    {
      id: "c3d-1",
      question: "¿Hacen letras corpóreas 3D?",
      answer:
        "Sí, en Visual Design fabricamos corpóreos en PVC, MDF, acrílico, chapa, foamboard, con iluminación LED o sin iluminación. Ideales para locales, stands, eventos, oficinas y fachadas.",
    },
    {
      id: "c3d-2",
      question: "¿Qué materiales convienen para un corpóreo?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>PVC:</strong> económico y liviano.
          </li>
          <li>
            <strong>Acrílico:</strong> elegante, premium.
          </li>
          <li>
            <strong>Chapa:</strong> duradero y resistente para exterior.
          </li>
          <li>
            <strong>MDF:</strong> indicado para interior.
          </li>
        </ul>
      ),
    },
  ],
  "Impresión y Gran Formato": [
    {
      id: "igf-1",
      question: "¿Qué diferencia hay entre impresión UV y solvente?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Impresion en Solvente:</strong> máxima calidad, colores
            firmes, secado inmediato, excelente para interiores y vidrieras.
          </li>
          <li>
            <strong>Impresion en UV:</strong> gran resistencia exterior, ideal
            para lonas, banners, carteles de gran tamaño y piezas expuestas al
            clima.
          </li>
        </ul>
      ),
    },
    {
      id: "igf-2",
      question: "¿Qué materiales imprimen?",
      answer:
        "Imprimimos lonas, vinilos, telas, PVC espumado, acrílicos, PET, banners, microperforados, backlights, cartelería rígida, papeles fotográficos y más.",
    },
    {
      id: "igf-3",
      question: "¿Qué anchos de impresión manejan?",
      answer:
        "Trabajamos en impresión de gran formato con anchos de 1,60 metros (vinilos, lonas, banners). También hacemos impresiones en anchos de 1,37 m, 1,52 m, 3,20 m según el material y proyecto.",
    },
  ],
  "Servicios y Técnica": [
    // Merged Instalación, Permisos, Diseño, Producción, Archivos
    {
      id: "dp-1",
      question: "¿Pueden hacer diseño + impresión + instalación?",
      answer: (
        <span>
          Sí, ofrecemos servicio completo:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Diseño</li>
            <li>Producción</li>
            <li>Impresión</li>
            <li>Instalación</li>
            <li>Gestión de permisos</li>
          </ul>
        </span>
      ),
    },
    {
      id: "ip-1",
      question: "¿Necesito permisos municipales para instalar una gráfica?",
      answer:
        "Si estás en un shopping, cadenas o espacios comerciales con regulaciones, nosotros gestionamos los permisos y contamos con papelería habilitante.",
    },
    {
      id: "ip-2",
      question: "¿Hacen instalación profesional en todo CABA y alrededores?",
      answer:
        "Sí. Instalamos vidrieras, carteles, lonas, corpóreos, vehículos, señalética, y realizamos montajes en altura cuando es necesario.",
    },
    {
      id: "dp-2",
      question: "¿Hacen relevamiento en mi local?",
      answer:
        "Sí. Vamos a tu comercio, tomamos medidas, analizamos luz, vidrieras y necesidades específicas.",
    },
    {
      id: "ip-3",
      question: "¿Pueden desmontar gráfica vieja y colocar una nueva?",
      answer:
        "Sí, retiramos material viejo y dejamos la superficie lista para la nueva instalación.",
    },
    {
      id: "ar-1",
      question: "¿Qué resolución necesitan mis archivos para imprimir?",
      answer: (
        <span>
          Para impresión profesional recomendamos:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>100–150 dpi</strong> en tamaño real para gran formato.
            </li>
            <li>
              <strong>200–300 dpi</strong> para piezas vistas de cerca.
            </li>
            <li>Recibimos JPG, TIFF, PNG y EPS (Vectores).</li>
          </ul>
        </span>
      ),
    },
  ],
};

const INITIAL_VISIBLE_COUNT = 5;

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("Vinilos y Vidrieras");
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expansion when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setIsExpanded(false);
  };

  const currentFaqs = FAQ_DATA[activeCategory] || [];
  const visibleFaqs = isExpanded
    ? currentFaqs
    : currentFaqs.slice(0, INITIAL_VISIBLE_COUNT);
  const showViewMore = currentFaqs.length > INITIAL_VISIBLE_COUNT;

  return (
    <section className="w-full pb-16 bg-white px-2 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">FAQs</h2>
          <p className="text-muted-foreground text-lg">
            Preguntas frecuentes sobre nuestros servicios
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="bg-card rounded-lg border-border mb-8">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {visibleFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="">
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                  <span className="text-lg font-medium text-left text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* View More Button */}
        {showViewMore && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group"
            >
              {isExpanded ? (
                <>
                  Ver menos <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Ver más preguntas <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
