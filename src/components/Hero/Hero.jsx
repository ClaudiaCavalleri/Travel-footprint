import React from "react";
import style from "./Hero.module.css";
import { useTranslation } from "react-i18next";

export default function Hero () {
    const { t } = useTranslation();

    return(
        <article className={style.hero__container}>
            <div className={style.hero}>
                <div className={style.title}>
                    <h1>{t("title")}</h1>
                </div>
                <div className={style.description}>
                    <p>{t("description1")}</p>
                    <p>{t("description2")}</p>
                    <p>{t("description3")}</p>
                </div>
            </div>
        </article>
    )
}