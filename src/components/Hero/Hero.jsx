import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import style from "./Hero.module.css";

export default function Hero () {
    const { translation, language } = useContext(LanguageContext);
    const { english, italian } = translation;

    return(
        <article className={style.hero__container}>
            <div className={style.hero}>
                <div className={style.title}>
                    <h1>Travel Footprint</h1>
                </div>
                <div className={style.description}>
                    <p>{`${language === "english" ? english.description1 : italian.description1}`}</p>
                    <p>{`${language === "english" ? english.description2 : italian.description2}`}</p>
                    <p>{`${language === "english" ? english.description3 : italian.description3}`}</p>
                </div>
            </div>
        </article>
    )
}