import { ImageGallery } from "@/components/gallery/image-gallery";
import { getGalleryImages } from "@/lib/getGalleryImages";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  const imagesDir = path.join(process.cwd(), "public", "images");

  // Ensure directory exists to avoid build errors if empty
  if (!fs.existsSync(imagesDir)) {
    return [];
  }

  const dirs = fs.readdirSync(imagesDir).filter((file) => {
    return fs.statSync(path.join(imagesDir, file)).isDirectory();
  });

  // Solo los servicios declarados en siteConfig son páginas válidas.
  // Carpetas como `cuadros-unicos` tienen su propia ruta y no son servicios.
  return dirs
    .filter((dir) => dir in siteConfig.pages.services)
    .map((dir) => ({
      service: dir,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const serviceData =
    siteConfig.pages.services[
      service as keyof typeof siteConfig.pages.services
    ];

  if (!serviceData) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: serviceData.page_title,
    description: serviceData.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  // Solo los servicios declarados en siteConfig tienen página. Cualquier otra
  // carpeta en public/images/ (por ejemplo cuadros-unicos) tiene su propia
  // ruta y no corresponde a /servicios/[service].
  if (!(service in siteConfig.pages.services)) {
    notFound();
  }

  // Verify folder exists to handle 404s gracefully if dynamicParams is true
  // and someone navigates to a non-existent service
  const folderPath = path.join(process.cwd(), "public", "images", service);
  if (!fs.existsSync(folderPath)) {
    notFound();
  }

  const images = getGalleryImages(service);

  return (
    <div className="">
      <div className="bg-black relative">
        <div className="pb-14 pt-20 mx-auto relative max-w-[1400px]">
          <p className="sr-only">Nuestro servicio de</p>
          <h1 className="text-white text-6xl z-10 relative text-center lg:text-start lg:text-9xl font-dirtylane">
            {siteConfig.pages.services[
              service as keyof typeof siteConfig.pages.services
            ]?.content_title ||
              service
                .replaceAll("-", " ")
                .replace(service.charAt(0), service.charAt(0).toUpperCase())}
          </h1>
        </div>

        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%)",
            // agrega un fondo con una imagen y con una capa oscura por encima
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('${
              images.length > 2 ? images[2] : images[0] || ""
            }')`,
          }}
          className={`absolute top-0 right-0 bg-cover bg-center bg-no-repeat w-full max-w-[40%] h-full ${
            images.length === 0 ? "bg-gray-900" : ""
          }`}
        ></div>
      </div>
      <div className="flex flex-wrap mx-auto max-w-[1400px] -mt-5 justify-center lg:justify-start relative gap-2 z-10 mb-6">
        <LinkButton
          href={`/servicios/vinilos-y-vidrieras`}
          active={service === "vinilos-y-vidrieras"}
          label="Vinilos y Vidrieras"
        />
        <LinkButton
          href={`/servicios/montados`}
          active={service === "montados"}
          label="Montados"
        />
        <LinkButton
          href={`/servicios/corporeos`}
          active={service === "corporeos"}
          label="Corpóreos"
        />
        <LinkButton
          href={`/servicios/banners-y-carteleria`}
          active={service === "banners-y-carteleria"}
          label="Banners y Cartelería"
        />
        <LinkButton
          href={`/servicios/grafica-vehicular`}
          active={service === "grafica-vehicular"}
          label="Gráfica Vehicular"
        />
      </div>
      <div className="px-2 lg:px-0">
        <ImageGallery imagesGallery={images} />
      </div>

      <div className="mt-[80px]"></div>
    </div>
  );
}

function LinkButton({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`uppercase lg:text-lg text-base px-2 lg:px-4 py-1 hover:bg-gray-tone-4 transition-all duration-400 text-white  rounded-full ${
        active
          ? "bg-gray-tone-4 border-2"
          : "bg-primary border-2 border-transparent"
      }`}
    >
      {label}
    </Link>
  );
}
