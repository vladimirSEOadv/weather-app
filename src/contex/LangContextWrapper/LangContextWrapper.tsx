import React, { createContext, useCallback, useMemo, useState } from "react";
import { LANGS } from "../../constant/langs";

export const LangContext = createContext(null);

export const LangContextWrapper: React.FC = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(LANGS[0]);
  console.log("currentLang", currentLang);
  const langSetter = useCallback((newLang) => {
    setCurrentLang(newLang);
  }, []);

  const contextValue = useMemo(
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
