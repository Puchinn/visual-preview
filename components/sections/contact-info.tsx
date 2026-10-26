import type React from "react";
import {
  Phone,
  Calendar,
  MessageCircle,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface ContactCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string[];
  action: string;
  href: string;
}

export default function ContactInfoSection() {
  const contacts: ContactCard[] = [
    {
      id: "phone",
      icon: <Phone className="w-8 h-8" />,
      title: "Lineas de atención",
      description: ["(011) 4382-9100/9400"],
      action: "Llamar",
      href: siteConfig.links.tel,
    },
    {
      id: "appointment",
      icon: <Calendar className="w-8 h-8" />,
      title: "Email de contacto",
      description: ["info@visuald.com.ar"],
      action: "Agendar",
      href: siteConfig.links.mail,
    },
    {
      id: "whatsapp",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Escribinos por WhatsApp",
      description: ["+54 9 11 54990028"],
      action: "Chatear",
      href: `${siteConfig.links.whatsapp}/?text=${siteConfig.links.whatsappMessages.grafica}`,
    },
    {
      id: "map",
      icon: <MapPin className="w-8 h-8" />,
      title: "Ubicación",
      description: ["Santiago del Estero 330, CABA"],
      action: "Ver mapa",
      href: "https://maps.app.goo.gl/nXnfhEQs8aqLt9aB9",
    },
  ];

  return (
    <section className="pb-20 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            PONETE EN CONTACTO CON NOSTROS
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {contacts.map((contact) => {
            const isExternal = contact.href.startsWith("http");
            return (
              <div
                key={contact.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary/15"
              >
                {/* Icon */}
                <div className="text-primary/80 mb-4">{contact.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-red-900 mb-2">
                  {contact.title}
                </h3>

                {contact.description.map((line, idx) => (
                  <p key={idx} className="text-sm text-primary/60 mb-1">
                    {line}
                  </p>
                ))}

                {/* Action Button */}
                <a
                  href={contact.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-primary/70 hover:text-primary/80 font-medium group"
                >
                  <span>{contact.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
