/**
 * Marca de "ya se mostró el aviso de CUADROS UNICOS en el menú".
 *
 * La comparten el tour de desktop (`components/sections/cu-tour.tsx`) y la
 * tarjeta del navbar mobile: si la persona ya lo vio en un tamaño de pantalla,
 * no se le vuelve a mostrar en el otro.
 */
export const CU_TOUR_KEY = "visuald-cu-tour";

export function hasSeenCuTour(): boolean {
  try {
    return window.localStorage.getItem(CU_TOUR_KEY) === "1";
  } catch {
    return false;
  }
}

export function markCuTourSeen() {
  try {
    window.localStorage.setItem(CU_TOUR_KEY, "1");
  } catch {
    // Sin storage se vuelve a mostrar en la próxima carga.
  }
}

export function resetCuTour() {
  try {
    window.localStorage.removeItem(CU_TOUR_KEY);
  } catch {
    // Sin storage no hay nada que borrar.
  }
}
