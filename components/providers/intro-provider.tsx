"use client";

import { createContext, useContext, useState } from "react";

type IntroContextType = {
  hasPlayed: boolean;
  setHasPlayed: (value: boolean) => void;
};

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [hasPlayed, setHasPlayed] = useState(false);

  return (
    <IntroContext.Provider value={{ hasPlayed, setHasPlayed }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (context === undefined) {
    throw new Error("useIntro must be used within an IntroProvider");
  }
  return context;
}
