import React from "react";
import { useTranslation } from "react-i18next";
import style from "./LanguageButton.module.css"

export default function LanguageButton () {
    const { t, i18n } = useTranslation();

    const lngs = {
        en: { nativeName: 'English' },
        it: { nativeName: 'Italiano' }
    };
    
    return (
        <form>
            <div className={style.select__container}>
                <h4>{t("selectALanguage")}</h4>
                <div>
                    {Object.keys(lngs).map((lng) => (
                        <button 
                            type="submit" 
                            className={style.langButton}
                            key={lng} 
                            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} 
                            onClick={() => i18n.changeLanguage(lng)}
                        >
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
            </div>
        </form>
    );
};