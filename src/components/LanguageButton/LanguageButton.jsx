import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import style from "./LanguageButton.module.css"

export default function LanguageButton () {
    const { language, toggleLanguage } = useContext(LanguageContext);

    function handleLanguageChange(e) {
        const selectedLanguage = e.target.value;
        toggleLanguage(selectedLanguage);
    }

    return (
        <form>
            <div className={style.select__container}>
                <h4>Select a language</h4>
                <select value={language} onChange={handleLanguageChange} className={style.langInput}>
                    <option value="english" onClick={toggleLanguage}>ENG</option>
                    <option value="italian" onClick={toggleLanguage}>ITA</option>
                </select>
            </div>
        </form>
    );
};