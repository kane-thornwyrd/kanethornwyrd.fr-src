"use client"
import { isMobile } from "@local/utils";
import { createContext, FC } from "react";


type isMobileProviderProps = { children: React.ReactNode };

const isMobileContext = createContext<boolean>(isMobile());

export const isMobileProvider: FC<isMobileProviderProps> = ({ children }) => { 
  return (
    <isMobileContext.Provider value={true}>
      {children}
    </isMobileContext.Provider>
  );
}