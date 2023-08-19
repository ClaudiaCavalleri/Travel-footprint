import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Footer.module.css";

export default function Footer () {
    const { t } = useTranslation();

    return (
        <section className={style.footer}>
            <div className={style.footer__logo}>
                <h2>Travel Footprint</h2>
                <small>Claudia Cavalleri © 2023</small>
            </div>
            <div className={style.footer__climateInfo}>
                <p><a href="https://www.goclimate.com" target="_blank" rel="noreferrer">GoClimate {t("WebSite")}</a></p>
                <p><a href="https://www.goclimate.com/blog/wp-content/uploads/2019/04/Calculations-in-GoClimateNeutral-Flight-Footprint-API.pdf" target="_blank" rel="noreferrer">{t("how")}</a></p>
            </div>
            <div className={style.footer__about}>
                <p><a href="https://claudiacavalleri.netlify.app" target="_blank" rel="noreferrer">Portfolio</a></p>
                <p><a href="https://www.linkedin.com/in/claudiacavalleri/" target="_blank" rel="noreferrer">Linkedin</a></p>
            </div>
        </section>
    )
}