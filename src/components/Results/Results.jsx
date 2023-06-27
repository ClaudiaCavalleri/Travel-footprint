import React, { useContext } from "react";
import style from "./Results.module.css";
import { AppContext } from '../../context/AppContext';
import { LanguageContext } from "../../context/LanguageContext";


export default function Results ({
    footprint,
    totalFootprint,
    newSearch,
}) {
    const { state } = useContext(AppContext);
    const { searchQuery } = state;
    const { translation, language } = useContext(LanguageContext);
    const { english, italian } = translation;

    return (
        <section className={style.results__container}>
            <div className={style.results}>
                <div className={style.totalFootprint}>
                    <h2>{`${language === "english" ? english.totalFootprint : italian.totalFootprint}`}</h2>
                    <h3><span>{totalFootprint}</span> Kg {`${language === "english" ? english.of : italian.of}`} CO<sub>2</sub></h3>
                </div>
                <h2>{`${language === "english" ? english.footprintPerPassenger : italian.footprintPerPassenger}`}</h2>
                <h4><span>{footprint}</span> Kg {`${language === "english" ? english.of : italian.of}`} CO<sub>2</sub></h4>
            </div>
            <div className={style.summary}>
                <h4>{`${language === "english" ? english.summary : italian.summary}`}</h4>
                <ul>
                    <li>{`${language === "english" ? english.departureAirport : italian.departureAirport}`}: {searchQuery.from.slice(6)},</li>
                    <li>{`${language === "english" ? english.arrivalAirport : italian.arrivalAirport}`}: {searchQuery.to.slice(6)},</li>
                    <li>{`${language === "english" ? english.passengers : italian.passengers}`}: {searchQuery.passengers},</li>
                    <li>{`${language === "english" ? english.class : italian.class}`}: {searchQuery.classes === "premium_economy" ? "Premium Economy" : searchQuery.classes[0].toUpperCase() + searchQuery.classes.slice(1)}.</li>
                </ul>
            </div>
            <button 
                id={style.newSearchButton} 
                onClick={newSearch}
            >
                {`${language === "english" ? english.newSearch : italian.newSearch}`}
            </button>
        </section>
    )
}