"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { INTENT_KEY, type SiteIntent } from "@/lib/site-config";

type IntentContextType = {
  /** Motivo declarado por el visitante. `null` mientras no lo eligió. */
  intent: SiteIntent | null;
  /** True si el modal de bienvenida todavía no se respondió. */
  needsChoice: boolean;
  setIntent: (value: SiteIntent) => void;
  /** Cierra el modal sin declarar un motivo (p. ej. "Solo estaba mirando"). */
  dismissChoice: () => void;
};

const IntentContext = createContext<IntentContextType | undefined>(undefined);

/** Valor guardado cuando el visitante cerró el modal sin elegir. */
const DISMISSED = "dismissed";

/**
 * Durante el render del servidor no sabemos qué hay en localStorage.
 * Este centinela evita abrir el modal en el HTML inicial y, como
 * useSyncExternalStore re-renderiza al hidratar, el modal aparece después
 * sin mismatch de hidratación.
 */
const PENDING = "__pending__";

function readStored(): string {
  try {
    return window.localStorage.getItem(INTENT_KEY) ?? PENDING;
  } catch {
    // localStorage puede estar bloqueado (modo privado, cookies deactivated).
    return PENDING;
  }
}

function subscribe(onStoreChange: () => void) {
  // El evento `storage` solo se dispara en otras pestañas; el evento propio
  // cubre los cambios que hacemos en esta.
  const onStorage = () => onStoreChange();
  window.addEventListener("storage", onStorage);
  window.addEventListener("visuald-intent-change", onStorage);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("visuald-intent-change", onStorage);
  };
}

function writeStored(value: string) {
  try {
    window.localStorage.setItem(INTENT_KEY, value);
  } catch {
    // Sin persistencia, el modal se vuelve a mostrar en la próxima visita.
  }
  window.dispatchEvent(new Event("visuald-intent-change"));
}

export function IntentProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, readStored, () => PENDING);

  const setIntent = useCallback((value: SiteIntent) => {
    writeStored(value);
  }, []);

  const dismissChoice = useCallback(() => {
    writeStored(DISMISSED);
  }, []);

  const value = useMemo<IntentContextType>(() => {
    const intent: SiteIntent | null =
      stored === "grafica" || stored === "cuadros" ? stored : null;
    const needsChoice =
      stored === PENDING ||
      (stored !== DISMISSED && stored !== "grafica" && stored !== "cuadros");

    return { intent, needsChoice, setIntent, dismissChoice };
  }, [stored, setIntent, dismissChoice]);

  return (
    <IntentContext.Provider value={value}>{children}</IntentContext.Provider>
  );
}

export function useIntent() {
  const context = useContext(IntentContext);
  if (context === undefined) {
    throw new Error("useIntent must be used within an IntentProvider");
  }
  return context;
}
