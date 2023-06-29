import React, { useContext } from "react";
import style from "./Results.module.css";
import { AppContext } from '../../context/AppContext';
import { useTranslation } from "react-i18next";


export default function Results ({
    footprint,
    totalFootprint,
    newSearch,
}) {
    const { state } = useContext(AppContext);
    const { searchQuery } = state;
    const { t } = useTranslation();

    return (
        <section className={style.results__container}>
            <div className={style.results}>
                <div className={style.footprintPerPassenger}>
                    <h2>{t("footprintPerPassenger")}</h2>
                    <h4><span>{footprint}</span> Kg {t("of")} CO<sub>2</sub></h4>
                    <p>* {searchQuery.passengers} {t("passengers")} =</p>
                </div>
                <div className={style.totalFootprint}>
                    <h2>{t("totalFootprint")}</h2>
                    <h3><span>{totalFootprint}</span> Kg {t("of")} CO<sub>2</sub></h3>
                </div>
            </div>
            <div className={style.summary}>
                <h4>{t("summary")}</h4>
                <ul>
                    <li>{t("departureAirport")}: {searchQuery.from.slice(6)},</li>
                    <li>{t("arrivalAirport")}: {searchQuery.to.slice(6)},</li>
                    <li>{t("class")}: {searchQuery.classes === "premium_economy" ? "Premium Economy" : searchQuery.classes[0].toUpperCase() + searchQuery.classes.slice(1)}.</li>
                </ul>
            </div>
            <button 
                id={style.newSearchButton} 
                onClick={newSearch}
            >
                {t("newSearch")}
            </button>
        </section>
    )
}