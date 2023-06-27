import React from "react";
import style from "./Navbar.module.css";
import LanguageButton from "../LanguageButton/LanguageButton";
import paperPlane from "../../assets/paper-plane-icon.png"

export default function Navbar () {
    return (
        <section className={style.navbar}>
            <img src={paperPlane} width={50} alt="paper-plane-icon" className={style.icon}/>
            <div>
                <LanguageButton />
            </div>
        </section>
    )
}