"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CATEGORIES = [
  "Vinilos y Adhesivos",
  "Banners y Lonas",
  "Cartelería Exterior",
  "Servicios de Diseño",
];

const FAQ_DATA = {
  "Vinilos y Adhesivos": [
    {
      id: "1",
      question: "¿Qué tipos de vinilo ofrecen para exteriores?",
      answer:
        "Ofrecemos vinilos de alta durabilidad diseñados específicamente para exteriores, incluyendo vinilos calendados, digitales y especializados con protección UV para resistir condiciones climáticas extremas.",
    },
    {
      id: "2",
      question: "¿Cuánto tiempo duran los vinilos en exteriores?",
      answer:
        "Nuestros vinilos de exterior tienen una vida útil de 5 a 7 años dependiendo de la exposición solar y condiciones climáticas. Utilizamos adhesivos de calidad industrial que garantizan adhesión permanente.",
    },
    {
      id: "3",
      question: "¿Pueden instalar los vinilos en mi local?",
      answer:
        "Sí, contamos con un equipo especializado de instaladores que se desplazan a tu ubicación. Ofrecemos instalación profesional con garantía de trabajo bien ejecutado.",
    },
    {
      id: "4",
      question: "¿Qué resolución necesitan mis archivos para impresión?",
      answer:
        "Recomendamos una resolución mínima de 300 DPI (puntos por pulgada) para obtener la máxima calidad. Para archivos de gran formato, trabajamos con vectores o archivos a 300 DPI.",
    },
  ],
  "Banners y Lonas": [
    {
      id: "5",
      question: "¿Qué materiales utilizan para los banners?",
      answer:
        "Utilizamos lonas de PVC de alta calidad, resistentes al agua y a los rayos UV. Todos nuestros materiales cumplen con estándares internacionales de durabilidad.",
    },
    {
      id: "6",
      question: "¿Cuáles son los tiempos de entrega?",
      answer:
        "El tiempo de entrega estándar es de 5 a 7 días hábiles. Ofrecemos servicio express de 48 horas con costo adicional.",
    },
    {
      id: "7",
      question: "¿Puedo personalizar el tamaño de mis banners?",
      answer:
        "Por supuesto, manejamos tamaños personalizados según tus necesidades. Contáctanos con tus especificaciones y te daremos un presupuesto.",
    },
  ],
  "Cartelería Exterior": [
    {
      id: "8",
      question: "¿Qué opciones de acabado tienen?",
      answer:
        "Ofrecemos acabados mate, brillante y semi-brillo. Cada acabado proporciona diferentes efectos visuales y propiedades de durabilidad.",
    },
    {
      id: "9",
      question: "¿Cumplen con regulaciones municipales?",
      answer:
        "Sí, nuestros trabajos cumplen con todas las regulaciones municipales y normativas de seguridad para cartelería exterior.",
    },
  ],
  "Servicios de Diseño": [
    {
      id: "10",
      question: "¿Ofrecen servicios de diseño gráfico?",
      answer:
        "Sí, contamos con diseñadores profesionales que pueden crear diseños personalizados o mejorar los existentes para optimizar tu impresión.",
    },
    {
      id: "11",
      question: "¿Cuál es el proceso de revisión de diseños?",
      answer:
        "Entregamos borradores para tu aprobación. Realizamos ajustes sin costo hasta que quedes satisfecho con el resultado final.",
    },
  ],
};

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("Vinilos y Adhesivos");

  const currentFaqs = FAQ_DATA[activeCategory as keyof typeof FAQ_DATA];

  return (
    <section className="w-full pb-16 bg-white px-2 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">FAQs</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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
        <div className="bg-card rounded-lg border-border mb-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {currentFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="">
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                  <span className="text-lg font-medium text-left text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
