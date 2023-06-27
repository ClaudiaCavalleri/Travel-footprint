import React, { createContext, useState } from "react";
import { translation } from "./translation";

export const LanguageContext = createContext();

export default function LanguageContextProvider({children}) {
    const [ language, setLanguage ] = useState("english");

    function toggleLanguage (e) {
        setLanguage((prevLang) => (prevLang === "english" ? "italian" : "english"))
        console.log(language)
    }

    return (
        <LanguageContext.Provider value={{translation, language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

