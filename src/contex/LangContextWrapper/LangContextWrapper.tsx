import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { LANGS } from "../../constant/langs";

interface LangContextWrapperProps {
  children: ReactNode;
}

export interface LangContextInterface {
  currentLang: string;
  langSetter: (value: string) => void;
}

// @ts-ignore
export const LangContext = createContext<LangContextInterface>();

export const LangContextWrapper: React.FC<LangContextWrapperProps> = ({
  children,
}) => {
  if (LANGS?.length < 2 || !LANGS[0]) {
    throw new Error(
      "Langs must be contain two or more languages. Add to ../../constant/langs",
    );
  }
  const [currentLang, setCurrentLang] = useState<string>(LANGS[0]);
  console.log("currentLang", currentLang);
  const langSetter = useCallback((newLang: string): void => {
    if (LANGS.includes(newLang)) {
      setCurrentLang(newLang);
    } else {
      console.warn(`Langs dosnt contain this langcode`);
    }
  }, []);

  const contextValue: LangContextInterface = useMemo(
    () => ({
      currentLang,
      langSetter,
    }),
    [currentLang, langSetter],
  );
  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};
