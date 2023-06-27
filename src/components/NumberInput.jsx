import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { LanguageContext } from "../context/LanguageContext";
import style from "./SearchForm/SearchForm.module.css"
import { FaUserFriends } from "react-icons/fa";

const NumberInput = ({ handleChange }) => {
    const { state } = useContext(AppContext);
    const { searchQuery } = state;

    const { translation, language } = useContext(LanguageContext);
    const { english, italian } = translation;

    return (
        <div>
            <label>
                <h3>{`${language === "english" ? english.passengers : italian.passengers}`}</h3>
                <div className={style.inputRow}>
                    <FaUserFriends size={30} className={style.icon}/>
                    <input
                        type="number"
                        placeholder={`${language === "english" ? english.placeholderPass : italian.placeholderPass}`}
                        name="Passengers"
                        min={1}
                        value={searchQuery.passengers}
                        required
                        onChange={handleChange}
                    />
                </div>
            </label>
        </div>
    );
};

export default NumberInput;