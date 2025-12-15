import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[90vh] flex-col items-center justify-center bg-white text-center text-black p-4">
      <h1 className="text-9xl font-dirtylane mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-8">Página no encontrada</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="bg-primary hover:bg-gray-tone-4 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 uppercase"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
